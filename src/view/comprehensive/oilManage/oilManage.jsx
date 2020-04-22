import React from "react";
import { MODULE_LIST, ARTICLE_LIST } from "../../../constants/constants";
import { HttpGet } from "../../../server/get";
import { Tabs, Row, Col } from 'antd'
const { TabPane } = Tabs;
export default class PartyBuild extends React.Component {
  state = {
    tabs: [],
    list: [],
    filelist: [],
  };
  componentDidMount = () => {
    HttpGet(MODULE_LIST, { leixbs: 10 })
      .then(res => {
        if (res.data.success) {
          this.setState({
            tabs: res.data.data
          });
          res.data.data.map(i=>{
            this.getFilelist(i)
          })
          
        }
      })
      .catch(err => {
      });
  };
  getFilelist = (module) => {
    HttpGet(ARTICLE_LIST, { mokbs: module.id })
      .then(res => {
        if (res.data.success) {
          let filelist = this.state.filelist;
          filelist.push({
            key: module.id,
            value: res.data.data
          })
          this.setState({
            filelist
          })
        }
      })
      .catch(err => {
      });
  }
  renderArticleList = (module) => {
    let fileList = this.state.filelist
    return fileList.map(i => {
      if (i.key === module.id) {
        return i.value.map(item => {
          return <Col key={item.id} className='articleListItem' span={11} onClick={() => { this.props.history.push(`/article/${item.id}`) }}>
            <div className='time'>
              <div className='date'>
                {item.fabsj ? item.fabsj.slice(8, 10) : ''}
              </div>
              <div className='year'>
                {item.fabsj ? item.fabsj.slice(0, 7) : ''}
              </div>
            </div>
            <div className='detail'>
              <div className='title'>
                {item.wenzbt}
              </div>
              <div className='cont' dangerouslySetInnerHTML={{ __html: item.neir }}>
              </div>
            </div>
          </Col>
        })
      }
    })
  }
  render() {
    return <div className='contentWrap2'>
      < Tabs defaultActiveKey={0} >
        {
          this.state.tabs.map((item, index) => {
            return <TabPane tab={item.mokmc} key={index}>
              <Row >
                {this.renderArticleList(item)}
              </Row>
            </TabPane>
          })
        }
      </Tabs ></div >;
  }
}
