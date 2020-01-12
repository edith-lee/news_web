import React from "react";
import { ARTICLE_LIST } from '../../constants/constants'
import {  HttpGet } from '../../server/get';
export default class PartyBuild extends React.Component {
  state={
    list:[
      {
        createby: "1",
        createon: "2020-01-12 09:58:11",
        fabsj: "2020-01-12 09:58:11",
        fuj: "",
        id: 1,
        laiy: "内网",
        mokbs: 4,
        mokbsMc: "十九大",
        neir: "& lt;div& gt;每天3分钟，速览全国法治新闻& lt;/div& gt;& lt;p& gt;& lt;span& gt;",
        updateby: "",
        updateon: "",
        wenzbt: "测试党建工作",
        zhuangt: 1,
        zuoz: "test"
      },
      {
        createby: "1",
        createon: "2020-01-12 09:58:11",
        fabsj: "2020-01-12 09:58:11",
        fuj: "",
        id: 2,
        laiy: "内网",
        mokbs: 3,
        mokbsMc: "十八大",
        neir: "& lt;div& gt;每天3分钟，",
        updateby: "",
        updateon: "",
        wenzbt: "测试党建工作",
        zhuangt: 1,
        zuoz: "test"
      },
      {
        createby: "1",
        createon: "2020-01-12 09:58:11",
        fabsj: "2020-01-12 09:58:11",
        fuj: "",
        id: 3,
        laiy: "内网",
        mokbs: 9,
        mokbsMc: "十七大",
        neir: "& lt;div& gt;每天3分钟，",
        updateby: "",
        updateon: "",
        wenzbt: "测试党建工作",
        zhuangt: 1,
        zuoz: "test"
      }
    ]
  }
  componentDidMount = () =>{
    HttpGet(ARTICLE_LIST,{leixbs:1}).then(res=>{
      console.log(res)
      if(res.data){
        let list = []
        this.setState({
          list:res.data
        })
      }
    }).catch(err=>{
      console.log(err)
    })
  }
  render() {
    return <div>

    </div>;
  }
}
