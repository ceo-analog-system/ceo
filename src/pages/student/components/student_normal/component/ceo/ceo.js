import React from 'react';
import { Button, Table } from 'antd';
import { connect } from 'react-redux';
import { showCeoVoterActionCreator, applyCeoActionCreator } from '../../../../../../redux/actions/student/actionCreators';

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
    },
    {
        title: '分数',
        dataIndex: 'score',
        key: 'score',
    },
    // {
    //     title: '操作',
    //     dataIndex: 'do',
    //     key: 'do',
    // },
];

// const { voteUserId } = localStorage.getItem("login_data")
const mapStateToProps = (state) => {
    return {
        loading: state.student.loading,
        error: state.student.error,
        voter: state.student.voter, // CEO竞选 名单
        applyRes: state.student.applyResult,    // 申请CEO竞选 结果
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        showCeoVoter: () => {
            dispatch(showCeoVoterActionCreator());
        },
        applyCeo: () => {
            dispatch(applyCeoActionCreator());
        }, 
    }
}

class CeoComponent extends React.Component {
    componentDidMount() {
        console.log('componentDidMount')
        this.props.showCeoVoter();
    }
    state = {
        selectedRowKeys: [],
    }

    start = () => {
        // ajax request after empty completing
        setTimeout(() => {
          this.setState({
            selectedRowKeys: [],
          });
        }, 1000);
        alert(this.props.error);
    };

    onSelectChange = selectedRowKeys => {
        this.setState({ selectedRowKeys });
    };
    

    beCeo = () => {
        this.props.applyCeo();
        alert(this.props.applyResult);
    };

    render() {
        { console.log('render') }
        const { loading, voter } = this.props;
        const { selectedRowKeys } = this.state;
        
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
          };
        const hasSelected = selectedRowKeys.length > 0;
        
        return (
            <div className='site-page-header-ghost-wrapper'>
                <Button type="primary" onClick={this.beCeo}>
                    竞选CEO
                </Button>
                <div style={{ marginBottom: 16, marginTop: 20 }}>
                    <Button type="primary" onClick={this.start} disabled={!hasSelected}>
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
export const Ceo = connect(mapStateToProps, mapDispatchToProps)(CeoComponent)