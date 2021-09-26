import React, {Component} from 'react';
import {Modal,Table} from "antd";
class AddStudents extends Component {
    onCancel=()=>{
        this.props.isAddUnVisible()
    }
    onOk=()=>{

        this.props.isAddUnVisible()
    }

    render() {
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                align:'center',
                render: (text) => <a>{text}</a>,
            },
            {
                title: 'Age',
                align:'center',
                dataIndex: 'age',
            },

        ];
        const data = [
            {
                key: '1',
                name: 'John Brown',
                age: 32,

            },
            {
                key: '2',
                name: 'Jim Green',
                age: 42,

            },
            {
                key: '3',
                name: 'Joe Black',
                age: 32,

            },
            {
                key: '4',
                name: 'Disabled User',
                age: 99,

            },
        ];
        return (
            <Modal title={"添加新的学生信息"}
                   visible={this.props.isAddVisible}
                   onOk={this.onOk}
                   onCancel={this.onCancel}
                   okText="确认"
                   cancelText="取消"
            >
                <Table
                    rowSelection={{
                        type:'radio'
                    }}
                    columns={columns}
                    dataSource={data}
                />
            </Modal>
        );
    }
}

export default AddStudents;