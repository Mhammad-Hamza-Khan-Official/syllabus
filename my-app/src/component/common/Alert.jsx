
export default function Alert() {
  return (
    <>
       <div
        className="fixed top-2 left-[30%] bg-error-container flex sm:items-center p-4 text-sm text-heading bg-neutral-secondary-medium border-t-4 border-default-medium"
        role="alert"
      >
        <svg
          className="w-4 h-4 shrink-0 mt-0.5 md:mt-0"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <span className="sr-only">Info</span>
        <div className="ms-2 text-sm ">
          A simple dark alert with an{" "}
          <a href="#" className="font-medium underline hover:no-underline">
            example link
          </a>
          . Give it a click if you like.
        </div>
        <button
          type="button"
          className="ms-auto -mx-1.5 -my-1.5 rounded focus:ring-2 focus:ring-neutral-tertiary p-1.5 hover:bg-neutral-tertiary-medium inline-flex items-center justify-center h-8 w-8 shrink-0"
          data-dismiss-target="#alert-border-5"
          aria-label="Close"
        >
          <span className="sr-only">Dismiss</span>
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18 17.94 6M18 18 6.06 6"
            />
          </svg>
        </button>
      </div>
    </>
  )
}
