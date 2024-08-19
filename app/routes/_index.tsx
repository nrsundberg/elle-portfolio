import type { MetaFunction } from "@remix-run/node";
import { Page } from "~/components/Page";
import Frenchs from "~/content/frenchs";
import Substack from "~/content/substack";
import Franks from "~/content/franks";
import Courtyard from "~/content/courtyard";
import Raffertys from "~/content/raffertys";
import Takedown from "~/content/takedown";
import { FolderButton } from "~/components/FolderButton";
import Angie from "~/content/angie";
import OldBay from "~/content/oldBay";
import FranksOrganic from "~/content/franksOrganic";
import { useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Elle Sundberg Portfolio" },
    { name: "description", content: "Welcome to Elle's Portfolio!" },
  ];
};

export async function loader() {
  // const substack = fetch(
  //   "https://substackapi.com/api/feeds/ellesundberg.substack.com?limit=5&sort=top",
  // ).then((res) => res.json());
  // return substack;

  return "aidhoaihd";
}

export default function () {
  const data = useLoaderData();
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const resetTimeout = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setInactive(true);
      }, 30000);
    };

    const handleMove = () => {
      setInactive(false);
      resetTimeout();
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("keydown", handleMove);
    window.addEventListener("mousedown", handleMove);
    window.addEventListener("wheel", handleMove);

    resetTimeout();

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("keydown", handleMove);
      window.removeEventListener("mousedown", handleMove);
      window.addEventListener("wheel", handleMove);
    };
  }, []);

  return inactive ? (
    <Screensaver />
  ) : (
    <Page>
      <FolderButton
        label="Substack:"
        sublabel=" Elle Dresses Well"
        className="bottom-20 right-1 lg:bottom-40 lg:right-32"
        gradient={"bg-gradient-to-r from-[#c237bd] to-[#ffffff]"}
      >
        <Substack posts={data} />
      </FolderButton>

      <FolderButton
        label="French's:"
        sublabel="Hot Dog Summer"
        className="left-1 bottom-52 lg:bottom-[50%] lg:left-10"
        gradient={"bg-gradient-to-r from-[#CD1512] to-[#F2B303]"}
      >
        <Frenchs />
      </FolderButton>

      <FolderButton
        label="Frank's Red Hot:"
        sublabel="Sriracha Launch"
        className="right-1 bottom-52 lg:bottom-1/3 lg:right-10"
        gradient={"bg-gradient-to-r from-[#CA273A] to-[#ed3029]"}
      >
        <Franks />
      </FolderButton>

      <FolderButton
        label="Frank's Red Hot:"
        sublabel="Organic Social"
        className="right-1 top-40 lg:top-32 lg:right-60"
        gradient={"bg-gradient-to-r from-[#CA273A] to-[#ed3029]"}
      >
        <FranksOrganic />
      </FolderButton>

      <FolderButton
        label="Takedown Gym:"
        sublabel="Organic Social"
        className="top-5 left-1 lg:top-40 lg:left-20"
        gradient={"bg-gradient-to-r from-[#020200] to-[#c3d600]"}
      >
        <Takedown />
      </FolderButton>

      <FolderButton
        label="Rafferty's Pizza:"
        sublabel="Organic Social"
        className="top-5 right-1 lg:top-15 lg:right-20"
        gradient={"bg-gradient-to-r from-[#048445] to-[#ec5625]"}
      >
        <Raffertys />
      </FolderButton>

      <FolderButton
        label="OLD BAY:"
        sublabel="Organic Social"
        className="left-1/3 top-5 lg:top-80 lg:left-1/3"
        //TOTO: Check gradient
        gradient={"bg-gradient-to-r from-[#1950E5] to-[#DFBF00]"}
      >
        <OldBay />
      </FolderButton>

      <FolderButton
        label="The Courtyard:"
        sublabel="Brand Design"
        className="left-1 top-40 lg:top-2/3 lg:left-1/2"
        gradient={"bg-gradient-to-r from-[#3F3C1D] to-[#cbb82a]"}
      >
        <Courtyard />
      </FolderButton>

      <FolderButton
        label="Angela Headlee:"
        sublabel="Logo Design"
        className="bottom-20 left-1"
        gradient={"bg-gradient-to-r from-[#002349] to-[#C29B40]"}
      >
        <Angie />
      </FolderButton>
    </Page>
  );
}

function Screensaver() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[url('/screensaver.jpg')] bg-no-repeat bg-cover">
      <img
        src="/elle logo.png"
        alt="Elle logo"
        className="animate-bounce"
        style={{ width: "200px", height: "200px" }}
      />
    </div>
  );
}
