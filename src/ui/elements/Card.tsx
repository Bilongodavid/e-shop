import Typograthy from "./Typograthy";
import { BsFacebook } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterFill } from "react-icons/ri";

interface Props {
  name: string;
  job: string;
  img: string;
}
export default function Card({ img, job, name }: Props) {
  return (
    <div>
      <img src={img} alt="" />
      <div>
        <Typograthy size="h5" className="my-2">
          {name}
        </Typograthy>
        <Typograthy size="paragraph" color="second">
          {job}
        </Typograthy>

        <div className="flex justify-center items-center mt-5 space-x-3">
          <BsFacebook className="text-primary text-lg" />
          <IoLogoInstagram className="text-primary text-lg" />
          <RiTwitterFill className="text-primary text-lg" />
        </div>
      </div>
    </div>
  );
}
