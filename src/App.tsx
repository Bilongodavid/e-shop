import "./App.css";
import { Container } from "./ui/components/Container";
import Button from "./ui/elements/Button";
import Typograthy from "./ui/elements/Typograthy";
import { VscSettings } from "react-icons/vsc";
import { SlArrowDown } from "react-icons/sl";
import { Header } from "./ui/layouts/Header";
import Banner from "./ui/layouts/Banner";
import ProblemsTrying from "./ui/components/ProblemsTrying";
import Stats from "./ui/components/Stats";
import Video from "./ui/components/Video";
import Team from "./ui/components/Team";
function App() {
  return (
    <>
      <Header />
      <Banner />
      <Container>
        <ProblemsTrying />
        <Stats />
        <Video />
        <Team />
        <div>
          <Typograthy size="h4" className="mb-3">
            Typograthy
          </Typograthy>
          <div className="mt-2">
            <Typograthy size="h1">Lorem ipsum dolor sit amet</Typograthy>
            <Typograthy size="h2">Lorem ipsum dolor sit amet</Typograthy>
            <Typograthy size="h3">Lorem ipsum dolor sit amet</Typograthy>
            <Typograthy size="mobile-menu">
              Lorem ipsum dolor sit amet
            </Typograthy>
            <Typograthy size="h4">Lorem ipsum dolor sit amet</Typograthy>
            <Typograthy size="list">Lorem ipsum dolor sit amet</Typograthy>
            <Typograthy size="paragraph">Lorem ipsum dolor sit amet</Typograthy>
            <Typograthy size="h6">Lorem ipsum dolor sit amet</Typograthy>
            <Typograthy size="link">Lorem ipsum dolor sit amet</Typograthy>
            <Typograthy size="btn-text">Lorem ipsum dolor sit amet</Typograthy>
          </div>
        </div>
        <hr className="my-2" />
        <div>
          <Typograthy size="h4" className="mb-3">
            Button
          </Typograthy>
          <Typograthy size="h6">Button sm</Typograthy>
          <div className="space-x-3">
            <Button>Button</Button>
            <Button icon={true}>
              <VscSettings className="text-sm" /> Button
            </Button>
            <Button icon={true}>
              Button <SlArrowDown className="text-sm" />
            </Button>
            <Button icon={true}>
              Button <SlArrowDown className="text-sm" />
            </Button>
            <Button icon={true} className="py-3">
              <VscSettings className="text-sm" />
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default App;
