import React, {Component} from 'react'
import {Tabs, Table, Input, Radio, Button, Space, message, Tag, Card} from "antd";
import '../../style/Student_ceo/Company_ceo.css'
import 'antd/dist/antd.css'
import {createCompany, setPosition, showCompanyMembers} from '../../api/ceoApi'
import { scoreRequired } from "../../api/ceoApi";
import { scoreMembers } from "../../api/ceoApi";

const login_data = JSON.parse(localStorage.getItem("login_data")).data;
let rateData = {};
let rateList = [];
export default class Company extends Component {
    state = {
        members: [],
        companyName: '初始化',
        companyType: 0,
        create: false,
        position: '',
        chosenMember: '',
        excellentNum: 0,
        goodNum: 0,
        mediumNum: 0,
    }

    changeCompanyType = (e) => {
        this.setState({companyType: e.target.value})
    }
    setUpCompany = async () => {
        createCompany(this.state.companyType, this.state.companyName);
        this.setState({create: true})
    }
    changePosition = (value) => {   // 更新职位名
        this.setState({position: value});
    }
    changeMember = (value) => {
        console.log("changeMember")
        this.setState({chosenMember: value})
    }
    setPosition = () => {
        setPosition(this.state.chosenMember, this.state.position);
    }

    // 打分
    rate = (scoredUserId, score) => {   // 储存对每个成员的打分情况
        rateData = {
            scoreUserId: login_data.userId,
            // scoreUserId: "2019210861", // 暂时
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
        scoreMembers(this.state.excellentNum, this.state.goodNum, this.state.mediumNum, rateList);
        rateList = [];
        rateData = {};
    }

    async componentDidMount() {
        // 显示公司成员
        const {data} = await showCompanyMembers();
        if (data.flag) {
            data.data.list.map((item, index) => {
                item["key"] = index;
                return item;
            })
            this.setState({members: data.data.list})
        }

        // 显示打分要求
        const scoreRequiredData = await scoreRequired().data;
        if (scoreRequiredData?.flag) {
            const { excellentNum, goodNum, mediumNum } = scoreRequiredData.data;
            this.setState({
                excellentNum,
                goodNum,
                mediumNum
            })
        } else {
            message.warning(`打分要求显示错误：${scoreRequiredData?.msg}`);
        }

        // 为公司其他成员打分

    }

    componentWillUnmount() {
        // 解决：Warning: Can't perform a React state update on an unmounted component.
        this.setState = () => false;
    }

    render() {
        const {companyType, members, create, excellentNum, goodNum, mediumNum } = this.state
        const {TabPane} = Tabs;
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
        const options = [
            {label: '贸易公司', value: 0},
            {label: '制造企业', value: 1},
            {label: '物流企业', value: 2},
            {label: '银行', value: 3},
            {label: '会计事务所', value: 4},
            {label: '新闻机构', value: 5},
            {label: '工商局', value: 6},
            {label: '税务局', value: 7},
        ];
        let membersToChose = [];
        for (let item of members) {
            if (item.userId !== login_data.userId) {
                membersToChose.push(<Radio.Button value={item.userId}>{item.userName}</Radio.Button>)
            }
        }

        return (
            <div className="site-page-header-ghost-wrapper">
                <Tabs size="large" defaultActiveKey="2">
                    <TabPane tab="创建公司" key="1">
                        <Input
                            placeholder='公司名'
                            allowClear
                            style={{width: 300}}
                            onChange={(target) => this.setState({companyName: target.target.value})}
                        />
                        <Radio.Group
                            options={options}
                            onChange={this.changeCompanyType}
                            value={companyType}
                            optionType='button'
                            buttonStyle='solid'
                        />
                        <Button
                            type="primary"
                            shape="round"
                            style={{marginTop: 20}}
                            onClick={this.setUpCompany}
                            disabled={create}
                        >
                            创建
                        </Button>
                    </TabPane>
                    <TabPane tab="我的公司" key="2">
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
                            bordered
                        />
                    </TabPane>
                    <TabPane tab="设置职位" key="3">
                        <Space size={"large"}>
                            <Input
                                placeholder="职位名称"
                                onChange={(e) => this.changePosition(e.target.value)}
                            />
                            <Radio.Group
                                onChange={(e) => this.changeMember(e.target.value)}
                                value={this.state.chosenMember}
                                size={"small"}
                                buttonStyle={"solid"}
                            >
                                <Space direction={"vertical"}>
                                    {membersToChose}
                                </Space>
                            </Radio.Group>
                            <Button
                                type={"primary"}
                                onClick={this.setPosition}
                            >提交</Button>
                        </Space>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
