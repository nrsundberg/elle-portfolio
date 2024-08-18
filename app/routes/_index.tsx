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
import { useEffect, useMemo, useState } from "react";

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

  return null;
}

export default function () {
  const data = useLoaderData();

  return (
    <Page>
      <FolderButton
        label="Substack: Elle Dresses Well"
        className="bottom-40 left-32"
        gradient={"bg-gradient-to-r from-[#c237bd] to-[#ffffff]"}
      >
        <Substack posts={data} />
      </FolderButton>

      <FolderButton
        label="French's: Hot Dog Summer"
        className="top-[50%] left-10"
        gradient={"bg-gradient-to-r from-[#CD1512] to-[#F2B303]"}
      >
        <Frenchs />
      </FolderButton>

      <FolderButton
        label="Frank's Red Hot: Sriracha Launch"
        className="bottom-1/3 right-10"
        gradient={"bg-gradient-to-r from-[#CA273A] to-[#ed3029]"}
      >
        <Franks />
      </FolderButton>

      <FolderButton
        label="Frank's Red Hot: Organic Social"
        className="top-32 left-60"
        gradient={"bg-gradient-to-r from-[#CA273A] to-[#ed3029]"}
      >
        <FranksOrganic />
      </FolderButton>

      <FolderButton
        label="Takedown Gym: Organic Social"
        className="top-40 left-20"
        gradient={"bg-gradient-to-r from-[#020200] to-[#c3d600]"}
      >
        <Takedown />
      </FolderButton>

      <FolderButton
        label="Rafferty's Pizza: Organic Social"
        className="top-15 right-20"
        gradient={"bg-gradient-to-r from-[#048445] to-[#ec5625]"}
      >
        <Raffertys />
      </FolderButton>

      <FolderButton
        label="OLD BAY: Organic Social"
        className="top-80 right-20"
        //TOTO: Check gradient
        gradient={"bg-gradient-to-r from-[#1950E5] to-[#DFBF00]"}
      >
        <OldBay />
      </FolderButton>

      <FolderButton
        label="The Courtyard: Brand Design"
        className="bottom-72 right-40"
        gradient={"bg-gradient-to-r from-[#3F3C1D] to-[#cbb82a]"}
      >
        <Courtyard />
      </FolderButton>

      <FolderButton
        label="Angela Headlee: Logo Design"
        className="bottom-20 left-1"
        gradient={"bg-gradient-to-r from-[#002349] to-[#C29B40]"}
      >
        <Angie />
      </FolderButton>
    </Page>
  );
}
