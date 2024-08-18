import { InstagramEmbed } from "react-social-media-embed";
import { imageGroup } from "./franksOrganic";

export default function () {
  return (
    <div className={"w-full px-2 py-1"}>
      <p>
        Takedown's tone of voice is aspirational, educational, and welcoming.
        The gym prides themselves on truly offerring something for everyone:
        busy mom? No worries, we offer childcare services. High school athlete?
        Here is a summer training program from a previous D1 athlete. Have never
        stepped foot in a gym before? Try our guided group fitness classes, full
        of people of all ages and abilities. The social feed was designed to
        appeal to many different target markets in search of the same thing: a
        great workout and great community.{" "}
      </p>

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

        <InstagramEmbed
          url="https://www.instagram.com/reel/C1kOm78rU79/"
          width={328}
        />

        <InstagramEmbed
          url="https://www.instagram.com/reel/Cas7C8iFh9G/"
          width={328}
        />
      </div>
    </div>
  );
}
