import { useState } from "react";
import Navbar from "../common/Navbar";
import LoginSubFooter from "../common/LoginSubFooter";

export default function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    dropDown: "",
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <div className="">
        <Navbar position="static" />
      </div>

      <section className="bg-surface-container-highest pt-4">
        <div className="flex  flex-col items-center justify-center px-6 py-1 mx-auto  lg:py-0">
          <div
            className="w-full bg-on-secondary  flex items-center justify-center rounded-2xl shadow dark:border md:mt-0 
      sm:max-w-lg xl:p-0  "
          >
            <div className="w-full px-6 py-4 space-y-4 md:space-y-6 ">
              <div className="text-center flex flex-col items-center justify-center gap-4">
                <span className="p-4 mb-4 bg-blue-primary flex justify-center items-center w-12 h-12 rounded-lg">
                  <span className="material-symbols-outlined text-on-secondary hidden sm:inline-block">
                    school
                  </span>
                </span>
                <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Login to MUETPrep
                </h1>
                <p>Start your journey toward academic excellence.</p>
              </div>
              <form className="space-y-4 md:space-y-2 " action="">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your Full Name
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]"></span>
                    <input
                      className="w-full pl-10 pr-4 py-3 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-1 font-body-md text-body-md text-on-surface bg-surface-container-low"
                      id="name"
                      placeholder="Enter Your Name"
                      type="name"
                      value={formData.name}
                      onChange={handleChange}
                      name="name"
                    />
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
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">
                      mail
                    </span>
                    <input
                      className="w-full pl-10 pr-12 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-1 font-body-md text-body-md text-on-surface"
                      id="email"
                      placeholder="example.@example.com"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      name="email"
                    />
                    <button
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[20px]"></span>
                    </button>
                  </div>
                </div>

                {/* Password */}

                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-3">
                  <div className="">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Password
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">
                        lock
                      </span>
                      <input
                        className="w-full pl-10 pr-12 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-1 font-body-md text-body-md text-on-surface"
                        id="password"
                        placeholder="*********"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        name="password"
                      />
                      <button
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          visibility
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="">
                    <label
                      htmlFor="conformPassword"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Conform Password
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">
                        lock
                      </span>
                      <input
                        className="w-full pl-10 pr-12 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-1 font-body-md text-body-md text-on-surface"
                        id="conformPassword"
                        placeholder="*********"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        name="confirmPassword"
                      />
                      <button
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          visibility
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Dropdown */}
                <div>
                  <label
                    htmlFor="DropDown"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Goal University
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">
                      mail
                    </span>
                    <select
                      name="dropDown"
                      id="DropDown"
                      value={formData.dropDown}
                      onChange={handleChange}
                      className="w-full pl-10 pr-12 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-1 font-body-md text-body-md text-on-surface font-medium cursor-pointer"
                    >
                      <option value="" selected className="font-bold">
                        Select Your Goal University
                      </option>
                      <option value="NUST" selected className="font-medium ">
                        NUST
                      </option>
                      <option value="Mehran" selected className="font-medium">
                        Mehran
                      </option>
                      <option value="Fast" selected className="font-medium">
                        Fast
                      </option>
                      <option value="LUMS" selected className="font-medium">
                        LUMS
                      </option>
                    </select>
                    <button
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[20px]"></span>
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  onClick={onSubmit}
                  className="w-full text-on-secondary  active:scale-95 transition-all cursor-pointer bg-blue-primary focus:ring-2 focus:outline-none focus:ring-blue-primary font-medium rounded-lg text-lg px-5 py-3 text-center  dark:hover:bg-primary-700 dark:focus:ring-primary-800 mt-3 "
                >
                  Register
                </button>

                <div className="relative flex items-center py-2">
                  <div className="grow border-t"></div>
                  <span className="shrink-0 mx-4 font-label-sm text-md uppercase tracking-wider">
                    Or
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
        <LoginSubFooter />
      </section>
    </>
  );
}
