import React from 'react'
import { Row, Col, Card } from 'antd'
import { HttpGet } from '../../server/get'
import { ARTICLE_LIST_ALL } from '../../constants/constants'
export default class Index extends React.Component {
    state = {
        list: [
            {
                id: 1,
                key: '/partyBuild',
                title: '党建管理',
            }, {
                id: 2,
                key: "/labourUnion",
                title: '工会工作'
            }, {
                id: 3,
                key: "/technology",
                title: '科技创新'
            }, {
                id: 4,
                key: "/youthLeague",
                title: '团青工作'
            }, {
                id: 5,
                key: "/teamBuild",
                title: '班组建设'
            }, {
                id: 20,
                key: "/employeeStyle",
                title: '员工风采'
            }
        ]
    }
    view = item => {
        window.location.href = `#/article/${item.id}`
    }
    renderList = () => {
        return this.state.list.map(item => {
            let list = []
            HttpGet(ARTICLE_LIST_ALL, { leixbs: item.id }).then(res => {
                console.log(res)
                list = res.data.data
            })
            if (list.length < 6) {
                return <Col span={8} key={item.key} style={{ margin: '10px 0px' }}>
                    <Card title={item.title} extra={<div className='more' onClick={() => { window.location.href = `#${item.key}` }}>更多</div>}>
                        {list.map(i => {
                            return <div key={i.id} className='indexFileItem' onClick={() => { this.view(i) }}>
                                <span>{i.wenzbt}</span>
                                <div>{i.fabsj ? i.fabsj.slice(0, 10) : ''}</div>
                            </div>
                        })}

                    </Card>
                </Col>
            } else {
                let articleList = []
                for (let i = 0; i < 5; i++) {
                    articleList.push(<div key={list[i].id}  className='indexFileItem' onClick={() => { this.view(list[i]) }}>
                        <span>{list[i].wenzbt}</span>
                        <div>{list[i].fabsj ? list[i].fabsj.slice(0, 10) : ''}</div>
                    </div>)
                }
                return <Col span={8} key={item.key} style={{ margin: '10px 0px' }}>
                    <Card title={item.title} extra={<div className='more' onClick={() => { window.location.href = `#${item.key}` }}>更多</div>}>
                        {articleList}
                    </Card>
                </Col>
            }

        })
    }
    render() {
        return (
            <div style={{ padding: '10px' }}>
                <Row gutter={32}>
                    {this.renderList()}
                </Row>
            </div>
        )
    }
}