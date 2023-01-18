import React from 'react'
import { Link } from 'react-router-dom';
import ChainLink from '../svgs/ChainLink';
import PopupsContainer from './PopupsContainer';
import keyboard from "../../assets/images/keyboard.png";
import ratings from "../../assets/images/ratings.png";

interface ProductDetailProps {
    id: string;
}

function ProductDetail({id}: ProductDetailProps) {
  return (
    <PopupsContainer modalName="Product Detail" id={id}>
       
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-10 offset-1">
                        <div className="card bg-light">
                          <div className="card-body">
                            <div className="row">
                              <h5 className="mb-3">About the product</h5>
                              <div className="col-6">
                                <h4 className="mb-4">
                                  razor xf mechanical Keyboard
                                </h4>
                                <div>
                                  <h5>Details</h5>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Etiam eu turpis molestie,
                                    dictum est a, mattis tellus. Sed dignissim,
                                    metus nec fringilla accumsan, risus sem
                                    sollicitudin lacus, ut interdum tellus elit
                                    sed risus. Maecenas eget condimentum velit,
                                    sit amet feugiat lectus. Class aptent taciti
                                    sociosqu{" "}
                                  </p>
                                </div>
                                <div>
                                  <h5>Features</h5>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Etiam eu turpis molestie,
                                    dictum est a, mattis tellus. Sed dignissim,
                                    metus nec fringilla accumsan, risus sem
                                    sollicitudin lacus, ut interdum tellus elit
                                    sed risus. Maecenas eget condimentum velit,
                                    sit amet feugiat lectus. Class aptent taciti
                                    sociosqu{" "}
                                  </p>
                                </div>
                              </div>
                              <div className="col-6">
                                <img src={keyboard} alt="" />
                                <div className="mb-4">
                                  <h5 className="mb-2">Amazon short Link</h5>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur{" "}
                                  </p>
                                </div>
                                <div className="mb-4">
                                  <h5 className="mb-2">Ratings</h5>
                                  <img src={ratings} alt="" />
                                </div>
                                <div className="mb-4">
                                  <h5 className="mb-2">Tag/Link</h5>
                                  <p>
                                    <span>
                                      <ChainLink />
                                    </span>
                                    B099HP4D5Z
                                  </p>
                                </div>
                                <div className="mb-4">
                                  <h5 className="mb-2">Price</h5>
                                  <p>USD $258</p>
                                </div>
                              </div>
                              <div className="mt-4">
                                <Link to="" className="text-dark mt-4">
                                  See Reportings
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex mt-4 justify-content-end" style={{float: 'right'}}>
                          <button
                            className="btn btn-primary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                
           
    </PopupsContainer>
  )
}

export default ProductDetail