import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const percent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      setProgress(percent);
    };

    window.addEventListener("scroll", updateProgress);

    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[100] h-1 w-full bg-transparent">
      <div
        className="h-full bg-[#C8102E] transition-all duration-150"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}
