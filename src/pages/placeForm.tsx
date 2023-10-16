import { Button, Col, Form, Input, Row, Typography } from 'antd'
import { useParams } from 'react-router-dom'
import { getPlaceData } from '../data'
import { useForm } from 'antd/es/form/Form'

const PlaceForm = () => {
  const { id } = useParams()
  console.log(id)
  const place = id !== undefined ? getPlaceData(Number(id)) : null
  const [form] = useForm()

  const onSubmit = () => {
    alert('Form submitted')
  }

  return (
    <Row>
      <Col>
        <Typography.Title>
          {id ? `Edit Place ${id}` : "Create Place"}
        </Typography.Title>
        <Form form={form} initialValues={place ?? undefined}>
          <Form.Item name='place' label='Place'>
            <Input />
          </Form.Item>
          <Form.Item name='description' label='Description'>
            <Input />
          </Form.Item>
          <Form.Item name='location' label='Location'>
            <Input />
          </Form.Item>
        </Form>
        <Button onClick={onSubmit}>{id ? "Editar" : "Crear"}</Button>
      </Col>
    </Row>
  )
}

export default PlaceForm