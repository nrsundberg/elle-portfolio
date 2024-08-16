const imageGroup = "h-64 w-48";

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
        src={"/HotDogSummer.PNG"}
        alt={"Cut article about hot dog summer"}
      />

      <p>
        The image below has become French's most engaged with post of all time.
      </p>
      <ul className={"list-disc pl-6"}>
        <li>137,744 impressions (70x benchmark)</li>
        <li>5,952 engagements (26x benchmark)</li>
      </ul>

      <div className="w-full flex justify-center">
        <img
          className={"px-10 my-4 h-96 w-86"}
          src={"/IMG_7144.jpg"}
          alt={"Three hot dogs with mustard reading 'hot dog summer'"}
        />
      </div>
      <p>Hot dog content has been hot for French's all summer long: </p>

      <div className={"grid grid-cols-4 mt-4"}>
        <img
          className={imageGroup}
          src={"/IMG_7143.jpg"}
          alt={"One million hot dogs will be consumed article headline"}
        />

        <img
          className={imageGroup}
          src={"/IMG_7141.jpg"}
          alt={"Fake olympic podium for hot dog eating"}
        />

        <img
          className={imageGroup}
          src={"/IMG_7140.jpg"}
          alt={"Instagram post about back to school eating hot dogs"}
        />

        <img
          className={imageGroup}
          src={"/IMG_7142.jpg"}
          alt={
            "Instagram meme about human being mostly hot dog instead of water"
          }
        />
      </div>
    </div>
  );
}
