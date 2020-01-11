import React from "react";
import menuList from "../../config/menuConfig";
import { Switch, HashRouter as Router, Route } from "react-router-dom";
import { Menu, Breadcrumb } from "antd";
import { Link,Redirect } from "react-router-dom";
export default class PartyBuild extends React.Component {
  renderMenuItem = () => {
    let menu = [];
    menuList.map(item => {
      if (item.key === "/partyBuild") {
        item.children.map(i => {
          menu.push(
            <Menu.Item key={i.key}>
              <Link to={i.key}>
                <div>{i.title}</div>
              </Link>
            </Menu.Item>
          );
        });
      }
    });
    console.log(menu);
    return menu;
  };
  renderRoute = () => {
    let route = [];
    menuList.map(item => {
      if (item.key === "/partyBuild") {
        item.children.map(i => {
          route.push(
            <Route exact path={i.key} component={i.component} key={i.key} />
          );
        });
      }
    });
    return route;
  };
  render() {
    return (
      <div className='contentWrap'>
        <div className='Breadcrumb'>
          <Breadcrumb>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>
              党建
          </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ width: "25%" }} className='submenu'>
            <div className='submenuTitle'>党建</div>
            <Menu mode="vertical">{this.renderMenuItem()}</Menu>
          </div>
          <div style={{ width: "75%" }}>
            <Router>
              <Switch>
                {this.renderRoute()}
                <Redirect to='/partyBuild/submenu1'/>
                </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}
