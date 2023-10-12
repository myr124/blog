interface Props {
  title: string;
  desc: string;
}

const Card = ({ title, desc }: Props) => {
  return (
    <div className="card text-white bg-dark mb-3 max-w-xs">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
