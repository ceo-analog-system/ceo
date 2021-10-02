import React from 'react';
import { Button, InputNumber, Table } from 'antd';
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
        if (data && data.flag) {
            // eslint-disable-next-line
            data.data.list.map((item, index) => {   // 给列表每个对象加上 key
                item.key = index;
            });
            this.setState({
                voter: data.data.list,
            })
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

        const mockVoter = [
                {
                    "id": 2,
                    "userId": "2011210012",
                    "userName": "测试",
                    "academy": null,
                    "clazz": null,
                    "discipline": null,
                    "teacherClass": "SJ00201A2031780001",
                    "score": 0.0,
                    "companyId": "2",
                    "position": null,
                    "password": null,
                    "count": "0",
                    "voteList": null,
                    "ceoVote": true,
                    "hired": true,
                    "ceoVoted": false,
                    "companyVoted": false
                },
                {
                    "id": 3,
                    "userId": "2022222222",
                    "userName": "测试2",
                    "academy": null,
                    "clazz": null,
                    "discipline": null,
                    "teacherClass": "SJ00201A2031780001",
                    "score": 0.0,
                    "companyId": "2",
                    "position": null,
                    "password": null,
                    "count": "0",
                    "voteList": null,
                    "ceoVote": true,
                    "hired": true,
                    "ceoVoted": false,
                    "companyVoted": false
                }
            ]

        return (
            <div className='site-page-header-ghost-wrapper'>
                <Button type="primary" onClick={() => applyCeo()} style={{marginBottom: 20}}>
                    竞选CEO
                </Button>
                    <Table 
                        columns={columns} 
                        dataSource={mockVoter}
                        bordered
                    />
            </div>
        )
    }
}
