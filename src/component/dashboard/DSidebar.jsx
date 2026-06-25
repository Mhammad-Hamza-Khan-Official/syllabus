import { NavLink } from "react-router-dom";

export default function DSidebar() {
  return (
    <div>
      <aside
        id="top-bar-sidebar"
        className="fixed top-0 left-0  bg-on-secondary   w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 z-50"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-neutral-primary-soft  flex flex-col justify-between  ">
          <div className="flex items-center ps-5.5 mt-4 mb-5 ">
            <span className="self-center   text-heading font-semibold whitespace-nowrap">
              <h1 className="text-3xl font-bold tracking-wider text-blue-primary">
                PrepMaster
              </h1>
              <p className="md tracking-wide">Learning Portal</p>
            </span>
          </div>
          <ul className="space-y-4 ml-3 font-medium">
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "bg-surface-container flex items-center px-4 py-2 transition-all  text-lg my-2 rounded-lg   text-blue-primary border-r-5 border-blue-primary"
                    : "flex items-center px-4 py-2 transition-all  text-lg my-2 rounded-lg   text-black hover:bg-surface-container border-r-5 border-transparent hover:border-blue-primary"
                }
              >
                <span class="material-symbols-outlined " data-icon="dashboard">
                  dashboard
                </span>
                <span className="ms-3">Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categories"
                className={({ isActive }) =>
                  isActive
                    ? "bg-surface-container flex items-center px-4 py-2 transition-all  text-lg my-2 rounded-lg   text-blue-primary border-r-5 border-blue-primary"
                    : "flex items-center px-4 py-2 transition-all  text-lg my-2 rounded-lg   text-black hover:bg-surface-container border-r-5 border-transparent hover:border-blue-primary"
                }
              >
                <span class="material-symbols-outlined" data-icon="edit_note">
                  edit_note
                </span>
                <span className="flex-1 ms-3 whitespace-nowrap capitalize">categories</span>
                <span className="bg-neutral-secondary-medium border border-default-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded-sm">
                  Pro
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/individualQuiz"
                className="flex items-center px-4 py-2 transition-all  text-lg my-2  hover:bg-surface-container brightness-90 rounded-lg border-r-5 border-transparent hover:border-blue-primary"
              >
                <span class="material-symbols-outlined" data-icon="quiz">
                  quiz
                </span>
                <span className="flex-1 ms-3 whitespace-nowrap">Mock Test</span>
                <span className="inline-flex items-center justify-center w-4.5 h-4.5 ms-2 text-xs font-medium text-fg-danger-strong bg-danger-soft border border-danger-subtle rounded-full">
                  2
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/leaderboard"
                className={({ isActive }) =>
                  isActive
                    ? "bg-surface-container flex items-center px-4 py-2 transition-all  text-lg my-2 rounded-lg   text-blue-primary border-r-5 border-blue-primary"
                    : "flex items-center px-4 py-2 transition-all  text-lg my-2 rounded-lg   text-black hover:bg-surface-container border-r-5 border-transparent hover:border-blue-primary"
                }
              >
                <span
                  class="material-symbols-outlined "
                  data-icon="leaderboard"
                >
                  leaderboard
                </span>
                <span className="flex-1 ms-3 whitespace-nowrap">Analytics</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/settings"
                className={({ isActive }) =>
                  isActive
                    ? "bg-surface-container flex items-center px-4 py-2 transition-all  text-lg my-2 rounded-lg   text-blue-primary border-r-5 border-blue-primary"
                    : "flex items-center px-4 py-2 transition-all  text-lg my-2 rounded-lg   text-black hover:bg-surface-container pr-3 border-r-5 border-transparent hover:border-blue-primary"
                }
              >
                <span class="material-symbols-outlined" data-icon="settings">
                  settings
                </span>
                <span className="flex-1 ms-3 whitespace-nowrap">Setting</span>
              </NavLink>
            </li>
          </ul>
          <div class=" px-4 pt-8 border-t border-outline-variant mt-auto">
            <div class="flex items-center gap-3">
              <img
                alt="User profile"
                class="w-10 h-10 rounded-full object-cover"
                data-alt="A professional headshot of a young male student in a bright educational setting. He is wearing a clean navy blue polo shirt and has a friendly, confident expression. The lighting is soft and natural, emphasizing a high-key modern corporate aesthetic with a blurred academic library background in cool tones."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNLy9gK90N9x0XsZqhCiGwk6BCkhQ7fnhZ0Zwe9s84QtXdnpvOLiaVRG9msZDdRKQr0CijaIkg-lmUSdrJX1cKJPLCH3GHAckdJCpzJ4AB_bhYorYcqtAzsOMukXk4kkkke7v5ON4sfCRHSkWexs8MFN5HDBJpfgVZrg1uSY-x3uvHCPrr2taB8WML1Gs7CtJT8Nl4rMIJSoODFltHjc4EzNxFSrQavshYhm77sOsFTggS6QnYMmfdCoJwFpGoWWa1nmLVm_wxtP5b"
              />
              <div>
                <p class="text-label-md font-label-md font-bold">Ahmed</p>
                <p class="text-label-sm font-label-sm text-outline">
                  Premium Member
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
