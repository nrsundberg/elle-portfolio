import { InstagramEmbed } from "react-social-media-embed";

export const imageGroup = {
  images: "h-100 w-80",
  parent: "grid auto-rows-max mt-4 gap-4 justify-items-center",
};

export default function () {
  return (
    <div className={"w-full px-2 py-1"}>
      <p>
        Frank's tone of voice is irreverent, confident, and as I like to say:
        savage. We're America's favorite hot sauce, of course we are going to
        heat things up on social media.
      </p>

      <div className={imageGroup.parent}>
        <InstagramEmbed
          url="https://www.instagram.com/p/C84mMrttnCa/?hl=en"
          width={328}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/C8e2ev-uXQE/?hl=en"
          width={328}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/C-DbmLzTXmA/?hl=en&img_index=1"
          width={328}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/C5i_JObskSE/?hl=en"
          width={328}
        />
        <TikTokEmbed url="https://www.tiktok.com/@franksredhot/video/7390448809614019882" width={328} />
        <TikTokEmbed url="https://www.tiktok.com/@franksredhot/photo/7347724381163965727" width={325} />
      </div>
    </div>
  );
}
