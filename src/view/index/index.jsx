import React from 'react'
import { Row, Col } from 'antd'
import { HttpGet } from '../../server/get'
export default class Index extends React.Component {
    state = {
        list: [
            {
                key: 1,
                title: '党建管理'
            }, {
                key: 2,
                title: '工会工作'
            }, {
                key: 3,
                title: '科技创新'
            }, {
                key: 4,
                title: '团青工作'
            }, {
                key: 5,
                title: '班组建设'
            }, {
                key: 8,
                title: '员工风采'
            }
        ]
    }
    renderList = () =>{
        // this.state.list.map(item=>{
        //     HttpGet()
        // })
    }
    render() {
        return (
            <div>
                <Row>
                    {this.renderList()}
                </Row>
            </div>
        )
    }
}