import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

export default function ShareButtons({ title }) {
  const url = window.location.href;

  return (
    <div className="sticky top-40 hidden lg:flex flex-col gap-5">
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url,
        )}&text=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-white/10 p-4 hover:border-[#C8102E]"
      >
        <FaXTwitter />
      </a>

      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url,
        )}`}
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-white/10 p-4 hover:border-[#C8102E]"
      >
        <FaFacebookF />
      </a>

      <a
        href={`https://www.instagram.com/sharing/share-offsite/?url=${encodeURIComponent(
          url,
        )}`}
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-white/10 p-4 hover:border-[#C8102E]"
      >
        <FaInstagram />
      </a>

      <a
        href={`https://wa.me/?text=${encodeURIComponent(title + " " + url)}`}
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-white/10 p-4 hover:border-[#C8102E]"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}
