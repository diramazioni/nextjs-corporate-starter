import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Email from "../components/Email";
import RichText from "../components/RichText";
import ImageSlider from "../components/ImageSlider";
import Quote from "../components/Quote";
import Media from "../components/Media";
import VideoEmbed from "../components/VideoEmbed";

export function sectionRenderer(section: any, index: number) {
  switch (section.__component) {
    case "sections.hero":
      return <Hero key={index} data={section} />;
    case "sections.features":
      return <Features key={index} data={section} />;
    case "sections.testimonials-group":
      return <Testimonials key={index} data={section} />;
    case "sections.pricing":
      return <Pricing key={index} data={section} />;
    case "sections.lead-form":
      return <Email key={index} data={section} />;
    case "sections.rich-text":
      return (
      <article className="container p-6 mx-auto space-y-6 sm:space-y-12 bg-col dark:text-gray-50">
        <RichText key={index} data={section} />
      </article>
      )
    case "sections.slider":
      return <ImageSlider key={index} data={section} />;
    case "sections.quote": 
      return <Quote key={index} data={section} />;
    case "sections.media":
      return <Media key={index} data={section} />;
    case "sections.video-embeded":
      return <VideoEmbed key={index} data={section} />;      
    default:
      return null;
  }
}
