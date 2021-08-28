import React from 'react';
import { Button, Table } from 'antd';
import { showCeoVoter, applyCeo } from '../../../../../../pages/student/api/studentApi';

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
];

export class Ceo extends React.Component {
    componentDidMount() {
        const { data } =showCeoVoter();
        if (data && data.flag) {
            const voter = data.data.list;
            // eslint-disable-next-line
            voter.map((item, index) => {   // 给列表每个对象加上 key
                item.key = index;
            });
        }
    }

    state = {
        selectedRowKeys: [],
    }

    vote = () => {
        // this.props.voteCeo();

        setTimeout(() => {
          this.setState({
            selectedRowKeys: [],
          });
        }, 1000);
    };

    onSelectChange = selectedRowKeys => {
        this.setState({ selectedRowKeys });
    };  

    render() {
        const { voter } = this.props;
        const { selectedRowKeys } = this.state;
        
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
          };
        const hasSelected = selectedRowKeys.length > 0;
        
        return (
            <div className='site-page-header-ghost-wrapper'>
                <Button type="primary" onClick={() => applyCeo()}>
                    竞选CEO
                </Button>
                <div style={{ marginBottom: 16, marginTop: 20 }}>
                    <Button type="primary" onClick={this.vote} disabled={!hasSelected}>
                        投票
                    </Button>
                    <span style={{ marginLeft: 8 }}>
                        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                    </span>
                </div>
                <Table 
                    rowSelection={rowSelection}
                    columns={columns} 
                    dataSource={voter}
                    bordered
                />
            </div>
        )
    }
}
