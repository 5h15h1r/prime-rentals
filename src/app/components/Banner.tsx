import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[250px] w-[100%] md:h-[500px] mt-2 ">
      <Image
        src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
        fill={true}
        alt="Picture of the author"
        className="w-full object-contain md:object-none"
      />
    </div>
  );
};

export default Banner;
