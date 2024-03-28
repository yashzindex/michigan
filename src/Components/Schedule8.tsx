import React from "react";
import Image from "next/image";
import greaterthen from "../../public/img/greaterthen.svg";
import user from "../../public/img/user.svg";
import disabled from "../../public/img/disabled.png";
import Slider from "react-slick";
import Header from "@/Components/Header";
import Progressbar from "@/Components/Progressbar";

interface Schedule8Props {
  nextStep: () => void;
  previousStep: () => void;
}
const Schedule8: React.FC<Schedule8Props> = ({ nextStep, previousStep }) => {
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
    <>
      <div className="relative py-5">
        <div className="container">
          <Header previousStep={previousStep} />
          <h1 className="text-blue text-2xl font-semibold sm:text-center mt-6">
            Schedule your initial 55 min appointment
          </h1>
          <div className="custom_slider rounded-[20px] border-[3px] border-[#EFEFEF] p-4 mt-6">
            <p className="text-blue text-[22px] font-normal mb-5">
              Tue, March 26
            </p>
            <Slider {...settings}>
              {dates.map(({ day, date, people }) => (
                <div
                  key={`${day}-${date}`}
                  className={`w-fit flex flex-col rounded-[10px] border-[2px] border-[#D6D8DE] p-[10px] duration-500 hover:bg-orange hover:text-white ${
                    date === 28
                      ? "border-[2px] border-[#EFEFEF] text-[#EFEFEF]"
                      : ""
                  }`}
                >
                  <p className="text-[15px] font-normal sm:text-center leading-normal">
                    {day}
                  </p>
                  <h6 className="text-2xl font-bold sm:text-center leading-normal">
                    {date}
                  </h6>
                  <p className="flex text-xs font-normal sm:w-fit sm:text-center sm:mx-auto leading-normal">
                    <Image
                      src={date === 28 ? disabled : user}
                      alt="user"
                      width={18}
                      height={16}
                      className="mr-2 hover:fill-white hover:text-white"
                    />
                    {date === 28 ? " " : people}
                  </p>
                </div>
              ))}
            </Slider>
            <p className="text-slate text-[15px] font-normal mt-5">
              Timezone: America/New_York
            </p>
          </div>
          <div className="relative mt-6">
            <div className="rounded-[20px] border-[3px] border-[#EFEFEF] p-4">
              <Image
                src="/img/label.png"
                alt="labelimg"
                width={100}
                height={30}
                className="object-cover"
              />
              <div className="flex flex-row items-center gap-4">
                <Image
                  src="/img/s21.png"
                  alt="labelimg"
                  width={97}
                  height={97}
                  className="object-cover"
                />
                <div className="w-full">
                  <h3 className="text-blue text-[22px] font-normal">
                    Deirdre Conroy
                  </h3>
                  <p className="text-slate text-lg font-semibold">
                    PhD Insomnia specialist
                  </p>
                </div>
                <div>
                  <Image
                    src={greaterthen}
                    alt="greaterthen"
                    height={16}
                    width={16}
                    className="cursor-pointer"
                  />
                </div>
              </div>
              <div className="mt-[30px]">
                <div className="grid grid-cols-3 gap-[14px]">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      style={{ fontSize: "18px", padding: "16px" }}
                      className="font-normal text-slate form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      3:00pm
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      style={{ fontSize: "18px", padding: "16px" }}
                      className="font-normal text-slate form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      4:00pm
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      style={{ fontSize: "18px", padding: "16px" }}
                      className="font-normal text-slate form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      5:00pm
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      style={{ fontSize: "18px", padding: "16px" }}
                      className="font-normal text-slate form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      6:00pm
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      style={{ fontSize: "18px", padding: "16px" }}
                      className="font-normal text-slate form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      7:00pm
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      style={{ fontSize: "18px", padding: "16px" }}
                      className="font-normal text-slate form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      8:00pm
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-10 text-center">
                <button className="rounded-[20px] bg-orange hover:opacity-[0.7] duration-500 text-white text-[22px] font-bold leading-normal py-4 text-center w-full max-w-[328px]">
                  CONFIRM DATE & TIME
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule8;
