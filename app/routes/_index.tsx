import type { MetaFunction } from "@remix-run/node";
import { FolderButton } from "~/components/FolderButton";
import { Page } from "~/components/Page";
import Frenchs from "~/content/frenchs";
import Substack from "~/content/substack";
import Franks from "~/content/franks";
import Courtyard from "~/content/courtyard";

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
        label="French's Hot Dog Summer"
        className="bottom-60 right-40"
        gradient={"bg-gradient-to-r from-[#CD1512] to-[#F2B303]"}
      >
        <Frenchs />
      </FolderButton>

      <FolderButton
        label="Substack - Elle Dresses Well"
        className="top-32 left-1/2"
        gradient={"bg-gradient-to-r from-[#c237bd] to-[#ffffff]"}
      >
        <Substack />
      </FolderButton>

      <FolderButton
        label="Frank's Red Hot"
        className="top-1/2 left-1/2"
        gradient={"bg-gradient-to-r from-[#CA273A] to-[#ed3029]"}
      >
        <Franks />
      </FolderButton>

      <FolderButton
        label="The Courtyard"
        className="top-60 left-20"
        gradient={"bg-gradient-to-r from-[#CD1512] to-[#F2B303]"}
      >
        <Courtyard />
      </FolderButton>

      <FolderButton
        label="Raffertys Pizza"
        className="top-15 right-20"
        gradient={"bg-gradient-to-r from-[#CD1512] to-[#F2B303]"}
      >
        {<div></div>}
      </FolderButton>
      <FolderButton
        label="Takdown Gym"
        className="bottom-40 left-32"
        gradient={"bg-gradient-to-r from-[#CD1512] to-[#F2B303]"}
      >
        {<div></div>}
      </FolderButton>
    </Page>
  );
}
