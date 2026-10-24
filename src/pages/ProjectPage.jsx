import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
    <article className="markdown-content">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </article>
  );
}
