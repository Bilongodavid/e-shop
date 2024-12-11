import Typograthy from "../elements/Typograthy";

export default function ProblemsTrying() {
  return (
    <div className="flex justify-center items-center mt-20">
      <div>
        <Typograthy size="paragraph" component="p" color="danger">
          Problems trying
        </Typograthy>
        <Typograthy size="h3" component="h3">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        </Typograthy>
      </div>
      <div>
        <Typograthy size="paragraph" component="p" color="second">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </Typograthy>
      </div>
    </div>
  );
}
