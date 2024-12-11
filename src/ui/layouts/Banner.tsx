import background from "../../assets/images/background.png";
import { Container } from "../components/Container";
import Button from "../elements/Button";
import Typograthy from "../elements/Typograthy";
export default function Banner() {
  return (
    <Container>
      <div className="flex items-center justify-between">
        <div>
          <Typograthy size="h5">ABOUT COMPANY</Typograthy>
          <Typograthy size="h1" className="mt-5">
            ABOUT US
          </Typograthy>
          <Typograthy size="h4" color="second" className="mt-5">
            We know how large objects will act, but things on a small scale
          </Typograthy>
          <Button className="mt-7">Get Quote Now</Button>
        </div>

        <div>
          <img src={background} alt="" className="w-[50Opx]" />
        </div>
      </div>
    </Container>
  );
}
