import { Link } from "@remix-run/react";
import { FaRegHeart, FaRegComment } from "react-icons/fa";

export default function ({ posts }: { posts: any }) {
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
        through writing on Substack. 5 of my posts have reached top 5 on the
        platform in the Fashion & Beauty category.
      </p>

      {posts ? (
        posts?.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            cover_image={post.cover_image}
            likes={post.reaction_count}
            comments={post.comment_count}
            to={post.canonical_url}
            subtitle={post.subtitle}
          />
        ))
      ) : (
        <p className="my-3 text-red-500">Posts not rendering correctly...</p>
      )}

      <p>
        Reading and writing about topics outside of my industry has enabled me to
        connect with extremely talented individuals, and has made me a better
        marketer. By not keeping myself in a box, I am able to be most creative
        and well-rounded.
      </p>
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

function PostCard({
  title,
  cover_image,
  likes,
  comments,
  to,
  subtitle,
}: {
  title: string;
  cover_image: string;
  likes: number;
  comments: number;
  to: string;
  subtitle: string;
}) {
  return (
    <Link
      to={to}
      className={"grid grid-cols-[350px_150px] justify-center my-3"}
    >
      <div className="grid grid-rows-3">
        <p className="font-bold text-lg">{title}</p>
        <p className="text-md">{subtitle}</p>
        <div className="flex items-center">
          <FaRegHeart className="mr-1" />
          <span>{likes}</span>

          <FaRegComment className="ml-2 mr-1" />
          <span>{comments}</span>
        </div>
      </div>

      <div className="ml-4 relative right-0">
        <img src={cover_image} alt="cover" className="h-32 w-32" />
      </div>
    </Link>
  );
}
