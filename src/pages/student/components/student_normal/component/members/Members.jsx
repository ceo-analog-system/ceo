import React from 'react';
// eslint-disable-next-line
import { message, Table, InputNumber, Button, } from "antd";
import { scoreMember, showCompanyMembers } from '../../../../api/studentApi';

const mockData = [
    {
        name: '测试一',
        id: '2017211016',
        position: '暂无',
        major: '生物',
        score: '70',
    },
    {
        name: '测试二',
        id: '2017211017',
        position: '暂无',
        major: '物',
        score: '60',
    }
]

export class Members extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            members: [],
        }
    }

    rate = (scoredUserId, score) => {
        scoreMember(scoredUserId, score)
    }

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
                title: '职位',
                dataIndex: 'position',
                key: 'position',
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
            {
                title: '操作',
                key: 'action',
                render: (_, record) => (
                    <>
                        <InputNumber min={1} max={100} controls={false} />
                        <Button 
                            type="primary"
                            onClick={() => this.rate(record.id, record.score)}>
                            打分
                        </Button>
                    </>
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