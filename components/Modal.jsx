import React from "react";

function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  const downloadFile = () => {
    const filename = "myCv(uche-peter-chidubem).pdf"; // Specify your custom filename here
    const fileUrl =
      "https://my-potfolio-kappa.vercel.app/assets/myCVUpdated.pdf"; // URL to the PDF file on your website

    const anchorElement = document.createElement("a");
    anchorElement.href = fileUrl;
    anchorElement.download = filename;
    anchorElement.click();
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="hover:scale-90 ease-in duration-300  relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-md font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-purple border-1.5 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none "
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-blue rounded-md group-hover:bg-opacity-0 ">
          Download CV
        </span>
      </button>
      {showModal ? (
        <>
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>{" "}
              </div>
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <div
                className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <button onClick={() => setShowModal(false)} type="button">
                      <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <svg
                          className="h-6 w-6 text-red-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    </button>

                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3
                        className="text-lg leading-6 font-medium text-gray-900"
                        id="modal-headline"
                      >
                        Download CV
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          please confirm that you want to download CV
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse mod:text-center ">
                  <button onClick={downloadFile}>
                    <a className="w-full px-6 py-2 mt-3 text-cente text-white bg-indigo-900 rounded-md lg:ml-5  ">
                      Continue Download
                    </a>
                  </button>
                  <button
                    onClick={() => setShowModal(false)}
                    type="button"
                    className="mt-5 mr-5 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Modal;
