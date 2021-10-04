import React, { Component } from "react";
import "./index.css";
import { Upload, message, Button,Layout  } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";

const { Content } = Layout;

class Demo_upload extends React.Component {
  state = {
    fileList: [],
    uploading: false,
  };

  handleUpload = () => {
    const { fileList } = this.state;
    const formData = new FormData();

    if (fileList.length > 1) {
      message.error("一次只能上传一份文件");
    } else {
      fileList.forEach((file) => {
        formData.append("excel", file);
      });

      this.setState({
        uploading: true,
      });

      axios
        .post("http://120.79.147.32:8089/file/uploadExcel", formData, {
          headers: {
            token:
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjZW8iLCJhdWQiOiJhMDAxIiwiZXhwIjoxNjMxNzEwMzI2fQ.paGfGSY4BedW9zyQNBDWr6cyWbO2rcdQJcdULl4f87k",
          },
        })
        .then((response) => {
          this.setState({
            fileList: [],
            uploading: false,
          });
          message.success("上传成功");
        });
    }
  };

  render() {
    const { uploading, fileList } = this.state;
    const props = {
      onRemove: (file) => {
        this.setState((state) => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: (file) => {
        this.setState((state) => ({
          fileList: [...state.fileList, file],
        }));
        return false;
      },
      fileList,
    };

    return (
      <>
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>更新学生信息</Button>
        </Upload>
        <Button
          type="primary"
          onClick={this.handleUpload}
          disabled={fileList.length === 0}
          loading={uploading}
          style={{ marginTop: 16 }}
        >
          {uploading ? "上传中" : "开始上传"}
        </Button>
      </>
    );
  }
}



export default class index extends Component {
  render() {
    return (
      <div className="Admin_Data">
        <Content>
          <div className="big">
            <h1>导入数据</h1>
            <div className="data-content">
              <Demo_upload />
              &nbsp; &nbsp; &nbsp;
              <span className="annotation">一次只能上传一份文件</span>
            </div>
          </div>
        </Content>
      </div>
    );
  }
}
