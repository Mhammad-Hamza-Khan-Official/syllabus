import Loading from "./Loading";


export default function SubmitBtn({isSubmitting = false,type= "Registering"}) {
  return (
    <>
      <button
                type="submit"
                className={`${isSubmitting ? "bg-blue-primary/70 cursor-progress" : "bg-blue-primary cursor-pointer active:scale-95 focus:ring-blue-primary"}   w-full text-on-secondary   transition-all cursor-pointe   focus:ring-2 focus:outline-none  font-medium rounded-lg text-lg px-5 py-3 text-center  dark:hover:bg-primary-700 dark:focus:ring-primary-800 mt-3 `}
                disabled={isSubmitting}
              >
                <div className="">
                  <span className="mr-2">
                    {isSubmitting ? (
                      <Loading>
                        <p className="inline ml-2">{type}</p>
                      </Loading>
                    ) : (
                      type.endsWith("ing") ? type.replace("ing",'') : type
                    )}
                  </span>
                </div>
              </button>
    </>
  )
}
