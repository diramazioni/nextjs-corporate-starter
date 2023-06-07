import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
// import styles from "./rich-text.module.css";

interface RichTextProps {
  data: {
    body: string;
  };
}

export default function RichText({ data }: RichTextProps) {
  // TODO: STYLE THE MARKDOWN
  return (
    <section className="rich-text py-6 dark:text-gray-50 ">
      <Markdown children={data.body} remarkPlugins={[remarkGfm]} />
    </section>
  );
}
