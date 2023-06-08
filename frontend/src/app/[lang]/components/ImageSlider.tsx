"use client";
import { Fade } from "react-slideshow-image";
import { getStrapiMedia } from "../utils/api-helpers";
import Image from "next/image";

interface Image {
  id: number;
  attributes: {
    alternativeText: string | null;
    caption: string | null;
    url: string;
  };
}

interface SlidShowProps {
  files: {
    data: Image[];
  };
  fullView: boolean;
}

export default function Slideshow({ data }: { data: SlidShowProps }) {
  return (
    <div className="slide-container">
      <Fade>
        {data.files.data.map((fadeImage: Image, index) => {
          const imageUrl = getStrapiMedia(fadeImage.attributes.url);
          return (
            <div key={index}>
              {(imageUrl && !data.fullView) && <Image className="w-full h-96 object-cover rounded-lg" height={400} width={600} alt="alt text" src={imageUrl} />}
              {(imageUrl && data.fullView) && <Image className="w-full h-full object-cover rounded-lg" height={400} width={600} alt="alt text" src={imageUrl} />}
            </div>
          );
        })}
      </Fade>
    </div>
  );
}
