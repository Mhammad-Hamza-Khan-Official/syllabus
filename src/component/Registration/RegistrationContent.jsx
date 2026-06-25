import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import InputInlineError from "../common/InputInlineError";
import { useNavigate } from "react-router-dom";
import PasswordFeild from "../common/PasswordFeild";
import SubmitBtn from "../common/SubmitBtn";
import { useState } from "react";


export default function RegistrationContent() {
  //React Hook form
  const { register, handleSubmit, control, formState, getValues } = useForm();
  const { errors, isSubmitting, isSubmitted, isSubmitSuccessful } = formState;
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(data);


    } catch (error) {
      console.log(error);
    }
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState({
    password: false,
    confirmPassword: false,
  });

  const togglePassword = (passwordType) => {
    if (passwordType === "password") {
      if (!isPasswordVisible.password) {
        setIsPasswordVisible((prev) => ({ ...prev, password: true }));
      } else {
        setIsPasswordVisible((prev) => ({ ...prev, password: false }));
      }
    }

    if (passwordType === "confirmPassword") {
      if (!isPasswordVisible.confirmPassword) {
        setIsPasswordVisible((prev) => ({ ...prev, confirmPassword: true }));
      } else {
        setIsPasswordVisible((prev) => ({ ...prev, confirmPassword: false }));
      }
    }
  };

  console.log({ isSubmitting, isSubmitted, isSubmitSuccessful });

  return (
    <>
      <div className="flex flex-col h-auto items-center justify-center px-6 py-1 mx-auto  lg:py-0 @max-3xl:h-screen">
        <div
          className="w-full  bg-on-secondary  flex items-center justify-center rounded-2xl shadow dark:border md:mt-0 
      sm:max-w-lg xl:p-0  "
        >
          <div className="w-full px-6 py-4 space-y-4 md:space-y-6 ">
            <div className="text-center flex flex-col items-center justify-center gap-">
              <span className="p-4 mt-2 bg-blue-primary flex justify-center items-center w-12 h-12 rounded-lg">
                <span className="material-symbols-outlined text-on-secondary hidden sm:inline-block">
                  school
                </span>
              </span>
              <h1 className="text-2xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Login to Syllabus
              </h1>
              <p>Start your journey toward academic excellence.</p>
            </div>
            <form
              className="space-y- md:space-y- "
              action=""
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your Full Name
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-6.5 -translate-y-1/2 text-outline text-[20px]">
                    person
                  </span>
                  <input
                    className="w-full pl-10 pr-4 py-3 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-1 font-body-md text-body-md text-on-surface bg-surface-container-low"
                    id="name"
                    placeholder="Enter Your Name"
                    type="name"
                    name="name"
                    {...register("name", {
                      required: "Name is required.",
                    })}
                  />
                  <div className="error  h-6 flex items-center">
                    {errors.name && (
                      <InputInlineError ErrorMsg={errors.name.message} />
                    )}
                  </div>
                </div>
              </div>

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
                            value !== availableEmail ||
                            `Email is already exist.Please login.`
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
                        className="text-sm font-bold cursor-pointer text-blue-800 ml-1"
                        onClick={() => navigate("/login")}
                      >
                        Go to login
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

              {/* Password feilds */}

              <div className="">
                <div className="">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  {/* password */}
                  <PasswordFeild register={register} errors={errors} />
                </div>
                {/* conformPassword */}
                <div className="">
                  <label
                    htmlFor="conformPassword"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Conform Password
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-6.5 -translate-y-1/2 text-outline text-[20px]">
                      lock
                    </span>
                    <input
                      className="w-full pl-10 pr-12 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-1 font-body-md text-body-md text-on-surface"
                      id="conformPassword"
                      placeholder={
                        isPasswordVisible.confirmPassword
                          ? "Password"
                          : "********"
                      }
                      type={
                        isPasswordVisible.confirmPassword ? "text" : "password"
                      }
                      name="confirmPassword"
                      autoComplete="new-password"
                      {...register("confirmPassword", {
                        required: "Confirm password is required.",
                        validate: {
                          hasUppercase: (value) =>
                            /[A-Z]/.test(value) ||
                            "Must contain an uppercase letter",

                          hasNumber: (value) =>
                            /[0-9]/.test(value) || "Must contain a number",

                          hasSpecialChar: (value) =>
                            /[!@#$%^&*]/.test(value) ||
                            "Must contain a special character",
                          isSame: (value) =>
                            value === getValues("password") ||
                            "Confirm password not match.",
                        },
                      })}
                    />
                    <div className="error   h-6 flex items-center">
                      {errors.confirmPassword && (
                        <InputInlineError
                          ErrorMsg={errors.confirmPassword.message}
                        />
                      )}
                    </div>
                    <button
                      className="absolute right-3 top-6.5 -translate-y-1/2 text-outline hover:text-primary transition-colors cursor-pointer"
                      onClick={() => {
                        togglePassword("confirmPassword");
                      }}
                      type="button"
                    >
                      <span className="material-symbols-outlined visibleIcon">
                        {isPasswordVisible.confirmPassword
                          ? "visibility"
                          : "visibility_off"}
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* last qulificlation */}
              <div>
                <label
                  htmlFor="lastQulification"
                  className="block mb-2 text-sm font-medium capitalize text-gray-900 "
                >
                  last qulification
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-6.5 -translate-y-1/2 text-outline text-[20px]">
                    school
                  </span>
                  <select
                    name="lastQulification"
                    id="lastQulification"
                    className="w-full pl-10 pr-12 py-3 ml-1 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-1  text-on-surface font-semibold "
                    {...register("lastQulification", {
                      required: "Last Qulification is required.",
                    })}
                    defaultValue=""
                  >
                    <option value="">Select Qualification</option>
                    <option value="matric">Matric</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="diploma">Diploma</option>
                    <option value="bachelors">Bachelor's Degree</option>
                    <option value="masters">Master's Degree</option>
                    <option value="phd">PhD</option>
                    <option value="other">Other</option>
                    <option value="none">none</option>
                  </select>
                  <div className="error ab  h-6 flex items-center">
                    <div className="error ab  h-6 flex items-center">
                      {errors.lastQulification && (
                        <InputInlineError
                          ErrorMsg={errors.lastQulification.message}
                        />
                      )}
                    </div>
                  </div>
                  <button
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[20px]"></span>
                  </button>
                </div>
              </div>
              {/* Institude name */}
              <div>
                <label
                  htmlFor="InstidudeName"
                  className="block mb-2 text-sm font-medium capitalize text-gray-900 "
                >
                  your Institude name
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-6.5 -translate-y-1/2 text-outline text-[20px]">
                    school
                  </span>
                  <input
                    className="w-full pl-10 pr-12 py-3 ml-1 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-1 font-body-md text-body-md text-on-surface"
                    id="InstidudeName"
                    placeholder="Enter Your Institude Name"
                    type="text"
                    name="institudeName"
                    {...register("institudeName", {
                      required: "Institude name is required.",
                    })}
                  />
                  <div className="error ab  h-6 flex items-center">
                    <div className="error ab  h-6  flex items-center">
                      {errors.institudeName && (
                        <InputInlineError
                          ErrorMsg={errors.institudeName.message}
                        />
                      )}
                    </div>
                  </div>
                  <button
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[20px]"></span>
                  </button>
                </div>
              </div>

              <SubmitBtn isSubmitting={isSubmitting} />

              <div className="relative flex items-center py-2">
                <div className="grow border-t"></div>
                <span className="shrink-0 mx-4 font-label-sm text-md uppercase tracking-wider">
                  Or
                </span>
                <div className="grow border-t"></div>
              </div>

              <p className="text-md text-center  text-on-background ">
                Already have an acount?{" "}
                <a
                  href="/login"
                  className="font-bold  text-blue-primary hover:underline "
                >
                  Login
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
