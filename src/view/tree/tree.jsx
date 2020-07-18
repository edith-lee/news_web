import React from "react";
import "./tree.less";
import { Tree, Form, Input, Button, Table } from "antd";

const { TreeNode, DirectoryTree } = Tree;
class CTree extends React.Component {
  state = {
    dataSource: [
        {
            key:1,
            filename:'文件名称啦啦啦啦',
            author:"张三",
            createTime:"2020-07-18 10:22:49",
            remark:'备注几局几句军军军军军'
        },
        {
            key:2,
            filename:'文件名称啦啦啦啦',
            author:"张三",
            createTime:"2020-07-18 10:22:49",
            remark:'备注几局几句军军军军军'
        },
        {
            key:3,
            filename:'文件名称啦啦啦啦',
            author:"张三",
            createTime:"2020-07-18 10:22:49",
            remark:'备注几局几句军军军军军'
        }
    ]
  };
  columns = [
    {
      title: "序号",
      dataIndex: "index",
      key: "index",
      render:(text,record,index)=><div>{index+1}</div>
    },
    {
      title: "文件名称",
      dataIndex: "filename",
      key: "namfilenamee"
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
    console.log("Trigger Select", keys, event);
  };

  onExpand = () => {
    console.log("Trigger Expand");
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
          >
            <TreeNode title="parent 0" key="0-0">
              <TreeNode title="leaf 0-0" key="0-0-0" isLeaf />
              <TreeNode title="leaf 0-1" key="0-0-1" isLeaf />
            </TreeNode>
            <TreeNode title="parent 1" key="0-1">
              <TreeNode title="leaf 1-0" key="0-1-0" isLeaf />
              <TreeNode title="leaf 1-1" key="0-1-1" isLeaf />
            </TreeNode>
          </DirectoryTree>
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
            <Table bordered dataSource={this.state.dataSource} columns={this.columns} />;
          </div>
        </div>
      </div>
    );
  }
}
export default Form.create()(CTree);
