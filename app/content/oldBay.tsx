const imageGroup = "h-64 w-48";

export default function () {
  return (
    <div className={"w-full px-2 py-1"}>
      <p>asdkajsdkajshd;lasjhd</p>

      <div className={"grid grid-cols-4 mt-4 justify-items-center"}>
        <img
          className={imageGroup}
          src={"oldBay/IMG_7154.jpg"}
          alt={"Old Bay instagram post - texting meme"}
        />

        <img
          className={imageGroup}
          src={"oldBay/IMG_7155.jpg"}
          alt={"Old Bay instagram post - Old Bay Fest"}
        />

        <img
          className={imageGroup}
          src={"oldBay/IMG_7156.jpg"}
          alt={"Old Bay instagram post - Crab cake eclipse"}
        />

        <img
          className={imageGroup}
          src={"oldBay/IMG_7157.jpg"}
          alt={"Old Bay instagram post - Old Bay Connections"}
        />
      </div>
    </div>
  );
}
