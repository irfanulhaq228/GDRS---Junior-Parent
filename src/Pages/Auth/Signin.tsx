import { useNavigate } from "react-router-dom";
import AuthImage from "../../Components/AuthImage/AuthImage";

const Signin = () => {
  const navigate = useNavigate();
  const fn_submit = (e: any) => {
    e.preventDefault();
    navigate("/dashboard");
  };
  return (
    <div className="sign-in flex h-full flex-col md:flex-row">
      <AuthImage />
      <div className="flex-1 flex justify-center items-center">
        <div className="w-[90%] lg:w-[460px]">
          <p className="text-[var(--main-text-color)] text-[36px] font-[500] mb-[8px]">
            Sign In
          </p>
          <p className="text-[13px] text-[#434343] mb-[25px]">
            Enter your email and password to login to your account.
          </p>
          <form
            className="flex flex-col gap-[15px]"
            onSubmit={(e) => fn_submit(e)}
          >
            <input
              className="border-[#b1bbc694] border-[1.5px] focus:outline-none rounded-[5px] h-[50px] px-[20px] text-[14px] bg-[#00004b05]"
              placeholder="Email Address"
            />
            <input
              className="border-[#b1bbc694] border-[1.5px] focus:outline-none rounded-[5px] h-[50px] px-[20px] text-[14px] bg-[#00004b05]"
              placeholder="Enter Password"
            />
            <div className="flex justify-between">
              <label className="text-[12px] flex items-center gap-[10px]">
                <input type="checkbox" />
                Remember Password
              </label>
              <label className="text-[12px] cursor-pointer" onClick={() => navigate("/forget-password")}>Forget Password ?</label>
            </div>
            <input
              type="submit"
              value={"Sign In"}
              style={{
                backgroundImage: "linear-gradient(to bottom, #0000B1, #00004B)",
              }}
              className="cursor-pointer rounded-[5px] text-white font-[500] h-[50px] mt-[5px] text-[17px]"
            />
          </form>
          <p className="absolute bottom-5 text-[12px] text-[#8D93A1]">
            © Copyright GDRS 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
