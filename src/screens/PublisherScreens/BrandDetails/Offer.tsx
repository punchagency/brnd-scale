import React from "react";
import BrandFeaturesCard from '../../../components/Cards/BrandFeaturesCard';

function Offer() {
  return (
    <>
      <div className="col-6">
        <div className="card">
          <div className="card-body bg-light">
            <div className="">
              <h5>Brand Name</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
              </p>
            </div>
            <div>
              <h5>Lorem ipsum </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu{" "}
              </p>
            </div>
            <div>
              <h5>Lorem ipsum </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6 d-flex flex-column">
        <div>
          <BrandFeaturesCard title="Commision" value="15%" />
        </div>
        <div className="mt-2">
          <BrandFeaturesCard title="Commision Type" value="Pay per click" />
        </div>
        <div className="mt-2">
          <BrandFeaturesCard title="Cycle Time" value="1 Month" />
        </div>
        <div className="mt-2">
          <BrandFeaturesCard title="Products" value="500" />
        </div>
      </div>
    </>
  );
}

export default Offer;
