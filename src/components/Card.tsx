interface Props {
  title: string;
  desc: string;
}

const Card = ({ title, desc }: Props) => {
  return (
    <div>
      <div className="card-body">
        <h1 className="card-title">{title}</h1>
        <p className="card-text">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
