import { Button, Col, Row, Space, Table, Typography } from 'antd'
import { getPlacesData } from '../data'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

  const data = getPlacesData([1, 2, 3, 4, 5])
  const navigate = useNavigate()
  return (
    <div>
      <Row>
        <Col span={24}>
          <Space>
            <Typography.Title>
              Places Table
            </Typography.Title>
            <Button onClick={() => navigate("/new")}>Create place</Button>
          </Space>
        </Col>
        <Col span={24}>
          <Table dataSource={data} pagination={false}>
            <Table.Column title='ID' dataIndex='id' />
            <Table.Column title='Name' dataIndex='name' />
            <Table.Column title='Description' dataIndex='description' />
            <Table.Column title='Location' dataIndex='location' />
            <Table.Column title='Action' dataIndex='' render={(value) =>
              <Space>
                <Button onClick={() => navigate(`/${value.id}`)}>Edit</Button>
                <Button onClick={() => alert(`Deleting ${value.name}`)}>Delete</Button>
              </Space>} />
          </Table>
        </Col>
      </Row>
    </div>
  )
}

export default HomePage