import React from "react";
import handM from "../../../assets/images/HandM-big.png";

function About() {
  return (
    <>
      {/* <div className="col-12">
        <div className="card bg-light">
          <div className="card-body">
            <div className="row">
              <div className="col-6 pt-5">
                <div className="">
                  <h5>Brand Name</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringilla accumsan, risus sem
                    sollicitudin lacus, ut interdum tellus elit sed risus.
                    Maecenas eget condimentum velit, sit amet feugiat lectus.
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Praesent auctor purus luctus
                    enim egestas, ac scelerisque ante pulvinar.
                  </p>
                </div>
                <div className="">
                  <h5>Category</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringilla accumsan, risus sem
                    sollicitudin lacus, ut interdum tellus elit sed risus.
                    Maecenas eget condimentum velit, sit amet feugiat lectus.
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Praesent auctor purus luctus
                    enim egestas, ac scelerisque ante pulvinar.
                  </p>
                </div>
                <div className="">
                  <h5>History</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringilla accumsan, risus sem
                    sollicitudin lacus, ut interdum tellus elit sed risus.
                    Maecenas eget condimentum velit, sit amet feugiat lectus.
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Praesent auctor purus luctus
                    enim egestas, ac scelerisque ante pulvinar.
                  </p>
                </div>
                <div className="">
                  <h5>Lorem ipsum </h5>
                  <p>www.loremipsum.com</p>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex">
                  <div
                    style={{
                      width: "200px",
                      height: "200px",
                      overflow: "hidden",
                    }}
                  >
                    <img src={handM} alt="Brand Image" className="img" />
                  </div>
                  <div className="d-flex flex-column justify-content-around my-4 ps-2">
                    <p>Total products</p>
                    <p>Total Sales (this month)</p>
                  </div>
                </div>
                <div className="">
                  <h5>About products</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringilla accumsan, risus sem
                    sollicitudin lacus, ut interdum tellus elit sed risus.
                    Maecenas eget condimentum velit, sit amet feugiat lectus.
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Praesent auctor purus luctus
                    enim egestas, ac scelerisque ante pulvinar.
                  </p>
                </div>
                <div className="">
                  <h5>Brand Vision</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringi
                  </p>
                </div>
                <div className="">
                  <h5>Social Links</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div
        className="modal fade"
        id="aboutBrandModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header bg-dark text-white">
              <h1 className="modal-title fs-5 ms-3" id="exampleModalLabel">
                BRNDScale
              </h1>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <div className="card bg-light">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-6 pt-5">
                            <div className="">
                              <h5>Brand Name</h5>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Etiam eu turpis molestie,
                                dictum est a, mattis tellus. Sed dignissim,
                                metus nec fringilla accumsan, risus sem
                                sollicitudin lacus, ut interdum tellus elit sed
                                risus. Maecenas eget condimentum velit, sit amet
                                feugiat lectus. Class aptent taciti sociosqu ad
                                litora torquent per conubia nostra, per inceptos
                                himenaeos. Praesent auctor purus luctus enim
                                egestas, ac scelerisque ante pulvinar.
                              </p>
                            </div>
                            <div className="">
                              <h5>Category</h5>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Etiam eu turpis molestie,
                                dictum est a, mattis tellus. Sed dignissim,
                                metus nec fringilla accumsan, risus sem
                                sollicitudin lacus, ut interdum tellus elit sed
                                risus. Maecenas eget condimentum velit, sit amet
                                feugiat lectus. Class aptent taciti sociosqu ad
                                litora torquent per conubia nostra, per inceptos
                                himenaeos. Praesent auctor purus luctus enim
                                egestas, ac scelerisque ante pulvinar.
                              </p>
                            </div>
                            <div className="">
                              <h5>History</h5>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Etiam eu turpis molestie,
                                dictum est a, mattis tellus. Sed dignissim,
                                metus nec fringilla accumsan, risus sem
                                sollicitudin lacus, ut interdum tellus elit sed
                                risus. Maecenas eget condimentum velit, sit amet
                                feugiat lectus. Class aptent taciti sociosqu ad
                                litora torquent per conubia nostra, per inceptos
                                himenaeos. Praesent auctor purus luctus enim
                                egestas, ac scelerisque ante pulvinar.
                              </p>
                            </div>
                            <div className="">
                              <h5>Lorem ipsum </h5>
                              <p>www.loremipsum.com</p>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="d-flex">
                              <div
                                style={{
                                  width: "200px",
                                  height: "200px",
                                  overflow: "hidden",
                                }}
                              >
                                <img
                                  src={handM}
                                  alt="Brand Image"
                                  className="img"
                                />
                              </div>
                              <div className="d-flex flex-column justify-content-around my-4 ps-2">
                                <p>Total products</p>
                                <p>Total Sales (this month)</p>
                              </div>
                            </div>
                            <div className="">
                              <h5>About products</h5>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Etiam eu turpis molestie,
                                dictum est a, mattis tellus. Sed dignissim,
                                metus nec fringilla accumsan, risus sem
                                sollicitudin lacus, ut interdum tellus elit sed
                                risus. Maecenas eget condimentum velit, sit amet
                                feugiat lectus. Class aptent taciti sociosqu ad
                                litora torquent per conubia nostra, per inceptos
                                himenaeos. Praesent auctor purus luctus enim
                                egestas, ac scelerisque ante pulvinar.
                              </p>
                            </div>
                            <div className="">
                              <h5>Brand Vision</h5>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Etiam eu turpis molestie,
                                dictum est a, mattis tellus. Sed dignissim,
                                metus nec fringi
                              </p>
                            </div>
                            <div className="">
                              <h5>Social Links</h5>
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
      </div>
    </>
  );
}

export default About;
