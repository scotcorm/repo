import { LIBRARIES } from '../../app/shared/LIBRARIES';
import { Col, Row } from 'reactstrap';
import LibraryCard from './LibraryCard';

import React from 'react';

const LibrariesList = () => {
  return (
    <Row className='ms-auto'>
      {LIBRARIES.map((library) => {
        return (
          <Col md='5' className='m-4' key={library.id}>
            <LibraryCard library={library} />
          </Col>
        );
      })}
    </Row>
  );
};

export default LibrariesList;
