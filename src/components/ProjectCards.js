import React from 'react'
import cardfiller from '../cardfiller'
import './ProjectCards.css';
import { Row, Col, Card, ListGroup } from 'react-bootstrap'

const ProjectCards = () => {
    return (
        <div>
            <h2 className='process--header'>projects</h2>
            <div className='project--card--body'>
                <Row> 
                    {cardfiller.map(filler => (
                        <Col>
                            <Row>
                                <Card data-aos="fade-in" className='project--card--sm'style={{ width: '22rem' }}>
                                <Card.Img variant="top" src={filler.image} />
                                <Card.Body>
                                    <Card.Title>{filler.name}</Card.Title>
                                    <Card.Text>
                                    {filler.description}
                                    </Card.Text>
                                    <ListGroup.Item style={{ background: 'rgb(64, 80, 181)', color: 'white' }}> {filler.languages} </ListGroup.Item>
                                </Card.Body>
                                </Card>
                            </Row>
                        </Col>
                    ))}
                </Row>  
            </div>
        </div>
    )
}

export default ProjectCards
