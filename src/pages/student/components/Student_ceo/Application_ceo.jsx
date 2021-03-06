import React, { Component } from 'react'
import { Table, Space, message, Button } from 'antd';
import 'antd/dist/antd.css'
import "../../style/Student_ceo/Application_ceo.css"
import {agreeApplication, isAdd, showApplication} from '../../api/ceoApi';



export default class Application extends Component {
    state={
        application: [],
    }

    async componentDidMount(){
        // 显示申请列表
        const { data } = await showApplication();
        if (data.flag) {
            let applicationData = [];
            // eslint-disable-next-line
            data.data.list.map((item, index) => {   // 给申请列表每个对象加上 key
                let inf = {
                    key: index,
                    userName: item.student?.userName,
                    score: item.student?.score,
                    state: item.state,
                    createTime: item.createTime,
                    userId: item.student?.userId,
                };
                applicationData.push(inf);
            })
            this.setState({application: applicationData})
        } else {
            message.warning(data.msg)
        }
    }

    async agree(id) {
        const { data } = await isAdd(id);
        if (data.data.flag) {
            agreeApplication(id);
        } else {
            message.error(data.data.msg);
        }
    }

    render() {
        const columns = [
            {
                title: '申请人',
                dataIndex: 'userName',
                key: 'userName',
            },
            {
                title: '学号',
                dataIndex: 'userId',
                key: 'userId',
            },
            {
                title: '分数',
                dataIndex: 'score',
                key: 'score',
            },
            {
                title: '状态',
                dataIndex: 'state',
                key: 'state',
            },
            {
                title: '申请时间',
                key: 'createTime',
                dataIndex: 'createTime',
            },
            {
                title: '操作',
                key: 'action',
                render:(_, record) => (
                    <Space size="middle">
                        <Button
                            onClick={() => this.agree(record.userId)}
                        >
                            同意
                        </Button>
                    </Space>
                )
            },
        ];

        return (
            <div className="site-page-header-ghost-wrapper">
                <div style={{marginTop:"20px"}}>
                    <div className='Student-ceo_application'>所有申请</div>
                    <Table columns={columns} dataSource={this.state.application} style={{margin:'15px'}}/>
                </div>
            </div>
        )
    }
}