import { useNavigate } from "react-router-dom";
import "../../styles/animations.css";
import InputInlineError from "../common/InputInlineError";
import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import SubmitBtn from "../common/SubmitBtn";
import PasswordFeild from "../landingPage/PasswordFeild";

export default function LoginContent() {
  //React Hook form
  const { register, handleSubmit, control, formState } = useForm({
    mode:"onBlur"
  });
  const { errors, isSubmitting } = formState;
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-col h-screen items-center justify-center px-6 py-8 mx-auto  lg:py-0">
        <div
          className="w-full bg-on-secondary   rounded-2xl shadow dark:border  
      sm:max-w-lg xl:p-0  my-3"
        >
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
            <div className="text-center flex flex-col items-center justify-center gap-">
              <span className="p-4 mb-4 bg-blue-primary flex justify-center items-center w-12 h-12 rounded-lg">
                <span className="material-symbols-outlined text-on-secondary">
                  school
                </span>
              </span>
              <h1 className="text-xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-3xl ">
                Login to Syllabus
              </h1>
              <p className="text-lg">Access your premium education partner</p>
            </div>
            <form
              className="space-y-4 md:space-y-6 "
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* Email */}
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Email
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-6.5 -translate-y-1/2 text-outline text-[20px]">
                    mail
                  </span>
                  <input
                    className="w-full pl-10 pr-12 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-1 font-body-md text-body-md text-on-surface"
                    id="email"
                    placeholder="example.@example.com"
                    type="email"
                    name="email"
                    {...register("email", {
                      required: "Email is required.",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                      validate: {
                        available: (value) => {
                          const availableEmail = "hamza@gmail.com";
                          return (
                            value === availableEmail ||
                            `Email is not exist. Please Register.`
                          );
                        },
                      },
                    })}
                  />
                  <div className="error ab    h-6 flex items-center">
                    {errors.email && (
                      <InputInlineError ErrorMsg={errors.email.message} />
                    )}
                    {errors.email?.type === "available" && (
                      <span
                        className="text-sm font-bold cursor-pointer text-blue-900 underline ml-1"
                        onClick={() => navigate("/registration")}
                      >
                        Go to register
                      </span>
                    )}
                  </div>
                  <button
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[20px]"></span>
                  </button>
                </div>
              </div>
              {/* Password */}
              <PasswordFeild errors={errors} register={register}/>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      name="rememberMeBtn"
                      {...register("rememberMe")}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-900 font-medium cursor-pointer text-sm"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm  font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <SubmitBtn isSubmitting={isSubmitting} type="Logining" />

              <div className="relative flex items-center py-4">
                <div className="grow border-t"></div>
                <span className="shrink-0 mx-4 font-label-sm text-md uppercase tracking-wider">
                  Or continue with
                </span>
                <div className="grow border-t"></div>
              </div>
              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 active:scale-95 transition-all cursor-pointer focus:ring-2 focus:ring-primary-300 font-medium rounded-lg text-lg px-5 py-3 outline-1"
              >
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  ></path>
                </svg>
                <span>Sign in with Google</span>
              </button>
              <p className="text-md text-center  text-on-background ">
                Don’t have an account yet?{" "}
                <a
                  href="/registration"
                  className="font-bold  text-blue-primary hover:underline "
                >
                  Register
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
      <DevTool control={control} placement="top-left" />
    </>
  );
}
