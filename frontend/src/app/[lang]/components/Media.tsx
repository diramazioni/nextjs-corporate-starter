import { getStrapiMedia } from "../utils/api-helpers";
import Image from "next/image";

interface MediaProps {
  file: {
    data: {
      id: string;
      attributes: {
        url: string;
        name: string;
        alternativeText: string;
      };
    };
  };
  fullView: boolean;
}

export default function Media({ data }: { data: MediaProps }) {
  const imgUrl = getStrapiMedia(data.file.data.attributes.url);
  if (!data.fullView) {
    return (
      <div className="flex items-center justify-center mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
        <Image
          src={imgUrl || ""}
          alt={data.file.data.attributes.alternativeText || "none provided"}
          className="object-cover rounded-lg"
          width={400}
          height={400}
        />
      </div>
    );
  } else {
    return (
      <Image
      src={imgUrl || ""}
      alt={data.file.data.attributes.alternativeText || "none provided"}
      className="object-cover rounded-lg overflow-hidden"
      width={400}
      height={400}    
      fill={true}
    />
    ) 
  }
}