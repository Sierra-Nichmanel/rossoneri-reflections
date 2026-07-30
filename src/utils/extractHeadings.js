export default function extractHeadings(content) {
  if (!content) return [];

  return content
    .filter((block) => block.style === "h2" || block.style === "h3")
    .map((block, index) => ({
      id: `heading-${index}`,
      text: block.children.map((c) => c.text).join(" "),
    }));
}
