
import React, { Component } from 'react'
import { Button, Card, Table  ,Badge} from 'antd'
import {DownloadOutlined} from '@ant-design/icons'
export default class Company extends Component {
    render() { 
        const title=(
            <h2>公司信息</h2>
        )
        const extra=(
            <Button type='primary' shape="round" icon={<DownloadOutlined />}>生成公司表格</Button>
        )
      
        function NestedTable() {
            const expandedRowRender = () => {
              const columns = [
                { title: '学号', dataIndex: 'date', key: 'date' },
                { title: '姓名', dataIndex: 'name', key: 'name' },
                {
                  title: '公司名',
                  key: 'state',
                  render: () => (
                    <span>
                      <Badge status="success" />
                      Finished
                    </span>
                  ),
                },
                { title: '职位', dataIndex: 'upgradeNum', key: 'upgradeNum' },
                {
                  title: '专业',
                  dataIndex: 'operation',
                  key: 'operation',
                },
              ];
          
              const data = [];
              for (let i = 0; i < 3; ++i) {
                data.push({
                  key: i,
                  date: '2014-12-24 23:12:00',
                  name: 'This is production name',
                  upgradeNum: 'Upgraded: 56',
                });
              }
              return <Table columns={columns} dataSource={data} pagination={false} />;
            };
          
            const columns = [
              { title: '公司名称', dataIndex: 'name', key: 'name' },
              { title: '公司类型', dataIndex: 'platform', key: 'platform' },
              { title: 'CEO学号', dataIndex: 'version', key: 'version' },
              { title: 'CEO姓名', dataIndex: 'upgradeNum', key: 'upgradeNum' },
              { title: '票数', dataIndex: 'creator', key: 'creator' },
              { title: '等级', dataIndex: 'createdAt', key: 'createdAt' },
              { title: '得分', dataIndex: 'createdAt', key: 'createdAt' },
              { title: '老师打分', dataIndex: 'createdAt', key: 'createdAt' },
              { title: '添加学生', dataIndex: 'createdAt', key: 'createdAt' },
              { title: '操作', dataIndex: 'createdAt', key: 'createdAt' },
            ];
          
            const data = [];
            for (let i = 0; i < 3; ++i) {
              data.push({
                key: i,
                name: 'Screem',
                platform: 'iOS',
                version: '10.3.4.5654',
                upgradeNum: 500,
                creator: 'Jack',
                createdAt: '2014-12-24 23:12:00',
              });
            }
          
            return (
              <Table
                className="components-table-demo-nested"
                columns={columns}
                expandable={{ expandedRowRender }}
                dataSource={data}
              />
            );
          }
                
        return (
            <Card title={title} extra={extra} style={{width:'100%',height:'100%'}}>
                <NestedTable />
            </Card>
        )
    }
}
