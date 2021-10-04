import React, { Component, useState } from "react";
import "./index.css";
import { Layout, Spin, Button, Table, Radio, Divider, Input, Modal, message } from "antd";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import managerAxios from "../../api"
const { Content } = Layout;
const { Search } = Input;


let data;
let user;
let isRepate = false;


export default class index extends Component {

  state = {
    data: [],
    collapsed: false,
    isModalVisible: false,
    loading: true,
  };




  componentDidMount() {
    managerAxios
      .post("teacher/exitClass", {
        userId: this.props.match.params.id,
      })
      .then((res) => {
        console.log(res);
        if (res.data.msg !== "没有选择的班级" && res.data.data.length != 0) {
          console.log(this.state);
          res.data.data.map(item => {
            data.push({
              key: nanoid(),
              class: item,
              action: "删除班级",
            });
          });
          this.setState({ data: data ,loading: false });
        }
      });

  }

  handleClick = () => {
    this.setState({ isModalVisible: true });
  };

  //退出提示点击确定删除
  handleOk = () => {
    this.setState({ isModalVisible: false });
    this.deleteAll()

  };


  //退出提示点击取消则关闭询问框
  handleCancel = () => {
    this.setState({ isModalVisible: false });
  };



  // 添加请求
  addAxios = (user, classId) => {
    managerAxios.post("admin/addTeacherClass", {
      userId: user,
      teacherClass: classId
    }).then((res) => { console.log(res) })
  }

  // 删除请求
  deleteAxios = (user, classId) => {
    managerAxios.post("admin/deleteTeacherClass", {
      userId: user,
      teacherClass: classId
    }).then((res) => { console.log(res) })

  }

  // 添加
  onAdd = value => {
    console.log(value);
    data = this.state.data;

    if (value === "") {
      message.error("添加不能为空")
    } else if (value.length !== 18) {
      message.error("输入有误")
    }
    else {
      data.map(item => {
        if (value === item.class) {
          message.error("不能添加重复的班级")
          isRepate = true;
        }
      })

      if (!isRepate) {
        data.push({ key: nanoid(), class: value, action: "删除班级" });
        this.setState({ data: data }, () => { console.log(this.state.data); });
        user = this.props.match.params.id;
        this.addAxios(user, value);
        message.success("添加成功")
      } else {
        isRepate = false;
      }

    }
  }

  // 删除
  onDelete = (classData) => {
    return () => {
      data = this.state.data;
      console.log(classData.class);
      data = data.filter(item =>
        item.class !== classData.class
      )
      this.setState({ data: data }, () => {
        console.log(this.state.data);
      });
      user = this.props.match.params.id;
      this.deleteAxios(user, classData.class)
      message.success("删除成功")
    }
  }


  // 删除多个
  deleteAll = () => {
    data = this.state.data;
    user = this.props.match.params.id;
    let msg = JSON.parse(sessionStorage.getItem("willDelete")) == null ? null : JSON.parse(sessionStorage.getItem("willDelete"));
    if (msg == null || msg.length === 0) {
      message.error("删除失败")
    } else {
      data = data.filter(item => {
        let index = 0;
        for (let i = 0, len = msg.length; i < len; i++) {
          if (item.class != msg[i].class) index++;
          if (index === len) return item;

        }
      })

      this.setState({ data: data }, () => {
        console.log(this.state.data);
      })

      for (let i = 0, len = msg.length; i < len; i++) {
        this.deleteAxios(user, msg[i].class);
      }


      message.success("删除成功")
      sessionStorage.removeItem("willDelete");
    }
  }



  render() {
    data = [];
    console.log(this.props.match.params.id);

    const columns = [
      {
        title: "教学班",
        dataIndex: "class",
      },
      {
        title: "操作",
        dataIndex: "action",
        render: (action, data) => {
          // console.log(data);
          return (
            <Button type="primary" ghost onClick={this.onDelete(data)}>
              {action}
            </Button>
          );
        },
      },
    ];

    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(
          `selectedRowKeys: ${selectedRowKeys}`,
          "selectedRows: ",
          selectedRows
        );
        sessionStorage.setItem('willDelete', JSON.stringify(selectedRows));
      },
      getCheckboxProps: (record) => ({
        disabled: record.name === "Disabled User",
        // Column configuration not to be checked

      }),
    };

    const Demo_table = () => {
      const [selectionType, setSelectionType] = useState("checkbox");
      return (
        <div>
          <Radio.Group
            onChange={({ target: { value } }) => {
              setSelectionType(value);
            }}
            value={selectionType}
          >
          </Radio.Group>
          <Divider />
          <Table
            rowSelection={{
              type: selectionType,
              ...rowSelection,
            }}
            columns={columns}
            dataSource={this.state.data}
            pagination={false}
          />
        </div>
      );
    };


    return (
      <div className="Admin_Class">
        <Content>
          <div className="big-class">
            <div className="header">
              <div className="search">
                <Button type="primary">
                  <Link to="/user_manager/choseTeacher">返回列表</Link>
                </Button>
                &nbsp;&nbsp;&nbsp;
                <Button type="primary" onClick={this.handleClick}>
                  {"删除班级"}
                </Button>
              </div>
              <h1>选择班级</h1>
            </div>
            <div className="tab">
              <Search
                placeholder="输入教学班编号如：SJ00201A2031780001"
                allowClear
                enterButton="添加班级"
                size="large"
                onSearch={this.onAdd}
              />
              <Demo_table />
            </div>
          </div>
        </Content>
        {this.state.loading?<Spin/>:<></>}
        <Modal
          title="退出登录提示"
          cancelText="取消"
          okText="确定"
          visible={this.state.isModalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>您确定要删除这些班级吗？</p>
        </Modal>
      </div>
    );
  }
}
