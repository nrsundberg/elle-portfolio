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

export const meta: MetaFunction = () => {
  return [
    { title: "Elle Sundberg Portfolio" },
    { name: "description", content: "Welcome to Elle's Portfolio!" },
  ];
};

export default function () {
  return (
    <Page>
      <FolderButton
        label="Substack: Elle Dresses Well"
        className="bottom-40 left-32"
        gradient={"bg-gradient-to-r from-[#c237bd] to-[#ffffff]"}
      >
        <Substack />
      </FolderButton>

      <FolderButton
        label="French's: Hot Dog Summer"
        className="top-1/2 left-20"
        gradient={"bg-gradient-to-r from-[#CD1512] to-[#F2B303]"}
      >
        <Frenchs />
      </FolderButton>

      <FolderButton
        label="Frank's Red Hot: Sriracha Launch"
        className="top-1/2 right-20"
        gradient={"bg-gradient-to-r from-[#CA273A] to-[#ed3029]"}
      >
        <Franks />
      </FolderButton>

      <FolderButton
        label="Frank's Red Hot: Organic Social"
        className="top-32 left-1/2"
        gradient={"bg-gradient-to-r from-[#CA273A] to-[#ed3029]"}
      >
        <FranksOrganic />
      </FolderButton>

      <FolderButton
        label="Takdown Gym: Organic Social"
        className="top-60 left-20"
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
        label="Old Bay: Organic Social"
        className="top-80 right-20"
        //TOTO: Check gradient
        gradient={"bg-gradient-to-r from-[#1950E5] to-[#DFBF00]"}
      >
        <OldBay />
      </FolderButton>

      <FolderButton
        label="The Courtyard: Brand Design"
        className="bottom-60 right-40"
        gradient={"bg-gradient-to-r from-[#3F3C1D] to-[#cbb82a]"}
      >
        <Courtyard />
      </FolderButton>

      <FolderButton
        label="Angie Headlee: Logo Design"
        className="bottom-40 left-1/2"
        gradient={"bg-gradient-to-r from-[#002349] to-[#C29B40]"}
      >
        <Angie />
      </FolderButton>
    </Page>
  );
}
