import { InstagramEmbed } from "react-social-media-embed";
import { imageGroup } from "./franksOrganic";

export default function () {
  return (
    <div className={"w-full px-2 py-1"}>
      <p>
        Early this spring Frank's Red Hot launched new Dip'n & Squeeze products.
        The business team wanted to drive awareness to these products,
        particularly the Sriacha and its mini counterpart, in light of the
        shortages faced by competitors. We created several organic posts to
        drive awareness through humor (memes) and utility (hot to go
        convenience).
      </p>

      <div className={imageGroup.parent}>
        <InstagramEmbed
          url="https://www.instagram.com/p/C9VB4JATbBM/?hl=en&img_index=1"
          width={328}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/C8ru_OKgwLx/?hl=en"
          width={328}
        />

        <InstagramEmbed
          url="https://www.instagram.com/p/C8HskxZJZZ_/?hl=en&img_index=1"
          width={328}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/C9Kk4zfNyBq/?hl=en"
          width={328}
        />

        <InstagramEmbed
          url="https://www.instagram.com/p/C946q1Wu9qD/?hl=en"
          width={328}
        />
      </div>
    </div>
  );
}
