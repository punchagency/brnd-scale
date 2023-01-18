import React from "react";

interface PopupsContainerProps {
  modalName: string;
  children: React.ReactNode;
  id: string;
}

function PopupsContainer({ modalName, children, id }: PopupsContainerProps) {
  return (
    <div className="col-12">
      <div
        className="modal fade"
        id={id}
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div
              className="modal-header bg-dark d-flex flex-row"
              style={{ height: "60px", color: "white" }}
            >
              <h1
                style={{ fontSize: "1.3rem" }}
                className="modal-title fs-5"
                id="exampleModalLabel"
              >
                BRNDScale
              </h1>
              <span>{modalName}</span>
            </div>
            <div className="modal-body bg-light modal-xl">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupsContainer;
