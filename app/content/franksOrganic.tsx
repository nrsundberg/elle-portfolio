const imageGroup = "h-64 w-48";

export default function () {
  return (
    <div className={"w-full px-2 py-1"}>
      <p>asdkn;alskdna;sld</p>

      <div className={"grid grid-cols-4 mt-4 justify-items-center"}>
        <img
          className={imageGroup}
          src={"franks/IMG_7148.jpg"}
          alt={"Frank's instagram post - texting meme"}
        />

        <img
          className={imageGroup}
          src={"franks/IMG_7150.jpg"}
          alt={"Frank's instagram post - dipping Frank's in Frank's meme"}
        />

        <img
          className={imageGroup}
          src={"franks/IMG_7145.jpg"}
          alt={"Frank's instagram post - Olympic champion meme"}
        />

        <img
          className={imageGroup}
          src={"franks/IMG_7152.jpg"}
          alt={"Frank's instagram post - texting grandma meme"}
        />
      </div>
    </div>
  );
}
