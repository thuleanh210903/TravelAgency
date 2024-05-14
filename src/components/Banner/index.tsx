import Image from "next/image";
import bg from "@/assets/banner-bg.png";
import { banner } from "@/constants/banner";

interface BannerProps {}
export const Banner: React.FC<BannerProps> = () => {
  return (
    <div className="w-full h-screen">
      <Image
        className="top-0 left-0 w-full h-screen object-cover"
        alt="banner"
        src={bg}
      />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center text-primary-white gap-y-20">
          <h1 className="font-extrabold text-5xl">
            {banner.title}
          </h1>
          <p className="text-center">
            {banner.description}
          </p>
      </div>
    </div>
  );
};
