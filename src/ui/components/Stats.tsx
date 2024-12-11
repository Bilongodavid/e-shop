import Typograthy from "../elements/Typograthy";
import CountUp from "react-countup";

export default function Stats() {
  return (
    <div className="flex justify-between items-center mt-20">
      <div className="flex flex-col justify-between items-center">
        <Typograthy size="h1" component="h1">
          <CountUp end={15} duration={5} />K
        </Typograthy>
        <Typograthy size="h5" component="h1" color="second">
          Happy Customers
        </Typograthy>
      </div>
      <div className="flex flex-col justify-between items-center">
        <Typograthy size="h1" component="h1">
          <CountUp end={150} duration={10} />K
        </Typograthy>
        <Typograthy size="h5" component="h1" color="second">
          Monthly Visitors
        </Typograthy>
      </div>
      <div className="flex flex-col justify-between items-center">
        <Typograthy size="h1" component="h1">
          <CountUp end={15} duration={5} />
        </Typograthy>
        <Typograthy size="h5" component="h1" color="second">
          Countries Worldwide
        </Typograthy>
      </div>
      <div className="flex flex-col justify-between items-center">
        <Typograthy size="h1" component="h1">
          <CountUp end={100} duration={8} />+
        </Typograthy>
        <Typograthy size="h5" component="h1" color="second">
          Top Partners
        </Typograthy>
      </div>
    </div>
  );
}
