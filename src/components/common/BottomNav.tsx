"use client";

import { usePathname, useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";
import { SiYoutubeshorts } from "react-icons/si";
import Link from "next/link";
import { SearchBar } from "../Navbar/SearchBar";

const BottomNav = () => {
  const router = useRouter();
  const pathname = usePathname();

  const active = (path: string) => pathname === path;
  const navArr = [
    {
      path: "/",
      title: "Home",
      Icons: (
        <TiHome
          size={25}
          className={active(`/`) ? "text-white" : "text-gray-400"}
        />
      ),
    },
    {
      path: "",
      title: "Search",
      Icons: <SearchBar />,
    },
    {
      path: "/video/pvKedCF5rvU",
      title: "Shorts",
      Icons: (
        <SiYoutubeshorts
          size={26}
          className={active(`/shorts`) ? "text-white" : "text-gray-400"}
        />
      ),
    },

    {
      path: "/profile",
      title: "Profile",
      Icons: (
        <FaUser
          size={25}
          className={
            active(`/dashboard/my-profile`) ? "text-white" : "text-gray-400"
          }
        />
      ),
    },
  ];
  return (
    <div className="lg:hidden fixed bottom-0 left-0 z-50 h-[68px] w-full bg-card">
      <hr />
      <nav className="h-full w-full flex items-center justify-between py-2">
        {navArr.map((item, index) => (
          <div
            key={index}
            className="flex w-full flex-col items-center justify-center space-y-1 whitespace-pre text-sm"
          >
            {item.title === "Profile" ? (
              <Link
                href={"https:intezar-dev.netlify.app"}
                target="_blank"
                prefetch={false}
                className="flex w-full flex-col items-center justify-center space-y-1 whitespace-pre text-sm"
              >
                <img
                  src="/user.jpg"
                  alt="user"
                  className="rounded-full object-cover w-9 h-9"
                />
                <span
                  className={active(item.path) ? "text-white" : "text-gray-400"}
                >
                  {item.title}
                </span>
              </Link>
            ) : (
              <button
                key={index}
                type="button"
                onClick={() => router.push(item.path)}
                className="flex flex-col items-center gap-1 justify-center"
              >
                {item.Icons}
                <span
                  className={active(item.path) ? "text-white" : "text-gray-400"}
                >
                  {item.title}
                </span>
              </button>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default BottomNav;
