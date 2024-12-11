import VideoPicture from "../../assets/images/video.png";
import PlayPicture from "../../assets/images/play.png";
export default function Video() {
  return (
    <div
      className="mt-20 w-full bg-no-repeat h-[540px] bg-cover bg-center flex items-center justify-center rounded-md shadow-xl"
      style={{ backgroundImage: `url(${VideoPicture})` }}
    >
      <img
        src={PlayPicture}
        alt=""
        className="w-14 h-14 hover:scale-50 transition duration-300 ease-in-out"
      />
    </div>
  );
}
