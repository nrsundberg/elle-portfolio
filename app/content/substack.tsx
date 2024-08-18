export default function () {
  return (
    <div className="w-full flex-col py-1 px-2">
      <div className="flex items-center justify-center mb-3">
        <img
          src="/legally blonde font.PNG"
          alt="Substack cover photo"
          className="h-64 justify-self-center"
        />
      </div>
      <p>
        Over the last 6 months I have formed a community of 2k+ subscribers
        through writing on
        <a
          className={"text-red-600"}
          href={"https://ellesundberg.substack.com/"}
        >
          {" "}
          Substack
        </a>
        . 5 of my posts have reached top 5 on the platform in the Fashion &
        Beauty category:
      </p>

      <ul className={"list-disc pl-10 text-red-600 mt-1 marker:text-[#464147]"}>
        <li>
          <a
            href={
              "https://ellesundberg.substack.com/p/how-are-people-affording-fashion"
            }
            aria-label={"link to article"}
          >
            How are people affording fashion?
          </a>
        </li>
        <li>
          <a
            href={
              "https://ellesundberg.substack.com/p/theres-168-hours-in-a-week"
            }
            aria-label={"link to article"}
          >
            There's 168 hours in a week
          </a>
        </li>
        <li>
          <a
            href={"https://ellesundberg.substack.com/p/its-ok-to-love-fashion"}
            aria-label={"link to article"}
          >
            It's ok to love fashion!
          </a>
        </li>
        <li>
          <a
            href={"https://ellesundberg.substack.com/p/3-crafts-you-can-wear"}
            aria-label={"link to article"}
          >
            3 crafts you can wear!
          </a>
        </li>
        <li>
          <a
            href={
              "https://ellesundberg.substack.com/p/braindump-on-inspiration-and-sameness"
            }
            aria-label={"link to article"}
          >
            Brain dump on inspiration and sameness: nothing new to see here
          </a>
        </li>
      </ul>

      <div className={"flex items-center justify-around"}>
        <img
          className={"mt-4 h-80"}
          src={"/Substack Stats.PNG"}
          alt={"Three hot dogs with mustard reading 'hot dog summer'"}
        />
      </div>
    </div>
  );
}
