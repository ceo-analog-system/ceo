import React from 'react';
import {Button, message, Table} from 'antd';
import { showCeoVoter, applyCeo, voteCeo } from '../../../../../../pages/student/api/studentApi';

export class Ceo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            voter: [],
        }
    }

    async componentDidMount() {    
        const { data } =await showCeoVoter();
        if (data?.flag) {
            // eslint-disable-next-line
            data.data.list.map((item, index) => {   // 给列表每个对象加上 key
                item.key = index;
            });
            this.setState({
                voter: data.data.list,
            })
        } else {
            message.warning(data.msg);
        }
    }

    render() {
        const { voter } = this.state;
        const columns = [
            {
                title: '姓名',
                dataIndex: 'userName',
                key: 'userName',
            },
            {
                title: '票数',
                dataIndex: 'count',
                key: 'count',
                sorter: {
                    compare: (a, b) => a.count - b.count,
                    multiple: 1,
                }
            },
            {
                title: 'Action',
                key: 'vote',
                render: (_, record) => (
                    // eslint-disable-next-line
                    <a onClick={() => voteCeo(record.userName)}>为 {record.userName} 投票</a>
                )
            }
        ];

        return (
            <div className='site-page-header-ghost-wrapper'>
                <Button type="primary" onClick={() => applyCeo()} style={{marginBottom: 20}}>
                    竞选CEO
                </Button>
                    <Table 
                        columns={columns} 
                        dataSource={voter}
                        bordered
                    />
            </div>
        )
    }
}
