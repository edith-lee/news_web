import React from 'react'
import { Pagination } from 'antd'
export default class myPgination extends React.Component {
    changePage = (current) => {
        let pagination = {
            total: this.props.paginationnew.total,
            pageSize: this.props.paginationnew.pageSize,
            current: current,
        }
        this.props.handlePaginationChange(pagination)
    }
    render() {
        const props = {
            size: 'small',
            showQuickJumper: true,
            showTotal: () => `共${this.props.paginationnew.total}条`,
            pageSize: this.props.pagination.pageSize,
            current: this.props.pagination.current,
            total: this.props.pagination.total,
            onChange: (current) => this.changePage(current)
        }
        return (
            <Pagination {...props}/>
        )
    }
}