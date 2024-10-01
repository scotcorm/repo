import { Col, Row, Container, Card, CardBody, CardHeader } from 'reactstrap';
import SubHeader from '../components/';

import React from 'react';

const Aboutpage = () => {
  return (
    <Container>
      <Row className='row-content'>
        <Col sm='6'>
          <h3>Our Mission</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            voluptatum inventore itaque repudiandae, eum voluptatibus voluptates
            quae quo iure eos ipsum veritatis dolorum illum totam dolores facere
            voluptas repellat! Facere cumque aliquid id doloribus dolorum iure
            ratione dicta aspernatur, enim ad sequi architecto dolore
            exercitationem alias commodi. Voluptatum, modi maxime?
          </p>
        </Col>
        <Col sm='6'>
          <Card>
            <CardHeader className='bg-primary-text-white'>
              <h3>Facts at a Glance</h3>
            </CardHeader>
            <CardBody>
              <dl className='row'>
                <dt className='col-6'>Founded</dt>
                <dd className='col-6'>February 3, 2016</dd>
                <dt className='col-6'>No. of Campsites in 2019</dt>
                <dd className='col-6'>563</dd>
                <dt className='col-6'>No. of Reviews in 2019</dt>
                <dd className='col-6'>4388</dd>
                <dt className='col-6'>Employees</dt>
                <dd className='col-6'>42</dd>
              </dl>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className='bg-light mt-3'>
            <CardBody>
              <blockquote className='blockquote'>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cupiditate eveniet distinctio unde rerum perferendis nobis
                  explicabo nulla praesentium, ipsam commodi.
                </p>
                <footer className='blockquote-footer'>
                  {' '}
                  Muriel Strode,{' '}
                  <cite title='Source Title'>
                    "Wind-Wafted Wild Flowers" - The Open Court, 1903
                  </cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className='row-content'>
        <Col xs='12'>
          <h3>Community Partners</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default Aboutpage;
