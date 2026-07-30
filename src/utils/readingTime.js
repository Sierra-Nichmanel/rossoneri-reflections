export function calculateReadingTime(content) {
  if (!content) return "1 min read";

  const words = content
    .map((block) => block.children || [])
    .flat()
    .map((child) => child.text || "")
    .join(" ")
    .trim()
    .split(/\s+/).length;

  const minutes = Math.max(1, Math.ceil(words / 220));

  return `${minutes} min read`;
}
