import React from 'react'
import MyPagination from '../../../pagination/pagination'
export default class Submenu1 extends React.Component {
    state = {
        pagination:{
            total:100,
            current:1,
            pageSize:10,
        },
        articleList: [
            {
                key: '1',
                title: '西安市统计局官网受到市政府政务办通报表扬',
                time: '2019-12-31'
            },
            {
                key: '2',
                title: '西安市统计局官网受到市政府政务办通报表扬',
                time: '2019-12-31'
            },
            {
                key: '3',
                title: '西安市统计局官网受到市政府政务办通报表扬',
                time: '2019-12-31'
            },
            {
                key: '4',
                title: '西安市统计局官网受到市政府政务办通报表扬',
                time: '2019-12-31'
            },
            {
                key: '5',
                title: '西安市统计局官网受到市政府政务办通报表扬',
                time: '2019-12-31'
            },
            {
                key: '6',
                title: '西安市统计局官网受到市政府政务办通报表扬',
                time: '2019-12-31'
            },
            {
                key: '7',
                title: '西安市统计局官网受到市政府政务办通报表扬',
                time: '2019-12-31'
            },
            {
                key: '8',
                title: '西安市统计局官网受到市政府政务办通报表扬',
                time: '2019-12-31'
            },
            {
                key: '9',
                title: '西安市统计局官网受到市政府政务办通报表扬',
                time: '2019-12-31'
            },
            {
                key: '10',
                title: '西安市统计局官网受到市政府政务办通报表扬',
                time: '2019-12-31'
            },
        ]
    }
    handlePaginationChange = (pagination) =>{
        this.setState({
            pagination
        })
    }
    render() {
        return (
            <div>
                <div className='articleList'>
                    {this.state.articleList.map(item => {
                        return <div key={item.key} className='articleListItem'>
                            <a><span style={{padding:'0px 10px'}}>●</span>{item.title}</a>
                            <div>{item.time}</div>
                        </div>

                    })}
                </div>
                <div>
                    <MyPagination  
                        pagination={this.state.pagination}
                        handlePaginationChange = {this.handlePaginationChange}
                    />
                </div>
                
            </div>
        )
    }
}