import ThankYouImage from "../assets/Thankyou.png";
export default function ThankYou() {
  return (
    <div className="w-full sm:w-[80%] p-1 rounded-md flex flex-col items-center justify-between">
      <div className="h-full flex justify-center">
        <img
          src={ThankYouImage}
          className="sm:w-1/2 w-full"
          alt="Thank you :)"
        />
      </div>
      <div className="h-[30%] flex justify-center items-center my-8 sm:my-0">
        <button className="rounded-full bg-[#5224b5] text-white transition-colors hover:bg-[#4b528f] px-12 py-4 cursor-pointer">
          Start new Survey?
        </button>
      </div>
    </div>
  );
}
