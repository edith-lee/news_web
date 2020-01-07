import React from "react";
import menuList from "../../config/menuConfig";
import { Switch, HashRouter as Router, Route } from "react-router-dom";
import { Menu } from "antd";
import { Link } from "react-router-dom";
export default class PartyBuild extends React.Component {
  renderMenuItem = () => {
    let menu = [];
    menuList.map(item => {
      if (item.key === "/partyBuild") {
        item.children.map(i => {
          menu.push(
            <Menu.Item key={i.key}>
              <Link to={i.key}>
                <p>{i.title}</p>
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
      <div style={{ display: "flex" }}>
        <div style={{ width: "25%" }}>
          <div>党建</div>
          <Menu mode="vertical">{this.renderMenuItem()}</Menu>
        </div>
        <div style={{ width: "75%" }}>
          <Router>
            <Switch>{this.renderRoute()}</Switch>
          </Router>
        </div>
      </div>
    );
  }
}
