import { Link } from "react-router-dom";

import { HiArrowRight } from "react-icons/hi";
import { Container } from "../ui/components/Container";
import Button from "../ui/elements/Button";
import Typograthy from "../ui/elements/Typograthy";
export function Header() {
  return (
    <div className="py-4 fixed  right-0 left-0 bg-white/85 ">
      <Container>
        <div className="flex items-center justify-between">
          <Typograthy size="h5">Bandage</Typograthy>
          <nav>
            <ul className="flex items-center justify-center space-x-4">
              <li>
                <Typograthy size="link">
                  <Link to="/">Home</Link>
                </Typograthy>
              </li>
              <li>
                <Typograthy size="link">Product</Typograthy>
              </li>
              <li>
                <Typograthy size="link" component="div">
                  <Link to="/pricing">Pricing</Link>
                </Typograthy>
              </li>
              <li>
                <Typograthy size="link" component="div">
                  Contact
                </Typograthy>
              </li>
            </ul>
          </nav>
          <div className="flex items-center justify-center space-x-4">
            <Typograthy size="link" className="text-primary">
              Login
            </Typograthy>
            <Button size="sm" icon={true} color="primery">
              Become a member <HiArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
