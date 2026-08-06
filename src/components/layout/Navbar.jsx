import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";

const links = [
  { name: "Articles", path: "/articles" },
  { name: "Match Analysis", path: "/match-analysis" },
  { name: "Tactical", path: "/tactical-analysis" },
  { name: "Player Ratings", path: "/player-ratings" },
  { name: "Features", path: "/features" },
  { name: "About", path: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8">
          <NavLink to="/">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Rossoneri Reflections"
                className="h-12 w-12 object-contain"
              />

              <div className="leading-none">
                <h1 className="font-['Merriweather'] text-xl font-black tracking-tight text-white">
                  Rossoneri
                </h1>

                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.35em] text-[#C8102E]">
                  Reflections
                </p>
              </div>
            </div>
          </NavLink>

          <nav className="hidden items-center gap-10 lg:flex">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-sm uppercase tracking-[0.18em] transition duration-300 ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}

                    <span
                      className={`absolute -bottom-3 left-0 h-[2px] bg-[#C8102E] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <button className="text-xl text-zinc-300 hover:text-white transition">
              <FiSearch />
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-3xl lg:hidden"
          >
            {mobileOpen ? <HiOutlineXMark /> : <HiOutlineBars3BottomRight />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-white/10 bg-black/95 backdrop-blur-xl lg:hidden">
            <div className="flex flex-col p-8">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-white/5 py-5 uppercase tracking-[0.18em] text-zinc-300 transition hover:text-white"
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* <div className="h-20" /> */}
    </>
  );
}
