import React from "react";
import "./tree.less";
import { Tree, Form, Input, Button, Table } from "antd";
import { TREE_LIST, TABLE_LIST } from "../../constants/constants";
import { HttpGet } from "../../server/get";
const { TreeNode, DirectoryTree } = Tree;
class CTree extends React.Component {
  state = {
    search: {},
    pagination: {
      pageSize: 10,
      total: 0,
      current: 1
    },
    treeData: [],
    dataSource: []
  };
  columns = [
    {
      title: "序号",
      dataIndex: "index",
      key: "index",
      render: (text, record, index) => <div>{index + 1}</div>
    },
    {
      title: "文件名称",
      dataIndex: "fileName",
      key: "fileName",
      render: (text, record) => (
        <a href={record.path} download="" target="_blank">
          {record.fileName}
        </a>
      )
    },
    {
      title: "作者",
      dataIndex: "userName",
      key: "userName"
    },
    {
      title: "创建时间",
      dataIndex: "createTime",
      key: "createTime"
    },
    {
      title: "备注",
      dataIndex: "memo",
      key: "memo"
    }
  ];
  componentDidMount = () => {
    HttpGet(TREE_LIST).then(res => {
      if (res.data) {
        this.convertTree(res.data);
        this.setState(
          {
            treeData: res.data
          },
          () => {
            this.getTableData();
          }
        );
      }
    });
  };
  getTableData = () => {
    HttpGet(TABLE_LIST, {
      cataId: this.state.currentKey,
      page: this.state.pagination.current,
      limit: this.state.pagination.pageSize,
      ...this.state.search
    }).then(res => {
      let pagination = this.state.pagination;
      pagination.total = res.data.count;
      this.setState({
        dataSource: res.data.data,
        pagination
      });
    });
  };
  convertTree = treeData => {
    treeData.forEach(item => {
      item.key = item.id;
      delete item.disabled;
      if (item.children.length !== 0) {
        this.convertTree(item.children);
      }
    });
  };
  // onExpand = (keys,event) =>{
  //   console.log(event)
  // }
  onSelect = (keys, event) => {
    console.log(event);
    this.props.form.resetFields();
    this.setState(
      {
        selectedKeys: keys,
        currentKey: keys[0],
        search: {},
        pagination: {
          pageSize: 10,
          total: 0,
          current: 1
        }
      },
      () => {
        this.getTableData();
      }
    );
  };
  handleSubmit = () => {
    let search = this.props.form.getFieldsValue();
    this.setState(
      {
        search
      },
      () => {
        this.getTableData();
      }
    );
    // 搜索接口
  };
  onPageChange = current => {
    let pagination = this.state.pagination;
    pagination.current = current;
    // 翻页接口
    this.setState(
      {
        pagination
      },
      () => {
        this.getTableData();
      }
    );
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="ctree">
        <div className="treeWrap">
          <DirectoryTree
            defaultExpandAll
            selectedKeys={this.state.selectedKeys}
            onSelect={this.onSelect}
            onExpand={this.onExpand}
            treeData={this.state.treeData}
          ></DirectoryTree>
        </div>
        <div className="tableWrap">
          <Form layout="inline" onSubmit={this.handleSubmit}>
            <Form.Item label="关键字">
              {getFieldDecorator("condition", {})(<Input />)}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                搜索
              </Button>
            </Form.Item>
          </Form>
          <div className="myTable">
            <Table
              bordered
              rowKey={"id"}
              dataSource={this.state.dataSource}
              columns={this.columns}
              pagination={{
                onChange: this.onPageChange,
                ...this.state.pagination
              }}
            />
            ;
          </div>
        </div>
      </div>
    );
  }
}
export default Form.create()(CTree);
