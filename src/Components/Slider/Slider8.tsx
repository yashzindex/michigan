import React from "react";
import Image from "next/image";
import blocked from "../../../public/img/blocked.svg";
import user from "../../../public/img/user.svg";
import whiteUser from "../../../public/img/WhiteUser.svg";
import Slider from "react-slick";
const Slider8 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "15px",
  };
  const dates = [
    { day: "Tue", date: 26, people: 2 },
    { day: "Wen", date: 27, people: 1 },
    { day: "Thu", date: 28, people: 0 },
    { day: "Fri", date: 29, people: 3 },
    { day: "Sat", date: 30, people: 1 },
    { day: "Sun", date: 31, people: 1 },
  ];
  return (
    <Slider {...settings}>
      {dates.map(({ day, date, people }) => (
        <div
          key={`${day}-${date}`}
          className={`slider_text w-fit flex flex-col rounded-[10px] border-[2px] border-[#D6D8DE] p-[10px] hover:border-orange duration-500 hover:bg-orange hover:text-white ${
            date === 28 ? "border-[2px] border-[#EFEFEF] text-[#EFEFEF]" : ""
          }`}
        >
          <p className="text-[15px] font-normal sm:text-center leading-normal">
            {day}
          </p>
          <h6 className="text-2xl font-bold sm:text-center leading-normal">
            {date}
          </h6>
          <p className="inner_main flex text-xs font-normal sm:w-fit sm:text-center sm:mx-auto leading-normal">
            <Image
              src={date === 28 ? blocked : user}
              alt="user"
              width={14}
              height={14}
              className={`${
                date === 28 ? "" : "mr-2"
              } hover:text-white  focus:text-white without_Hover`}
            />
            <Image
              src={date === 28 ? blocked : whiteUser}
              alt="user"
              width={14}
              height={14}
              className={`${
                date === 28 ? "" : "mr-2"
              } hover:text-white  focus:text-white with_Hover`}
            />
            {date === 28 ? " " : people}
          </p>
        </div>
      ))}
    </Slider>
  );
};

export default Slider8;
