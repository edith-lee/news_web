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
        ],
        data: []
    }
    view = item => {
        window.location.href = `#/article/${item.id}`
    }
    componentDidMount = () => {
        this.state.list.map(item => {
            HttpGet(ARTICLE_LIST_ALL, { leixbs: item.id }).then(res => {
                let data = this.state.data;
                data.push({
                    key: item.id,
                    value: res.data.data
                })
                this.setState(data)
            })
        })
    }
    renderList = (id) => {
        return this.state.data.map(item => {
            if (item.key == id) {
                if (item.value.length < 6) {
                    return item.value.map(i => {
                        return <div key={i.id} className='indexFileItem' onClick={() => { this.view(i) }}>
                            <div className='title'>{i.wenzbt}</div>
                            <div className='time'>{i.fabsj ? i.fabsj.slice(0, 10) : ''}</div>
                        </div>
                    })
                } else {
                    for (let i = 0; i < 5; i++) {
                        return <div key={item.value[i].id} className='indexFileItem' onClick={() => { this.view(item.value[i]) }}>
                            <div className='title'>{item.value[i].wenzbt}</div>
                            <div className='time'>{item.value[i].fabsj ? item.value[i].fabsj.slice(0, 10) : ''}</div>
                        </div>
                    }
                }
            }
        })
    }
    render() {
        return (
            <div style={{ padding: '10px' }}>
                <Row gutter={32}>
                    {this.state.list.map(item => {
                        return <Col span={8} key={item.key} style={{ margin: '10px 0px' }}>
                            <Card title={item.title} extra={<div className='more' onClick={() => { window.location.href = `#${item.key}` }}>更多</div>}>
                                {this.renderList(item.id)}
                            </Card>
                        </Col>
                    })}
                </Row>
            </div>
        )
    }
}