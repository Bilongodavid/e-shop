import Card from "../elements/Card";
import Typograthy from "../elements/Typograthy";
import Team1 from "../../assets/images/team-1-user-1.jpg";
import Team2 from "../../assets/images/team-1-user-2.jpg";
import Team3 from "../../assets/images/team-1-user-3.jpg";

export default function Team() {
  return (
    <div className="mt-20 w-full bg-no-repeat h-[540px] bg-cover bg-center">
      <div className="text-center">
        <Typograthy size="h2">Meet Our Team</Typograthy>
        <Typograthy size="paragraph" component="p" color="second">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </Typograthy>
      </div>
      <div className="flex justify-center items-center gap-6 mt-20 text-center">
        <Card img={Team1} name="William" job="Designer" />
        <Card img={Team2} name="William" job="Designer" />
        <Card img={Team3} name="William" job="Designer" />
      </div>
    </div>
  );
}
