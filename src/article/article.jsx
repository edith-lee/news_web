import React, { Component } from "react";
import { HttpGet } from "../server/get";
import { ARTICLE_GETONE } from '../constants/constants'

class Article extends Component {
    state = {
        file: {
            createby: "",
            createon: "",
            fabsj: "",
            fuj: "",
            id: 1,
            laiy: "",
            mokbs: 4,
            neir: "",
            updateby: "",
            updateon: "",
            wenzbt: "",
            zhuangt: 1,
            zuoz: ""
        }
    }
    componentDidMount = () => {
        console.log(this.props.match.params.id)
        HttpGet(ARTICLE_GETONE, { id: this.props.match.params.id }).then(res => {
            console.log(res)
            this.setState({
                file: res.data.data
            })
        }).catch(err => {
            console.log(err)
        })
    };
    render() {
        return (
            <div className="articleWrap">
                <div className='title'>{this.state.file.wenzbt}</div>
                <div className='time'><span>{`${this.state.file.zuoz}  ${this.state.file.fabsj}`}</span></div>
                <div className='content1' dangerouslySetInnerHTML={{ __html: this.state.file.neir }}>
                </div>
                {this.state.file.finalname ? <div style={{ textAlign: "left" }}>
                    <p style={{ fontSize: 16, color: 'red', fontWeight: 'bold' }}>【附件下载地址】</p>
                    <a target="_blank" href={`${window.g.download}/${this.state.file.finalname}`}><span>{this.state.file.filename}</span></ a>
                </div> : null}
            </div>
        );
    }
}
export default Article;