import { Container, Row, Col } from 'reactstrap';
import LibraryDetail from '../features/libraries/LibraryDetail';
import LibrariesList from '../features/libraries/LibrariesList';
import { selectLibraryById } from '../features/libraries/librariesSlice';
import { useState } from 'react';

const LibrariesDirectoryPage = () => {
  const [libraryId, setLibraryId] = useState(0);
  const selectedLibrary = selectLibraryById(libraryId);

  return (
    <Container>
      <Row>
        <Col sm='5' md='7'>
          <LibrariesList setLibraryId={setLibraryId} />;
        </Col>
        <Col sm='7' md='5'>
          <LibraryDetail library={selectedLibrary} />
        </Col>
      </Row>
    </Container>
  );
};

export default LibrariesDirectoryPage;
