import * as Card from "./card";

type CardProps = {
  title: string;
  imgUrl: string;
  text: string;
};

const CardComponent = ({ imgUrl, text, title }: CardProps) => {
  return (
    <Card.Card>
      <Card.Media imgUrl={imgUrl} alt={title} width={300} height={300} />
      <Card.Body>
        <Card.Header>
          <Card.Title title={title} />
        </Card.Header>
        <Card.Text text={text} />
        <Card.Button text={"Add"} />
      </Card.Body>
    </Card.Card>
  );
};

export default CardComponent;
