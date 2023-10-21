interface Props {
  title: string;
  desc: string;
  img: string;
  date: string;
}

const Card = ({ title, desc, img, date }: Props) => {
  return (
    <div className="border m-2 rounded p-4 border-bodcol transition opacity-70 hover:opacity-100 fade-in-card">
      <img src={img} width="500" height="600"></img>
      <h1 className="card-title font-bold">{title}</h1>
      <h2>Published on {date}</h2>
      <p className="card-text">{desc}</p>
    </div>
  );
};

export default Card;
