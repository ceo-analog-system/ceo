import React, { Component } from 'react'
import { Table, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'
import "../../style/Student_ceo/Files_ceo.css"
import { connect } from 'react-redux';

class Files extends Component {
    
    render() {
        const columns = [
            {
            title: '文件',
            dataIndex: 'file',
            key: 'file',
            },
            {
            title: '学号',
            dataIndex: 'stu_num',
            key: 'stu_num',
            },
            {
            title: '班级号',
            dataIndex: 'cla_num',
            key: 'cla_num',
            },
        ];
        const data = [];
        
        return (
            <div className="site-page-header-ghost-wrapper">
                <div style={{marginTop:"20px"}}>
                    <div className='Student-ceo_file'>
                        <span className='Student-ceo_application'>文件</span>
                        <Upload
                            accept=".ppt"
                        >
                            <Button type="primary" icon={<UploadOutlined/>} style={{marginRight:'20px'}}>上传文件</Button>
                        </Upload>
                    </div>
                    <Table columns={columns} dataSource={data} style={{margin:'15px'}}/>
                </div>
            </div>
        )
    }
}

export default connect(
  state =>({

  }),
  {

  }
)(Files)