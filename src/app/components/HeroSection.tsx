import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="hidden md:flex justify-between lg:mx-24 py-8 lg:py-16">
      <div className="flex flex-col p-3 justify-center gap-6 lg:gap-10 w-full md:w-1/2 m-4 lg:m-6">
        <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-heading">
          Rent your dream home
        </p>
        <p className="text-lg md:text-xl lg:text-2xl text-subheading">
          Where do you want to go?
        </p>
        <div className="flex items-center border rounded-md h-12 w-full md:w-96 ring-2 ring-primary focus-within:ring-2 focus-within:ring-secondary">
          <button className="btn-search-primary ml-4">
            <Search className="w-4" />
          </button>
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-full p-2 pl-2 focus:outline-none placeholder"
          />
        </div>
      </div>
      <div className="flex justify-center w-1/2">
        <img
          src="/vidar-nordli-mathisen.jpg"
          alt="accommodation"
          className="w-10/12 h-full object-cover"
        />
      </div>
    </div>
  );
};
export default HeroSection;
