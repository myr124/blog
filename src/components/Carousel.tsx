import Card from "./Card";

const Carousel = () => {
  return (
    <div className="flex justify-evenly border border-bodcol m-3">
      <div className="flex-none">
        <Card title="test" desc="test" img="" />
      </div>
      <div className="flex-none">test</div>
      <div className="flex-none">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
        maiores eligendi molestias repellat ullam reiciendis quos harum quidem
        eveniet, quibusdam doloremque officia asperiores nostrum cum similique
        culpa vero sit aperiam.
      </div>
    </div>
  );
};

export default Carousel;
