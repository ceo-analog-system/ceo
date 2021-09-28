import React, { Component } from 'react'
import { Button, Upload, message, } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'
import "../../style/Student_ceo/Files_ceo.css"

export class Files extends Component {
    
    render() {
        const { Dragger } = Upload;
        const uploadProps = {
            accept: ".ppt",
            action: '/file/uploadFile',
            headers: {
                "token": 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjZW8iLCJhdWQiOiIyMDE3MjExMDE5IiwiZXhwIjoxNjMyODA3MDA0fQ.VahDN0p-b3xAXjljyeqDpMC-LQ5_suVhn2wnPqDgQ6U'
            },
            data: {
                userId: JSON.parse(localStorage.getItem("login_data")).data.userId
            },
            onChange(info) {
                const { status } = info.file;
                // if (status !== 'uploading') {
                //   console.log(info.file, info.fileList);
                // }
                if (status === 'done') {
                    message.success(info.file.response.data)
                } else if (status === 'error') {
                  message.error(`${info.file.name} file upload failed.`);
                }
              },
        }
        return (
            <div className="site-page-header-ghost-wrapper">
                <div className='Student-ceo_application'>文件</div>
                <Dragger {...uploadProps}>
                    <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">
                        于此上传工作日志（限ppt）
                    </p>
                </Dragger>
                {/* <Upload
                    {...uploadProps}
                >
                    <Button 
                        type="primary" 
                        icon={<UploadOutlined/>} 
                        style={{marginRight:'20px'}}
                    >
                        上传文件
                    </Button>
                </Upload> */}
            </div>
        )
    }
}
