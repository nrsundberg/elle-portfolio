import { InstagramEmbed } from "react-social-media-embed";
import { imageGroup } from "./franksOrganic";

export default function () {
  return (
    <div className={"w-full px-2 py-1"}>
      <p>
        Rafferty's pizza is both a local favorite and tourist destination. Their
        fan base has been awesome to build and connect with on social media. The
        brand's tone of voice is welcoming, family-friendly, confident, funny,
        and informative. We love our customers, and our customers love us. We
        want to communicate specials with them, and remind them that the best
        pizza in the world is just a phone call or quick drive away.
      </p>

      <div className={imageGroup.parent}>
        <InstagramEmbed
          url="https://www.instagram.com/p/C87139EROwN"
          width={328}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/C8pFiTVAI58"
          width={328}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/C7UQBKiMZW_"
          width={328}
        />

        <InstagramEmbed
          url="https://www.instagram.com/p/C7PAg4nsyDZ"
          width={328}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/C6wR769rxcJ"
          width={328}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/C6WS_cfLanG/?hl=en"
          width={328}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/C6PCd5DAvlm/?hl=en"
          width={328}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/CzFN65aM5Pp/?hl=en"
          width={328}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/CmMocZur9iD/?hl=en"
          width={328}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/CgUxg01LFDM/?hl=en"
          width={328}
        />
      </div>
    </div>
  );
}
