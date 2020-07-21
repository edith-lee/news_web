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
    treeData: [
      {
        title: "宁夏煤业有限责任公司",
        nodeid: "0",
        key: "0",
        children: [
          {
            title: "一级目录",
            nodeid: "1284079056324784130",
            key: "1284079056324784130",
            children: [
              {
                title: "二级目录",
                nodeid: "1284079206271152129",
                key: "1284079206271152129",
                children: [
                  {
                    title: "三级",
                    nodeid: "1284081924444295170",
                    key: "1284081924444295170"
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    dataSource: [
      {
        key: 1,
        filename: "文件名称啦啦啦啦",
        author: "张三",
        createTime: "2020-07-18 10:22:49",
        remark: "备注几局几句军军军军军"
      },
      {
        key: 2,
        filename: "文件名称啦啦啦啦",
        author: "张三",
        createTime: "2020-07-18 10:22:49",
        remark: "备注几局几句军军军军军"
      },
      {
        key: 3,
        filename: "文件名称啦啦啦啦",
        author: "张三",
        createTime: "2020-07-18 10:22:49",
        remark: "备注几局几句军军军军军"
      }
    ]
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
        <a href={`${record.path}`} target="__blank">{record.fileName}</a>
      )
    },
    {
      title: "作者",
      dataIndex: "updateUser",
      key: "updateUser"
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
  firstId = "";
  componentDidMount = () => {
    HttpGet(TREE_LIST).then(res => {
      if (res.data) {
        this.convertTree(res.data);
        console.log(this.firstId);
        this.setState(
          {
            treeData: res.data,
            currentKey: this.firstId,
            selectedKeys: [this.firstId]
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
      //cataId: this.state.currentKey,
      page: this.state.pagination.current,
      limit: this.state.pagination.pageSize,
      ...this.state.search
    }).then(res => {
      console.log(res);
      let pagination = this.state.pagination;
      pagination.total = res.data.count; 
      this.setState({
        dataSource:res.data.data,
        pagination
      })
    });
  };
  convertTree = treeData => {
    treeData.forEach(item => {
      item.key = item.id;
      delete item.disabled;
      if (item.children.length !== 0) {
        this.convertTree(item.children);
      } else if (this.firstId == "") {
        this.firstId = item.id;
      }
    });
  };
  onSelect = (keys, event) => {
    if (event.node.props.children.length == 0) {
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
    }
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
    console.log(current);
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
