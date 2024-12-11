import Client from "../ui/components/Client";
import { Container } from "../ui/components/Container";
import ProblemsTrying from "../ui/components/ProblemsTrying";
import Stats from "../ui/components/Stats";
import Team from "../ui/components/Team";
import Testimonials from "../ui/components/Testimonials";
import Video from "../ui/components/Video";
import Banner from "../layouts/Banner";

export default function Home() {
  return (
    <>
      <Banner />
      <Container>
        <ProblemsTrying />
        <Stats />
        <Video />
        <Team />
      </Container>
      <Client />
      <Testimonials />
    </>
  );
}
