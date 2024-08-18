import { InstagramEmbed } from "react-social-media-embed";
import { imageGroup } from "./franksOrganic";

export default function () {
  return (
    <div className={"w-full px-2 py-1"}>
      <p>adsadasdasd</p>

      <div className={imageGroup.parent}>
        <img
          className={imageGroup.images}
          src={"takedown/TakedownMetaAd.PNG"}
          alt={"Takedown Meta ad"}
        />

        <img
          className={imageGroup.images}
          src={"takedown/TakedownFeed1.PNG"}
          alt={"Takedown Instagram feed 1"}
        />

        <img
          className={imageGroup.images}
          src={"takedown/TakedownFeed2.PNG"}
          alt={"Takedown Instagram feed 2"}
        />

        <img
          className={imageGroup.images}
          src={"takedown/TakedownFeed3.PNG"}
          alt={"Takedown Instagram feed 3"}
        />
      </div>
      <div
        className="my-4"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <InstagramEmbed
          url="https://www.instagram.com/reel/C1kOm78rU79/"
          width={328}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <InstagramEmbed
          url="https://www.instagram.com/reel/Cas7C8iFh9G/"
          width={328}
        />
      </div>
    </div>
  );
}
