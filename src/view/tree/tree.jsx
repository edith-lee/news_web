import React from "react";
import "./tree.less";
import { Tree, Form, Input, Button, Table } from "antd";

const { TreeNode, DirectoryTree } = Tree;
class CTree extends React.Component {
  state = {
    search: {},
    pagination: {
      pageSize: 10,
      total: 100,
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
      dataIndex: "filename",
      key: "namfilename",
      render: (text, record) => <a href={`${window.g.download}/${record.fileurl}`}>{record.filename}</a>
    },
    {
      title: "作者",
      dataIndex: "author",
      key: "author"
    },
    {
      title: "创建时间",
      dataIndex: "createTime",
      key: "createTime"
    },
    {
      title: "备注",
      dataIndex: "remark",
      key: "remark"
    }
  ];
  onSelect = (keys, event) => {
    if (event.node.props.children.length == 0) {
      console.log(keys[0]);
      // 点击左侧树节点调用接口
    }
  };
  handleSubmit = () => {
    let search = this.props.form.getFieldsValue();
    console.log(search);
    this.setState({
      search
    });
    // 搜索接口
  };
  onPageChange = current => {
    console.log(current);
    let pagination = this.state.pagination;
    pagination.current = current;
    // 翻页接口
    this.setState({
      pagination
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="ctree">
        <div className="treeWrap">
          <DirectoryTree
            defaultExpandAll
            onSelect={this.onSelect}
            onExpand={this.onExpand}
            treeData={this.state.treeData}
          ></DirectoryTree>
        </div>
        <div className="tableWrap">
          <Form layout="inline" onSubmit={this.handleSubmit}>
            <Form.Item label="关键字">
              {getFieldDecorator("keyword", {})(<Input />)}
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
