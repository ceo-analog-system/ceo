import React, { Component } from "react";
import "./index.css";
import { Input, Spin, Pagination, Button, Table, Layout } from "antd";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import managerAxios from "../../api"



const { Content } = Layout;
const { Search } = Input;

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "系别",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "操作",
    key: "action",
    render: (record) => (
      <Button type="primary" ghost>
        <Link to={`/user_manager/choseClass/${record.id}`}>进入该班级</Link>
      </Button>
    ),
  },
];


let data = [];

export default class index extends Component {
  state = { data: [], pages: 10, loading: true, error: null };
  // 封装请求
  myAxios = (page) => {
    data = [];
    managerAxios
      .post("admin/showAllTeachers", {
        start: page,
        pageSize: "7",
      })
      .then(
        (res) => {
          res.data.data?.list.map(function (item) {
            data.push({
              key: nanoid(),
              name: item.userName,
              category: item.discipline,
              id: item.userId
            });
          });
          this.setState({
            data: data,
            pages: res.data.data?.pages,
            loading: false,
          });
        },
        (error) => {
          this.setState({ error: error, pages: 0, loading: false });
        }
      );
  };
  // 初始加载页面
  componentDidMount() {
    this.myAxios("1");
  }

  // 点击分页器
  click = (page) => {
    let newPage = page + "";
    this.myAxios(newPage);
  };
  // 搜索
  onSearch = (name) => {
    // 输入为空则返回原来
    if (name === "") {
      this.myAxios("1");
    }
    else {
      data = [];
      managerAxios
        .post("admin/showAllTeachers", {
          start: "0",
          pageSize: "1",
        })
        .then((res) => {
          managerAxios
            .post("admin/showAllTeachers", {
              start: "0",
              pageSize: `${res.data.data.pages}`,
            })
            .then((res) => {
              // console.log(res);
              res.data.data.list.map(function (item) {
                if (item.userName.indexOf(name) !== -1) {
                  data.push({
                    key: nanoid(),
                    name: item.userName,
                    category: item.discipline,
                    id: item.userId

                  });
                }
              });
              if (data.length === 0) {
                // 无
                alert("查无此人");
              } else {
                // 有
                // console.log(data);
                this.setState({
                  data: data,
                  pages: 1,
                  loading: false,
                });
              }
            });
        });
    }

  };

  render() {

    if (this.state.error !== null) {
      console.log(this.state.error.message);
      return (
        <div className="Admin_Teacher">
          <span>Error: {this.state.error.message}</span>
        </div>
      );
    } else {
      return (
        <div className="Admin_Teacher">
          <Content>
            <div className="big-teacher">
              <div className="header">
                <div className="search">
                  <Search
                    placeholder="请输入老师名字"
                    onSearch={this.onSearch}
                    enterButton
                  />
                </div>
                <h1>选择老师</h1>
              </div>
              <Table
                columns={columns}
                dataSource={this.state.data}
                pagination={false}
              />
              <Pagination
                defaultCurrent={1}
                total={this.state.pages * 10}
                showSizeChanger={false}
                onChange={this.click}
                hideOnSinglePage={true}
              />
            </div>
            {this.state.loading ? <Spin /> : <></>}
          </Content>
        </div>
      );
    }
  }
}
