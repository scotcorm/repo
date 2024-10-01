import { Col, Row } from 'reactstrap';
import LibraryCard from './LibraryCard';
import { selectAllLibraries } from './librariesSlice';

const LibrariesList = ({ setLibraryId }) => {
  const libraries = selectAllLibraries();

  return (
    <Row className='ms-auto'>
      {libraries.map((library) => {
        return (
          <Col
            md='5'
            className='m-4'
            key={library.id}
            onClick={() => setLibraryId(library.id)}
          >
            <LibraryCard library={library} />
          </Col>
        );
      })}
    </Row>
  );
};

export default LibrariesList;
