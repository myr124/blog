interface Props {
  img: string;
  link: string;
}

const Panorama = ({ img, link }: Props) => {
  return (
    <div className=" m-3 flex justify-center content-center rounded">
      <a href={link}>
        <img src={img} alt="Panorama" className="border border-bodcol" />
      </a>
    </div>
  );
};

export default Panorama;
