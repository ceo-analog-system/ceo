import React from 'react';
// eslint-disable-next-line
import { message, Table, InputNumber, Button, Modal, Form, Input } from "antd";
import { showCompanyMembers } from '../../../../api/studentApi';

const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '学号',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '公司名',
            dataIndex: 'companyName',
            key: 'companyName',
        },
        {
            title: '专业',
            dataIndex: 'major',
            key: 'major',
        },
        {
            title: '分数',
            dataIndex: 'score',
            key: 'score',
        },
        // {
        //     title: '操作',
        //     key: 'action',
        //     render: (_, record) => {
        //         <Button
        //             type="primary"
        //             onClick={() => this.setState({visible: true})}
        //         >
        //             打分
        //         </Button>
                
        //     }
        // }
    ];

export class Members extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            members: [],
            // visible: false,
        }
    }

    // form = ({ visible, onCreate, onCancel }) => {
    //     formRef = React.createRef();
    //     return (
    //         <Modal
    //             visible={visible}
    //             title="为公司其他成员打分"
    //             okText="Confirm"
    //             cancelText="Cancel"
    //             onCancel={onCancel}
    //             onOk={() => {
    //                 form
    //                     .validateFields()
    //                     .then((values) => {
    //                         form.resetFields();
    //                         onCreate(values);
    //                     })
    //                     .catch((info) => {
    //                         message.error("Failed:", info);
    //                     });
    //             }}
    //         >
    //             <Form.Item
    //                 name="Score："
    //                 label="score"
    //                 rules={[
    //                     {
    //                         required: true,
    //                         message: '请输入分数'
    //                     },{
    //                         min: 0, max: 3, message: '请输入0~100数字！', validateTrigger: 'blur' 
    //                     }
    //                 ]}
    //             >
    //                 <Input placeholder="请输入0~100数字"/>
    //             </Form.Item>
    //         </Modal>
    //     )
    // }
    async componentDidMount() {
        const { data } = await showCompanyMembers();
        
        if (data.flag) {
            // eslint-disable-next-line
            data.data.list.map((item, index) => {   // 给列表每个对象加上 key
                item.key = index;
            });
            this.setState({
                members: data.data.list,
            })
        } else {
            message.warning(data.msg)
        }
    }

    render() {
        const { members } = this.state;
        return (
            <div className='site-page-header-ghost-wrapper'>
                <Table 
                    columns={columns}
                    dataSource={members}  
                />
            </div>
        )
    }
}