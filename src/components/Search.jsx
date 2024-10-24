import { IoSearchOutline } from "react-icons/io5";

const Search = ({ search, setSearch }) => {
  return (
    <div className=" bg-[#1e2b48] w-2/3 flex mx-auto rounded-lg ">
      <form
        action=""
        className=" flex p-2 w-full gap-2 items-center justify-between"
      >
        <IoSearchOutline className=" text-blue-500 size-6" />
        <input
          type="text"
          placeholder="Search Github Username"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className=" bg- w-full h-10 bg-transparent text-gray-200  placeholder:text-gray-200 text-lg focus:outline-none"
        />
        <button
          type="submit"
          className=" bg-blue-500 p-2 rounded-lg text-gray-200 text-lg  "
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
