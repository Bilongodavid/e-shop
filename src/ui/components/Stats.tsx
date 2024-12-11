import Typograthy from "../elements/Typograthy";

export default function Stats() {
  return (
    <div className="flex justify-between items-center mt-20">
      <div className="flex flex-col justify-between items-center">
        <Typograthy size="h1" component="h1">
          15K
        </Typograthy>
        <Typograthy size="h5" component="h1" color="second">
          Happy Customers
        </Typograthy>
      </div>
      <div className="flex flex-col justify-between items-center">
        <Typograthy size="h1" component="h1">
          150K
        </Typograthy>
        <Typograthy size="h5" component="h1" color="second">
          Monthly Visitors
        </Typograthy>
      </div>
      <div className="flex flex-col justify-between items-center">
        <Typograthy size="h1" component="h1">
          15
        </Typograthy>
        <Typograthy size="h5" component="h1" color="second">
          Countries Worldwide
        </Typograthy>
      </div>
      <div className="flex flex-col justify-between items-center">
        <Typograthy size="h1" component="h1">
          100+
        </Typograthy>
        <Typograthy size="h5" component="h1" color="second">
          Top Partners
        </Typograthy>
      </div>
    </div>
  );
}
