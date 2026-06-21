import { useState } from "react";
import InputInlineError from "../common/InputInlineError";


export default function PasswordFeild({
    register,
    errors,
}) 
{

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

  return (
    <>
      <div className="relative">
                    <span className="material-symbols-outlined absolute left-3  -translate-y-1/2 top-6.5 text-outline text-[20px]">
                      lock
                    </span>
                    <input
                      className="w-full pl-10 pr-12 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-1 font-body-md text-body-md text-on-surface"
                      id="password"
                      placeholder={
                        isPasswordVisible.password ? "Password" : "********"
                      }
                      type={isPasswordVisible.password ? "text" : "password"}
                      name="password"
                      autoComplete="new-password"
                      {...register("password", {
                        required: "Password is required.",
                        validate: {
                          hasUppercase: (value) =>
                            /[A-Z]/.test(value) ||
                            "Must contain an uppercase letter",

                          hasNumber: (value) =>
                            /[0-9]/.test(value) || "Must contain a number",

                          hasSpecialChar: (value) =>
                            /[!@#$%^&*]/.test(value) ||
                            "Must contain a special character",
                        },
                      })}
                    />

                    <div className="error   h-6 flex items-center">
                      {errors.password && (
                        <InputInlineError ErrorMsg={errors.password.message} />
                      )}
                    </div>

                    <button
                      className="absolute right-3  -translate-y-1/2 text-outline hover:text-primary transition-colors cursor-pointer top-6.5"
                      onClick={() => togglePassword("password")}
                      type="button"
                    >
                      <span className="material-symbols-outlined visibleIcon">
                        {isPasswordVisible.password
                          ? "visibility"
                          : "visibility_off"}
                      </span>
                    </button>
                  </div>
    </>
  )
}
