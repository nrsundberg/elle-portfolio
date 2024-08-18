import { imageGroup } from "./franksOrganic";

export default function () {
  return (
    <div className={"w-full px-2 py-1"}>
      <p>asdkajsdkajshd;lasjhd</p>

      <div className={imageGroup.parent}>
        <img
          className={imageGroup.images}
          src={"oldBay/IMG_7154.jpg"}
          alt={"Old Bay instagram post - texting meme"}
        />

        <img
          className={imageGroup.images}
          src={"oldBay/IMG_7155.jpg"}
          alt={"Old Bay instagram post - Old Bay Fest"}
        />

        <img
          className={imageGroup.images}
          src={"oldBay/IMG_7156.jpg"}
          alt={"Old Bay instagram post - Crab cake eclipse"}
        />

        <img
          className={imageGroup.images}
          src={"oldBay/IMG_7157.jpg"}
          alt={"Old Bay instagram post - Old Bay Connections"}
        />
      </div>
    </div>
  );
}
