import ReactMarkdown from "react-markdown";

export default function MarkdownPage({ content }) {
  return (
    <div className="markdown-container">
      <ReactMarkdown>
        {content}
      </ReactMarkdown>
    </div>
  );
}
