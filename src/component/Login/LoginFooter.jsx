export default function LoginFooter() {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-neutral-primary-soft rounded-base shadow-xs  mx-4">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-body sm:text-center">
            © 2026 MUETPrep Education. All rights reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-body gap-3 sm:mt-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                {" "}
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Help Center
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
