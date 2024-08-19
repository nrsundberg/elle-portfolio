const newImageGroup = {
  images: "h-full w-full",
  parent: "grid auto-rows-max mt-4 gap-4 justify-items-center",
};

export default function () {
  return (
    <div className={"w-full px-2 py-1"}>
      <p>
        One of my favorite projects I've worked on is designing the branding for
        The Courtyard, a coffee shop & bistro in Nisswa, Minnesota. Nisswa is
        two hours north of Minneapolis and is known for its many clear lakes and
        cozy cabin resorts, making it a very popular tourist destination.
        <br />
        <br />
        Below is the mood board I created with the guidance of the owners,
        followed by our final logo variations, color scheme, and social media
        design. The Courtyard is cozy, refined, and editorial. Unlike a lot of
        the other brands I work on, it is not meant to be scrappy or funny. This
        has been a refreshing new tone to work with, and the brand has quickly
        gained popularity online as many nooks within the restaurant are very
        "shareable."
      </p>
      <img className="my-3" src={"courtyard/1.png"} alt={"Courtyard logo"} />
      <div className={newImageGroup.parent}>
        <img
          className={newImageGroup.images}
          src={"courtyard/2.png"}
          alt={"Courtyard logo"}
        />
        <img
          className={newImageGroup.images}
          src={"courtyard/3.png"}
          alt={"Courtyard logo"}
        />
        <img
          className={newImageGroup.images}
          src={"courtyard/4.png"}
          alt={"Courtyard logo"}
        />
        <img
          className={newImageGroup.images}
          src={"courtyard/5.png"}
          alt={"Courtyard logo"}
        />
        <div>
          <p className="mb-3">
            The beauty of this project is is in the details, even the napkin
            dispensers I designed to look like postcards as a gentle nod to the
            touristy aspect of its location.
          </p>
          <img
            src={"courtyard/CY Napkin Dispener-02.png"}
            alt={"Courtyard napkin dispener"}
          />
        </div>
      </div>
    </div>
  );
}
