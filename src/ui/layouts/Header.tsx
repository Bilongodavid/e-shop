import { Container } from "../components/Container";
import Button from "../elements/Button";
import Typograthy from "../elements/Typograthy";
import { HiArrowRight } from "react-icons/hi";
export function Header() {
  return (
    <div className="py-4">
      <Container>
        <div className="flex items-center justify-between">
          <Typograthy size="h5">Bandage</Typograthy>
          <nav>
            <ul className="flex items-center justify-center space-x-4">
              <li>
                <Typograthy size="link">Home</Typograthy>
              </li>
              <li>
                <Typograthy size="link">Product</Typograthy>
              </li>
              <li>
                <Typograthy size="link">ontact</Typograthy>
              </li>
            </ul>
          </nav>
          <div className="flex items-center justify-center space-x-4">
            <Typograthy size="link" className="text-primary">
              Login
            </Typograthy>
            <Button size="sm" icon={true}>
              Become a member <HiArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
