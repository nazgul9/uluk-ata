import {Card, Col, Row} from 'react-bootstrap'
import {renderPrice} from '../utils'

function MenuListComponent({list, category}) {
  const with_image = !category || list.filter(g => 'image' in g).length === list.length

  return (
    <>
      {with_image || !category ? (
        <Row>
          {list.map(g => (
            <Col lg={3} md={4} xs={6} className="mb-4">
              <Card className={'food'}>
                <Card.Img variant="top" src={g.image}/>
                <Card.Body className={'d-flex flex-column'}>
                  <div className={'flex-grow-1'}>
                    <h5 className={'m-0'}>{g.title}</h5>
                    <p className={'m-0 my-1 text-muted'}>{g.description}</p>
                  </div>
                  <div className={'price'}>{renderPrice(g.price)}</div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <ul className="list-group mb-4">
          {list.map(g => (
            <li className="list-group-item d-flex justify-content-between align-items-center">
              {g.title}
              <span className="badge bg-primary rounded-pill">{renderPrice(g.price)}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default MenuListComponent
