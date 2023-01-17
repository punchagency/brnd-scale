import React from "react";

interface PopupsContainerProps {
  modalName: string;
  children: React.ReactNode;
}

function PopupsContainer({ modalName, children }: PopupsContainerProps) {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
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
            <div className="modal-body bg-light">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupsContainer;
