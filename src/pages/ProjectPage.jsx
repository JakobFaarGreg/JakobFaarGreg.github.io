import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const projectContent = import.meta.glob(
  "../content/*.md",
  {
    eager: true,
    query: "?raw",
    import: "default",
  }
);

export default function ProjectPage({ project }) {
  const markdown = projectContent[`../content/${project}.md`];

  if (!markdown) {
    return <p>Project content not found.</p>;
  }

  return (
    <article className="mx-auto w-4/5 max-w-[1200px]">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}>
        {markdown}
      </ReactMarkdown>
    </article>
  );
}
