import React from "react";
import Image from "next/image";
import greaterthen from "../../public/img/greaterthen.svg";
import user from "../../public/img/user.svg";
import Slider from "react-slick";
interface Schedule8Props {
  nextStep: () => void;
  previousStep: () => void;
}
const Schedule8: React.FC<Schedule8Props> = ({ nextStep, previousStep }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    arrows: false,
  };
  const dates = [
    { day: "Tue", date: 26 },
    { day: "Wen", date: 27 },
    { day: "Thu", date: 28 },
    { day: "Fri", date: 29 },
    { day: "Sat", date: 30 },
    { day: "Sun", date: 31 },
  ];
  return (
    <>
      <div className="relative py-5">
        <div className="container">
          <div className="relative">
            <div className="mx-auto w-fit max-w-[192px]">
              <Image
                src="/img/logo.png"
                alt="avs"
                width={192}
                height={74}
                className="object-cover"
              />
            </div>
            <div className="absolute top-[17px] left-0">
              <div
                className="bg-sky h-10 w-10 rounded-full flex items-center justify-center"
                onClick={previousStep}
              >
                <Image
                  src="/img/leftarrow.png"
                  alt="arrow"
                  width={18}
                  height={12}
                />
              </div>
            </div>
          </div>
          <div className="w-full bg-[#EBF6FA] rounded-full h-2.5 mt-4">
            <div
              className="bg-orange h-2.5 rounded-full"
              style={{ width: "45%" }}
            ></div>
          </div>
          <h1 className="text-blue text-2xl font-semibold sm:text-center mt-6">
            What sleep issues are you currently experiencing?
          </h1>
          <div className="rounded-[20px] border-[3px] border-[#EFEFEF] p-4 mt-6">
            <p className="text-blue text-[22px] font-normal mb-5">
              Tue, March 26
            </p>
            <Slider {...settings}>
              {dates.map(({ day, date }) => (
                <div
                  key={`${day}-${date}`}
                  className="w-fit max-w-[60px] ml-2 flex flex-col rounded-[10px] border-[3px] border-[#D6D8DE] p-[10px]"
                >
                  <p className="text-[15px] font-normal">{day}</p>
                  <h6 className="text-2xl font-bold">{date}</h6>
                  <p className="inline-flex text-xs font-normal">
                    <Image
                      src={user}
                      alt="user"
                      width={14}
                      height={14}
                      className="mr-1"
                    />{" "}
                    2
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
                <button
                  className="rounded-[20px] bg-orange hover:opacity-[0.7] duration-500 text-white text-[22px] font-bold leading-normal py-4 text-center w-full max-w-[328px]"
                  onClick={nextStep}
                >
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
