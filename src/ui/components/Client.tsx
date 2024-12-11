import Typograthy from "../elements/Typograthy";
import { Container } from "./Container";

import logo1 from "../../assets/images/logo1.png";
import logo2 from "../../assets/images/logo2.png";
import logo3 from "../../assets/images/logo3.png";
import logo4 from "../../assets/images/logo4.png";
import logo5 from "../../assets/images/logo5.png";
import logo6 from "../../assets/images/logo6.png";

export default function Client() {
  return (
    <div className="text-center mt-20 bg-light-gray py-14">
      <Container>
        <Typograthy size="h2">Big Companies Are Here</Typograthy>
        <Typograthy size="paragraph" color="second">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </Typograthy>

        <div className="flex justify-between items-center py-14">
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
          <img src={logo5} alt="" />
          <img src={logo6} alt="" />
        </div>
      </Container>
    </div>
  );
}
