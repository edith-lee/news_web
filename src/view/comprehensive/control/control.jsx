import React from "react";
import menuList from '../../../config/menuConfig'
import { Switch, HashRouter as Router, Route } from "react-router-dom";
import { Menu, Breadcrumb } from "antd";
import { Link,Redirect } from "react-router-dom";
export default class Control extends React.Component {
    state ={
        selectedKeys:'/comprehensive/control/documentPublish',
        breadcrumbText:'文件宣传'
    }
    componentWillReceiveProps = props =>{
        console.log(props)
        if(props.location.pathname === '/comprehensive/control/opinionManage'){
            this.setState({
                selectedKeys:props.location.pathname,
                breadcrumbText:'舆情管理'
            })
        }else{
            this.setState({
                selectedKeys:props.location.pathname,
            }) 
        } 
    }
  renderMenuItem = () => {
    let menu = [];
    menuList.map(item => {
      if (item.key === "/comprehensive") {
        item.children.map(i => {
            if(i.key=== '/comprehensive/control'){
                i.children2.map(j=>{
                    menu.push(
                        <Menu.Item key={j.key}>
                          <Link to={j.key}>
                            <div>{j.title}</div>
                          </Link>
                        </Menu.Item>
                      );
                })
            }
        });
      }
    });
    return menu;
  };
  renderRoute = () => {
    let route = [];
    menuList.map(item => {
        if (item.key === "/comprehensive") {
            item.children.map(i => {
                if(i.key==='/comprehensive/control'){
                    i.children2.map(j=>{
                        route.push(
                            <Route exact path={j.key} component={j.component} key={j.key} />
                          );
                    })
                }
            });
          }
    });
    return route;
  };
  handleChangeMenu = value =>{
      console.log(value)
      this.setState({
          selectedKeys:value
      })
  }
  render() {
    return (
      <div className="contentWrap">
        <div className="Breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>综合业务</Breadcrumb.Item>
            <Breadcrumb.Item>综合治理</Breadcrumb.Item>
            <Breadcrumb.Item>{this.state.breadcrumbText}</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ width: "25%" }} className="submenu">
            <div className="submenuTitle">综合治理</div>
            <Menu mode="vertical" selectedKeys={this.state.selectedKeys} onChange={this.handleChangeMenu}>
              {this.renderMenuItem()}
            </Menu>
          </div>
          <div style={{ width: "75%" }}>
            <Router>
              <Switch>
                {this.renderRoute()}
                <Redirect to="/comprehensive/control/documentPublish" />
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}
