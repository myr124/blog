interface Props {
  title: string;
  desc: string;
  img: string;
}

const Card = ({ title, desc, img }: Props) => {
  return (
    <div>
      <img src={img} width="500" height="600"></img>
      <h1 className="card-title">{title}</h1>
      <p className="card-text">{desc}</p>
    </div>
  );
};

export default Card;
