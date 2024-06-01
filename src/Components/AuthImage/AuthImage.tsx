import img from "../../assets/images/Auth-img.png";

const AuthImage = () => {
  return (
    <div className="flex-1 relative flex justify-center items-center">
      <img src={img} className="h-[50vh] md:h-[100vh] w-[100%] object-cover object-left" />
      <div className="absolute my-[3%] mx-[3%] sm:mx-[8%] h-[80%] lg:w-[460px] sm:h-[380px] border-[#7f989a81] border-[2px] rounded-[6px] bg-[#a9c2c642] text-white flex flex-col justify-center">
        <p className="border-[#ffffff7e] border-l-[2px] pl-[15px] mx-[20px] text-[60px] font-[700]">Welcome to GDRS</p>
        <p className="mx-[35px] text-[13px]">
          GDRS help your children to set goals to achieve something noble and
          good. You can track your children progress and build their teams
        </p>
      </div>
    </div>
  );
};

export default AuthImage;
