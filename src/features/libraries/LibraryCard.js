import { Card, CardImg, CardTitle } from 'reactstrap';

const LibraryCard = ({ library }) => {
  const { image, name } = library;
  return (
    <Card>
      <CardImg width='100%' src={image} alt={name} />
      <CardTitle>{name}</CardTitle>
    </Card>
  );
};

export default LibraryCard;
