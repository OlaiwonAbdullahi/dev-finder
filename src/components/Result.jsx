import { CiLink, CiLocationOn } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { GoOrganization } from "react-icons/go";

const Result = ({ profile }) => {
  return (
    <div className=" bg-[#1e2b48] text-white w-2/3 p-3 rounded-lg flex flex-col gap-2">
      <div className=" flex items-center gap-3">
        <div className="">
          <img
            src={profile.avatar_url || "https://placehold.co/400"}
            alt=""
            className=" w-32 h-32 rounded-full"
          />
        </div>
        <div className=" flex-col flex items-start">
          <span className=" text-xl font-semibold">
            {profile.name || "null"}
          </span>
          <span className=" text-blue-500">@{profile.login || "null"}</span>
          <span>Joined {profile.created_at || "null"}</span>
        </div>
      </div>
      <div className="">{profile.bio || "null"}</div>
      <div className=" bg-[#141d2e] rounded-lg p-3 flex justify-around font-bold">
        <div className="">
          <span className="text-sm text-center">Repos</span>
          <h2 className=" text-4xl font-semibold text-center">
            {profile.public_repos || "null"}
          </h2>
        </div>
        <div className="">
          {" "}
          <span className="text-sm text-center">Followers</span>
          <h2 className=" text-4xl font-semibold text-center">
            {" "}
            {profile.followers || "null"}
          </h2>
        </div>
        <div className="">
          {" "}
          <span className="text-sm text-center">Following</span>
          <h2 className=" text-4xl font-semibold text-center">
            {profile.following || "null"}
          </h2>
        </div>
      </div>
      <div className=" flex justify-around">
        <div className=" flex flex-col gap-2">
          <div className=" flex items-center gap-2">
            <CiLocationOn className=" size-6" /> {profile.location || "null"}
          </div>
          <div className="flex items-center gap-2">
            <CiLink className=" size-6" /> {profile.html_url || "null"}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <FaXTwitter className=" size-6" />@
            {profile.twitter_username || "null"}
          </div>
          <div className="flex items-center gap-2">
            <GoOrganization className=" size-6" />
            {profile.company || "null"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
