import React from 'react'
import { Pagination  } from 'antd'
export default class myPgination extends React.Component {
    changePage = (current) => {
        let pagination = {
            total: this.props.pagination.total,
            pageSize: this.props.pagination.pageSize,
            current: current,
        }
        this.props.handlePaginationChange(pagination)
    }
    render() {
        const props = {
            size: 'small',
            showQuickJumper: true,
            //showTotal: () => `共${this.props.pagination.total}条`,
            pageSize: this.props.pagination.pageSize,
            current: this.props.pagination.current,
            total: this.props.pagination.total,
            onChange: (current) => this.changePage(current)
        }
        return (
            <div style={{marginTop:'20px'}}>
                <Pagination  {...props} />
            </div>
        )
    }
}