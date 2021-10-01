import React from 'react';
// eslint-disable-next-line
import {message, Table, Button, Input, Space,} from "antd";
import {scoreMember, showCompanyMembers} from '../../../../api/studentApi';

const mockData = [
    {
        "id": 2,
        "userId": "2011210012",
        "userName": "测试",
        "academy": null,
        "clazz": null,
        "discipline": null,
        "teacherClass": "SJ00201A2031780001",
        "personalScore": 0.0,
        "companyScore": 0.0,
        "ceoScore": 0.0,
        "memberScore": 0.0,
        "signScore": 0.0,
        "score": 0.0,
        "companyId": 2,
        "position": null,
        "password": null,
        "count": "0",
        "hired": true,
        "ceoVote": true,
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
        "personalScore": 0.0,
        "companyScore": 0.0,
        "ceoScore": 0.0,
        "memberScore": 0.0,
        "signScore": 0.0,
        "score": 0.0,
        "companyId": 2,
        "position": null,
        "password": null,
        "count": "0",
        "hired": true,
        "ceoVote": true,
        "ceoVoted": false,
        "companyVoted": false
    },
    {
        "id": 4,
        "userId": "2019210861",
        "userName": "55",
        "academy": null,
        "clazz": null,
        "discipline": null,
        "teacherClass": "SJ00201A2031780001",
        "personalScore": 0.0,
        "companyScore": 0.0,
        "ceoScore": 0.0,
        "memberScore": 0.0,
        "signScore": 0.0,
        "score": 0.0,
        "companyId": 2,
        "position": "副总裁",
        "password": null,
        "count": "0",
        "hired": true,
        "ceoVote": false,
        "ceoVoted": false,
        "companyVoted": false
    },
    {
        "id": 957,
        "userId": "2017211019",
        "userName": "唐薇",
        "academy": null,
        "clazz": null,
        "discipline": null,
        "teacherClass": "SJ00201A2031780001",
        "personalScore": 0.0,
        "companyScore": 0.0,
        "ceoScore": 0.0,
        "memberScore": 0.0,
        "signScore": 0.0,
        "score": 0.0,
        "companyId": 2,
        "position": "CEO",
        "password": null,
        "count": "0",
        "hired": true,
        "ceoVote": false,
        "ceoVoted": false,
        "companyVoted": false
    }
]
const login_data = JSON.parse(localStorage.getItem("login_data")).data;
let rateData = {};
let rateList = [];

export class Members extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            members: [],
        }
    }

    rate = (scoredUserId, score) => {   // 储存对每个成员的打分情况
        console.log(score)
        rateData = {
            scoreUserId: login_data.userId,
            scoredUserId,
            score,
        }
        console.log("rateData:", rateData)
    }
    handleRate = (scoredUserId) => {
        if (scoredUserId !== rateData["scoredUserId"]) {
            message.warning("刚才的打分与确认不匹配！");
        } else {
            console.log("push:")
            rateList.push(rateData);
            rateData = {};  // 重置对单个成员打分信息
        }
        console.log("rateList:", rateList)
    }
    submitFinal = () => {
        scoreMember(this.rateList);
    }

    async componentDidMount() {
        showCompanyMembers().then(data => {
            // console.log(data)
        })

        // const { data } = await showCompanyMembers();

        // if (data?.flag) {
        //     // eslint-disable-next-line
        //     data.data.list.map((item, index) => {   // 给列表每个对象加上 key
        //         item.key = index;
        //     });
        //     this.setState({
        //         members: data.data.list,
        //     })
        // } else {
        //     message.warning(data.msg)
        // }
    }

    render() {
        const {members} = this.state;

        const columns = [
            {
                title: '姓名',
                dataIndex: 'userName',
                key: 'userName',
            },
            {
                title: '学号',
                dataIndex: 'userId',
                key: 'userId',
            },
            {
                title: '职位',
                dataIndex: 'position',
                key: 'position',
            },
            {
                title: '分数',
                dataIndex: 'score',
                key: 'score',
            },
            {
                title: <Button type="primary" onClick={this.submitFinal}>提交打分</Button>,
                key: 'action',
                render: (_, record) => (
                    <Space>
                        <Input min={1} max={100} onChange={(e) => this.rate(record.userId, e.target.value)}/>
                        <Button
                            onClick={() => this.handleRate(record.userId,)}>
                            确认
                        </Button>
                    </Space>
                )
            }
        ];

        return (
            <div className='site-page-header-ghost-wrapper'>
                <Table
                    columns={columns}
                    dataSource={mockData}
                />
            </div>
        )
    }
}