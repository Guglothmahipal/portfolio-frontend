import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/guglothmahipal",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/guglothmahipal",
    icon: <FaLinkedin />,
  },
  {
    name: "Twitter",
    url: "https://x.com/mahipal7g",
    icon: <FaTwitter />,
  },
];

const SocialSidebar = () => {
  return (
    <>
      {/* ================= DESKTOP SIDEBAR ================= */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-5">
        {socials.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
          >
            {/* ICON */}
            <div
              className="
                w-10 h-10 flex items-center justify-center
                rounded-full border border-gray-600 dark:border-gray-400
                text-xl
                transition-all duration-300
                group-hover:scale-110
                group-hover:-translate-y-1
                group-hover:bg-black group-hover:text-white
                dark:group-hover:bg-white dark:group-hover:text-black
              "
            >
              {item.icon}
            </div>

            {/* TOOLTIP */}
            <span
              className="
                absolute left-14 top-1/2 -translate-y-1/2
                px-3 py-1 text-xs rounded-md
                bg-black text-white
                dark:bg-white dark:text-black
                opacity-0 group-hover:opacity-100
                translate-x-[-6px] group-hover:translate-x-0
                transition-all duration-300
                whitespace-nowrap
                pointer-events-none
              "
            >
              {item.name}
            </span>
          </a>
        ))}
      </div>
    </>
  );
};

export default SocialSidebar;
