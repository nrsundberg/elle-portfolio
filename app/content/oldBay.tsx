import { InstagramEmbed } from "react-social-media-embed";
import { imageGroup } from "./franksOrganic";

export default function () {
  return (
    <div className={"w-full px-2 py-1"}>
      <p>
        As a Marylander, I loved working on OLD BAY's organic social media.
        There is little we pride ourselves on more than our blue crabs! These
        posts were particularly fun to make since they always resonated and were
        met with a lot of support. It shows exactly what I love most about
        working in social media: you get to build and connect with a fan base
        for your products.
      </p>

      <div className={imageGroup.parent}>
        <InstagramEmbed
          url="https://www.instagram.com/p/C-VIgqouYsg/?hl=en"
          width={328}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/C5rCHxNp-aX/?hl=en"
          width={328}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/C5gyUGQMxmh/?hl=en"
          width={328}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/C4JJKKCA_K7/?hl=en&img_index=1"
          width={328}
        />
      </div>
    </div>
  );
}
