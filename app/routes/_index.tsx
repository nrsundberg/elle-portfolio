import type { MetaFunction } from "@remix-run/node";
import { ContentType, FolderButton } from "~/components/FolderButton";
import { Page } from "~/components/Page";

export const meta: MetaFunction = () => {
  return [
    { title: "Elle Sundberg Portfolio" },
    { name: "description", content: "Welcome to Elle's Portfolio!" },
  ];
};

export default function Index() {
  return (
    <Page>
      <FolderButton
        label="The Courtyard"
        className="top-60 left-20"
        contentpopup={courtyardContent}
      />
      <FolderButton
        label="Raffertys Pizza"
        className="top-15 right-20"
        contentpopup={raffertysContent}
      />
      <FolderButton
        label="Takdown Gym"
        className="bottom-40 left-32"
        contentpopup={takedownContent}
      />
    </Page>
  );
}

const courtyardContent: ContentType[] = [
  { text: "The Courtyard", image: "public/folder.png" },
  { text: "The Courtyard", image: "public/folder.png" },
  { text: "The Courtyard", image: "public/favicon.ico" },
];

const raffertysContent: ContentType[] = [
  { text: "Raffertys", image: "public/favicon.ico" },
  { text: "Raffertys", image: "public/favicon.ico" },
  { text: "Raffertys", image: "public/favicon.ico" },
];

const takedownContent: ContentType[] = [
  { text: "Takedown", image: "public/favicon.ico" },
  { text: "Takedown", image: "public/favicon.ico" },
  { text: "Takedown", image: "public/favicon.ico" },
];
