import Button from "../elements/Button";
import Typograthy from "../elements/Typograthy";
import { Container } from "./Container";
import testimonials from "../../assets/images/testimonials.png";

export default function Testimonials() {
  return (
    <div className="flex  justify-between h-screen">
      <div className="bg-primary flex-1 p-36  h-full">
        <Container>
          <Typograthy size="h5" component="h5" color="white">
            WORK WITH US
          </Typograthy>
          <Typograthy size="h2" component="h5" color="white" className="mt-7">
            Now Let’s grow Yours
          </Typograthy>
          <Typograthy
            size="paragraph"
            component="h5"
            color="white"
            className="mt-7"
          >
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th
          </Typograthy>
          <Button type="button" color="white-outline" className="mt-7">
            Button
          </Button>
        </Container>
      </div>
      <div
        className="bg-light-gray flex-auto h-full bg-cover p-36"
        style={{ backgroundImage: `url(${testimonials})` }}
      ></div>
    </div>
  );
}
