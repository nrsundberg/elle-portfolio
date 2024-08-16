const imageGroup = "h-64 w-48";

export default function () {
  return (
    <div className={"w-full px-2 py-1"}>
      <p>
        These are organic posts I created to support the launch of Frank's new
        Sriracha squeeze product.
      </p>

      <div className={"grid grid-cols-4 mt-4 justify-items-center"}>
        <img
          className={imageGroup}
          src={"/IMG_7146.jpg"}
          alt={"Frank's instagram post - brainrot meme"}
        />

        <img
          className={imageGroup}
          src={"/IMG_7147.jpg"}
          alt={"Frank's instagram post - texting meme"}
        />

        <img
          className={imageGroup}
          src={"/IMG_7151.jpg"}
          alt={"Frank's instagram post - Sriracha in car glove box"}
        />

        <img
          className={imageGroup}
          src={"/IMG_7164.jpg"}
          alt={"Frank's instagram post - Franks mini filling up purse"}
        />
      </div>
    </div>
  );
}
