import { PUBLIC_ASSETS } from "@/utils/constants";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="page-container">
      <div className="relative h-20 w-full">
        <Image
          src={`${PUBLIC_ASSETS.images}/next.svg`}
          alt="Next.js Logo"
          fill
          priority
        />
      </div>
    </div>
  );
};

export default HomePage;
