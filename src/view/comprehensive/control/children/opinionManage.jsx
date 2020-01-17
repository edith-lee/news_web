import React from 'react'
import MyPagination from '../../../../pagination/pagination'
import { HttpGet } from '../../../../server/get'
import { ARTICLE_LIST_ALL } from '../../../../constants/constants'
import { withRouter} from 'react-router-dom'
class DocumentPublish extends React.Component {
    state = {
        pagination: {
            total: 1,
            current: 1,
            pageSize: 20,
        },
        articleList: []
    }
    getList =(pagination) =>{
        HttpGet(ARTICLE_LIST_ALL, { leixbs: 13,page:pagination.current,limit:pagination.pageSize }).then(res => {
            console.log(res)
            let pagination = {
                current:parseInt(res.data.page),
                pageSize:parseInt(res.data.limit),
                total:parseInt(res.data.count)
            }
            this.setState({
                pagination,
                articleList:res.data.data
            })
        }).catch(err=>{
            console.log(err)
        })
    }
    componentDidMount = () => {
        let pagination ={
            total: 100,
            current: 1,
            pageSize: 20,
        }
        this.getList(pagination)
    }
    handlePaginationChange = (pagination) => {
        this.setState({
            pagination
        })
        this.getList(pagination)
    }
    view =item =>{
        window.location.href =`#/article/${item.id}`
    }
    render() {
        return (
            <div>
                <div className='articleList'>
                    {this.state.articleList.map(item => {
                        return <div key={item.id} className='articleListItem' onClick={()=>{this.view(item)}}>
                            <span><span style={{ padding: '0px 10px' }}>●</span>{item.wenzbt}</span>
                            <div>{item.fabsj?item.fabsj.slice(0,10):''}</div>
                        </div>

                    })}
                </div>
                <div>
                    <MyPagination
                        pagination={this.state.pagination}
                        handlePaginationChange={this.handlePaginationChange}
                    />
                </div>

            </div>
        )
    }
}
export default withRouter(DocumentPublish)