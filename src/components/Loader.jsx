import loader from "../assets/Loader.png";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full gap-2">
      {/* Spinner with image */}
      <div className="animate-spin rounded-full h-12 w-12">
        <img src={loader} alt="Loading..." className="h-full w-full" />
      </div>

      {/* Animated "Loading..." text */}
      <div className="text-[#5224b5] font-medium">
        Loading<span className="typing"></span>
      </div>
    </div>
  );
};

export default Loader;
