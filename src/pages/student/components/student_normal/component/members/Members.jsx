import React from 'react';
import {message, Table, Button, Input, Space, Card, Tag } from "antd";
import {scoreMember, scoreRequired, showCompanyMembers} from '../../../../api/studentApi';

const login_data = JSON.parse(localStorage.getItem("login_data")).data;
let rateData = {};
let rateList = [];

export class Members extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            members: [],
            excellentNum: 0,
            goodNum: 0,
            mediumNum: 0,
        }
    }

    rate = (scoredUserId, score) => {   // 储存对每个成员的打分情况
        rateData = {
            // scoreUserId: login_data.userId,
            scoreUserId: "2019210861", // 暂时
            scoredUserId,
            score,
        }
    }
    handleRate = (scoredUserId) => {
        if (scoredUserId !== rateData["scoredUserId"]) {
            message.warning("刚才的打分与确认不匹配！");
        } else {
            rateList.push(rateData);
            rateData = {};  // 重置对单个成员打分信息
        }
        console.log("rateList:", rateList)
    }
    submitFinal = () => {
        scoreMember(this.state.excellentNum, this.state.goodNum, this.state.mediumNum, rateList);
        rateList = [];
        rateData = {};
    }

    async componentDidMount() {
        showCompanyMembers().then(response => {
            let { data } = response;
            if (data.flag) {
                // eslint-disable-next-line
                data.data.list.map((item, index) => {   // 给列表每个对象加上 key
                    item.key = index;
                });
                this.setState({
                    members: data.data.list,
                })
            } else {
                message.warning(`查看公司成员失败: ${data?.msg}`)
            }
        })
        // 显示打分要求
        const { data } = await scoreRequired();
        if (data.flag) {
            const { excellentNum, goodNum, mediumNum } = data.data;
            this.setState({
                excellentNum,
                goodNum,
                mediumNum
            })
        } else {
            message.warning(data.msg);
        }
    }
    componentWillUnmount() {
        this.setState = () => false;
    }

    render() {
        const {members, excellentNum, goodNum, mediumNum } = this.state;

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
                            onClick={() => this.handleRate(record.userId,)}
                            disabled={record.userId === login_data.userId}
                        >
                            确认
                        </Button>
                    </Space>
                )
            }
        ];

        return (
            <div className='site-page-header-ghost-wrapper'>
                <Card title={"请按要求打分"}>
                    <Space size={"large"}>
                        <Tag color="#f50">优秀人数：{excellentNum}（100~90）</Tag>
                        <Tag color="#2db7f5">良好人数：{goodNum}（90~80）</Tag>
                        <Tag color="#87d068">中等人数：{mediumNum}（80~70）</Tag>
                    </Space>
                </Card>
                <Table
                    columns={columns}
                    dataSource={members}
                />
            </div>
        )
    }
}