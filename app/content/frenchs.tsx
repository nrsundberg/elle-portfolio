import { InstagramEmbed } from "react-social-media-embed";
import { imageGroup } from "./franksOrganic";

export default function () {
  return (
    <div className="w-full flex-col py-1 px-2">
      <p>
        Early this summer I read an{" "}
        <a
          className={"text-red-600"}
          href={
            "https://www.thecut.com/article/its-officially-hot-dog-season.html"
          }
        >
          article
        </a>{" "}
        from The Cut saying, "hot dogs are having a moment." Despite content
        already scheduled to promote burgers and grilling for the coming season,
        we pivoted to have a #hotdogsummer instead.
      </p>
      <img
        className={"px-10 my-4"}
        src={"frenchs/HotDogSummer.PNG"}
        alt={"Cut article about hot dog summer"}
      />

      <p>
        The image below has become French's most engaged with post of all time:
      </p>
      <ul className={"list-disc pl-6"}>
        <li>137,744 impressions (70x benchmark)</li>
        <li>5,952 engagements (26x benchmark)</li>
      </ul>

      <div className="w-full flex justify-center">
        <InstagramEmbed
          url="https://www.instagram.com/p/C8M069ON8An/?hl=en"
          width={328}
          className="mt-3"
        />
      </div>
      <p>Hot dog content has been hot for French's all summer long: </p>

      <div className={imageGroup.parent}>
        <InstagramEmbed
          url="https://www.instagram.com/p/C-DUxgjTAoB/?hl=en&img_index=1"
          width={328}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/C9h0KIet0tY/?hl=en"
          width={328}
        />

        <InstagramEmbed
          url="https://www.instagram.com/p/C-X-j8svBNS/?hl=en"
          width={328}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/C9z377ZvuVE/?hl=en"
          width={328}
        />
      </div>
    </div>
  );
}
