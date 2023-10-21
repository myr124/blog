interface Props {
  img: string;
  link: string;
}

const Panorama = ({ img, link }: Props) => {
  return (
    <a href={link}>
      <div className="border border-bodcol m-3">
        <img src={img} alt="Panorama" />
      </div>
    </a>
  );
};

export default Panorama;
