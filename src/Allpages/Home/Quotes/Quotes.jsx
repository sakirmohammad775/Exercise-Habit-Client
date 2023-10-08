import Marquee from "react-fast-marquee";

const Quotes = () => {
    return (
        <div className="mt-6">
             <h1 className="font-extrabold text-2xl text-center mb-5 text-cyan-500 "><span className="text-gray-700">BE </span>STRONGER</h1>
            <Marquee className=" bg-cyan-300 " speed={50}>Fitness is not just about looking good........... it is about feeling great and living your life to the fullest.......... It is about waking up every morning with boundless energy, ready to take on the challenges of the day. It is about being able to enjoy the simple pleasures of life, like playing with your children, going for a hike, or even just climbing a flight of stairs without feeling winded.</Marquee>
        </div>
    );
};

export default Quotes;