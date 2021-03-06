import React from "react";
import { Row, Col, Card } from "antd";
import { HttpGet } from "../../server/get";
import { ARTICLE_LIST_ALL } from "../../constants/constants";
import "./index.less";
import Swiper from "swiper/swiper-bundle.js";
import "swiper/swiper-bundle.min.css";
import TestImg from "../../assets/image/test.png";
export default class Index extends React.Component {
  state = {
    list: [
      {
        id: 1,
        key: "/partyBuild",
        title: "党建管理"
      },
      {
        id: 2,
        key: "/labourUnion",
        title: "工会工作"
      },
      {
        id: 3,
        key: "/technology",
        title: "科技创新"
      },
      {
        id: 4,
        key: "/youthLeague",
        title: "团青工作"
      },
      {
        id: 5,
        key: "/teamBuild",
        title: "班组建设"
      },
      {
        id: 20,
        key: "/employeeStyle",
        title: "员工风采"
      }
    ],
    data: []
  };
  view = item => {
    window.location.href = `#/article/${item.id}`;
  };
  componentDidMount = () => {
    this.state.list.map(item => {
      HttpGet(ARTICLE_LIST_ALL, { leixbs: item.id }).then(res => {
        let data = this.state.data;
        data.push({
          key: item.id,
          value: res.data.data
        });
        this.setState(data);
      });
    });
    new Swiper(".swiper-container", {
      loop: true, //循环
      autoplay: {
        //滑动后继续播放（不写官方默认暂停）
        disableOnInteraction: false
      },
      slidesPerView: 3,
      spaceBetween: 10,
      observer: true,
      observeParents: true,
      observeSlideChildren: true
    });
  };
  render() {
    return (
      <div>
        {window.g.index.map(t => {
          let key = "";
          let id = "";
          this.state.list.map(l => {
            if (l.title == t) {
              key = l.key;
              id = l.id;
            }
          });
          if (t !== "班组建设" && t !== "员工风采") {
            return (
              <Row className="th1_row">
                <div style={{ padding: "20px 15px" }}>
                  <div className="title4">
                    <div className="line"></div>
                    <div className="title2-text">{t}</div>
                  </div>
                </div>
                <Col span={14}>
                  <div className="left-item">
                    <div className="left-content">
                      <div>
                        {this.state.data.map(i => {
                          if (i.key == id) {
                            return i.value.map((item, index) => {
                              if (index == 0) {
                                return (
                                  <div
                                    onClick={() => {
                                      this.view(item);
                                    }}
                                    style={{ cursor: "pointer" }}
                                  >
                                    <div className="img">
                                      <img
                                        src={item.slt ? item.slt : TestImg}
                                        alt=""
                                        style={{
                                          width: "100%",
                                          height: "100%"
                                        }}
                                      />
                                    </div>
                                    <div
                                      key={item.id}
                                      className="indexFileItem1"
                                    >
                                      <div className="title">{item.wenzbt}</div>
                                      <div className="time">
                                        {item.fabsj
                                          ? item.fabsj.slice(0, 10)
                                          : ""}
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                            });
                          }
                        })}
                      </div>
                      <div className="article_item">
                        <div style={{ minHeight: 245 }}>
                          {this.state.data.map(i => {
                            if (i.key == id) {
                              return i.value.map((item, index) => {
                                if (index > 2 && index < 10) {
                                  return (
                                    <div
                                      key={item.id}
                                      className="indexFileItem"
                                      onClick={() => {
                                        this.view(item);
                                      }}
                                    >
                                      <div className="circle"></div>
                                      <div className="title">{item.wenzbt}</div>
                                      <div className="time">
                                        {item.fabsj
                                          ? item.fabsj.slice(0, 10)
                                          : ""}
                                      </div>
                                    </div>
                                  );
                                }
                              });
                            }
                          })}
                        </div>
                        <div
                          style={{
                            textAlign: "right",
                            backgroundColor: "#f3f3f3",
                            padding: "10px"
                          }}
                        >
                          <div
                            className="more"
                            onClick={() => {
                              window.location.href = `#${key}`;
                            }}
                          >
                            更多
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col span={10}>
                  <div className="right-item">
                    <div>
                      {this.state.data.map(i => {
                        if (i.key == id) {
                          return i.value.map((item, index) => {
                            if (index > 0 && index < 3) {
                              return (
                                <div
                                  className="right-article"
                                  key={index}
                                  onClick={() => {
                                    this.view(item);
                                  }}
                                >
                                  <div className="img-wrap">
                                    <img
                                      src={item.slt ? item.slt : TestImg}
                                      alt=""
                                      style={{ width: "100%", height: "100%" }}
                                    />
                                  </div>
                                  <div className="content-wrap">
                                    <div className="title3">{item.wenzbt}</div>
                                    <div className="time3">
                                      {item.fabsj
                                        ? item.fabsj.slice(0, 10)
                                        : ""}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          });
                        }
                      })}
                    </div>
                  </div>
                </Col>
              </Row>
            );
          } else if (t == "班组建设") {
            return (
              <Row className="th2_row">
                <div
                  style={{
                    padding: "20px 15px",
                    display: "flex",
                    justifyContent: "space-between"
                  }}
                >
                  <div className="title4">
                    <div className="line"></div>
                    <div className="title2-text">班组建设</div>
                  </div>
                  <div
                    className="more"
                    onClick={() => {
                      window.location.href = `#/teamBuild`;
                    }}
                  >
                    更多
                  </div>
                </div>
                <Row gutter={16}>
                  {this.state.data.map(i => {
                    if (i.key == 5) {
                      return i.value.map((item, index) => {
                        if (index < 3) {
                          return (
                            <Col
                              span={8}
                              key={index}
                              onClick={() => {
                                this.view(item);
                              }}
                              style={{ cursor: "pointer" }}
                            >
                              <div className="item-Image">
                                <img
                                  src={item.slt ? item.slt : TestImg}
                                  alt=""
                                  style={{ width: "100%", height: "100%" }}
                                />
                              </div>
                              <p className="name">{item.wenzbt}</p>
                            </Col>
                          );
                        }
                      });
                    }
                  })}
                </Row>
              </Row>
            );
          } else {
            return (
              <Row className="th2_row">
                <div
                  style={{
                    padding: "20px 15px",
                    display: "flex",
                    justifyContent: "space-between"
                  }}
                >
                  <div className="title4">
                    <div className="line"></div>
                    <div className="title2-text">员工风采</div>
                  </div>
                  <div
                    className="more"
                    onClick={() => {
                      window.location.href = `#/employeeStyle`;
                    }}
                  >
                    更多
                  </div>
                </div>
                <div className="swiper-container">
                  <div className="swiper-wrapper">
                    {this.state.data.map(i => {
                      if (i.key == 20) {
                        return i.value.map((item, index) => {
                          return (
                            <div
                              className="swiper-slide"
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                this.view(item);
                              }}
                            >
                              <div className="item-Image">
                                <img
                                  src={item.slt ? item.slt : TestImg}
                                  alt=""
                                  style={{ width: "100%", height: "100%" }}
                                />
                              </div>
                              <p className="name">{item.wenzbt}</p>
                            </div>
                            // <Col
                            //   span={8}
                            //   key={index}
                            //   onClick={() => {
                            //     this.view(item);
                            //   }}
                            //   style={{ cursor: "pointer" }}
                            // >
                            //   <div className="item-Image">
                            //     <img
                            //       src={item.slt ? item.slt : TestImg}
                            //       alt=""
                            //       style={{ width: "100%", height: "100%" }}
                            //     />
                            //   </div>
                            //   <p className="name">{item.wenzbt}</p>
                            // </Col>
                          );
                        });
                      }
                    })}
                  </div>
                </div>
                {/* <Row gutter={16}>
                  {this.state.data.map(i => {
                    if (i.key == 20) {
                      return i.value.map((item, index) => {
                        if (index < 3) {
                          return (
                            <Col
                              span={8}
                              key={index}
                              onClick={() => {
                                this.view(item);
                              }}
                              style={{ cursor: "pointer" }}
                            >
                              <div className="item-Image">
                                <img
                                  src={item.slt ? item.slt : TestImg}
                                  alt=""
                                  style={{ width: "100%", height: "100%" }}
                                />
                              </div>
                              <p className="name">{item.wenzbt}</p>
                            </Col>
                          );
                        }
                      });
                    }
                  })}
                </Row> */}
              </Row>
            );
          }
        })}
      </div>
    );
  }
}
