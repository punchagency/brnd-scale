import React, { useState } from "react";
import Offer from "./Offer";
import BackArrow from "../../../components/svgs/BackArrow";
import ForwardArrow from "../../../components/svgs/ForwardArrow";
import TermsAndConditions from "./TermsAndConditions";
import About from "./About";

const pages = [<Offer />, <TermsAndConditions />, <About />];

function Modal() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header bg-dark text-white">
            <h1 className="modal-title fs-5 ms-3" id="exampleModalLabel">
              BRNDCommerce
            </h1>
            <div className="me-4">
              <button
                className="btn btn-sm btn-dark border border-secondary text-white"
                onClick={() => setCurrentPage(0)}
              >
                Offer
              </button>
              <button
                className="btn btn-sm btn-dark border border-secondary text-white ms-2"
                onClick={() => setCurrentPage(1)}
              >
                Terms and Conditions
              </button>
              <button
                className="btn btn-sm btn-dark border border-secondary text-white ms-2"
                onClick={() => setCurrentPage(2)}
              >
                About
              </button>
            </div>
          </div>
          <div className="modal-body">
            <div className="container-fluid">
              <div className="row">
                <div className="col-10 offset-1">
                  <div className="card border-0">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12 d-flex justify-content-end mb-4">
                          <button
                            className="btn btn-sm btn-dark"
                            onClick={() =>
                              setCurrentPage((prev) =>
                                prev > 0 ? --prev : prev
                              )
                            }
                          >
                            <BackArrow />
                          </button>
                          <button
                            className="btn btn-sm btn-dark ms-2"
                            onClick={() =>
                              setCurrentPage((prev) =>
                                prev < 2 ? ++prev : prev
                              )
                            }
                          >
                            <ForwardArrow />
                          </button>
                        </div>
                        {pages[currentPage]}
                        <div className="col-12 d-flex mt-4 justify-content-end">
                          {currentPage < 2 ? (
                            <button
                              className="btn btn-primary btn-sm px-5"
                              data-bs-dismiss="modal"
                            >
                              Next
                            </button>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
