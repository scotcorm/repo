import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const LibraryCard = (props) => {
  return (
    <Card>
      <CardImg
        width='100%'
        src={props.library.image}
        alt={props.library.name}
      />
      <CardTitle>{props.library.name}</CardTitle>
    </Card>
  );
};

export default LibraryCard;
