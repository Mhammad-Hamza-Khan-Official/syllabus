

export default function Footer() {
  return (
    <footer  className="bg-on-background flex justify-center w-screen">
      

<div className=" text-on-secondary md:w-container-max px-8">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-12">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center text-xl  text-blue-primary  font-bold">
                  MUETPre
              </a>
              <p className="text-surface-variant/80  text-md mt-2 md:w-[70%]">Premium educational partner for Mehran University entrance preparation.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2 md:grid-cols-3">
              <div>
                  <h2 className="mb-3  font-semibold text-sm uppercase text-blue-primary">Platform</h2>
                  <ul className="text-body font-medium">
                      <li className="mb-3">
                          <a href="/" className="hover:text-surface text-surface-variant/80 text-sm">Mock Test</a>
                      </li>
                      <li className="mb-3">
                          <a href="/" className="hover:text-surface text-surface-variant/80 text-sm">Subjects</a>
                      </li>
                      <li className="mb-3">
                          <a href="/" className="hover:text-surface text-surface-variant/80 text-sm">Pricing</a>
                      </li>
 
                  </ul>
              </div>
              <div>
                  <h2 className="mb-3 text-sm font-semibold text-heading uppercase text-blue-primary">Company</h2>
                  <ul className="text-body font-medium">
                      <li className="mb-3">
                          <a href="/" className="hover:text-surface text-surface-variant/80 text-sm">About Us</a>
                      </li>
                      <li>
                          <a href="/" className="hover:text-surface text-surface-variant/80 text-sm">Careers</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-3 text-sm font-semibold text-heading uppercase text-blue-primary">Legal</h2>
                  <ul className="text-body font-medium">
                      <li className="mb-3">
                          <a href="/" className="hover:text-surface text-surface-variant/80 text-sm">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="/" className="hover:text-surface text-surface-variant/80 text-sm">Terms and Service</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-default text-on-secondary-container sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-body sm:text-center text-surface-variant/90">© 2023 <a href="https://flowbite.com/" className="hover:underline  text-sm">2024 MUETPrep Education. All rights reserved.</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="/" className="text-body hover:text-heading">
                <span className="material-symbols-outlined hover:text-blue-primary w-5 h-5">home</span>
                <span className="sr-only">Facebook page</span>
            </a>

          </div>
      </div>
    </div>
</div>

    </footer>
  )
}
