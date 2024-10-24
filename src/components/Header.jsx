import { IoSunnyOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className=" flex justify-between  p-4 w-2/3 mx-auto text-gray-50 text-2xl  items-center ">
      <div className=" font-semibold">DevFinder</div>
      <div className=" flex items-center gap-3 text-lg">
        Light
        <IoSunnyOutline />
      </div>
    </div>
  );
};

export default Header;
