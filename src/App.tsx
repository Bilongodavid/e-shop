import "./App.css";
import { Container } from "./ui/components/Container";
import { Header } from "./ui/layouts/Header";
import Banner from "./ui/layouts/Banner";
import ProblemsTrying from "./ui/components/ProblemsTrying";
import Stats from "./ui/components/Stats";
import Video from "./ui/components/Video";
import Team from "./ui/components/Team";
import Client from "./ui/components/Client";
import Testimonials from "./ui/components/Testimonials";
import Footer from "./ui/layouts/Footer";
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
      </Container>
      <Client />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
