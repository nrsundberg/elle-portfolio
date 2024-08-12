import type { MetaFunction } from "@remix-run/node";
import { FolderButton } from "~/components/FolderButton";
import { Page } from "~/components/Page";
// import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

// export default function Index() {
//   return (
//     <div>
//       <div className="grid grid-cols-10">
//         <div className="grid grid-rows-10">
//         <div>

//         </div>

//       </div>
//       </div>
//       <Footer />
//     </div>
// );
// }

export default function Index() {
  return (
    <Page>
      <div className="p-10"></div>
      <FolderButton />
    </Page>
  );
}
