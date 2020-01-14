import React from "react";
import { MODULE_LIST, ARTICLE_LIST } from "../../constants/constants";
import { HttpGet } from "../../server/get";
import { Tabs, Row, Col } from 'antd'
const { TabPane } = Tabs;
export default class PartyBuild extends React.Component {
  state = {
    tabs: [],
    list: []
  };
  componentDidMount = () => {
    HttpGet(MODULE_LIST, { leixbs: 2 })
      .then(res => {
        console.log(res);
        if (res.success) {
          this.setState({
            tabs: res.data
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  renderArticleList = (module) => {
    let fileList = []
    HttpGet(ARTICLE_LIST, { leixbs: module.id })
      .then(res => {
        console.log(res);
        if (res.success) {
          res.data.map(item => {
            fileList.push(
              <Col key={item.id} className='articleListItem' span={11} onClick={() => { this.props.history.push(`/article/${item.id}`) }}>
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
            )
          })
        }
      })
      .catch(err => {
        console.log(err);
      });
    return fileList
  }
  render() {
    return <div className='contentWrap2'>
      <Tabs defaultActiveKey={0}>
        {this.state.tabs.map((item, index) => {
          return <TabPane tab={item.mokmc} key={index}>
            <Row >
              {this.renderArticleList(item)}
            </Row>
          </TabPane>
        })}
      </Tabs></div>;
  }
}
