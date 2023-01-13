import React, { useState } from "react";
import ActiveIcon from "../../components/svgs/ActiveIcon";
import jbl from "../../assets/images/jbl.png";
import versace from "../../assets/images/versace.png";
import handm from "../../assets/images/HandM.png";
import herbalLife from "../../assets/images/herbalLife.png";
import BrandsImage from "../../assets/images/images.svg";
import MarketBtn from "../../assets/images/market-btn.svg"
import LinkSimpleBreak from "../../assets/images/LinkSimpleBreak.svg"
import LinkIcon from "../../assets/images/Link.svg"
import keyboard from "../../assets/images/keyboard.png";
import ratings from "../../assets/images/ratings.png";
import Table from "../../components/Table";

const headers = [
  "Images",
  "Promotion",
  "Offer Name",
  "Agency",
  "Prices",
  "Status",
  "Commision Offer",
  "Tag/Link",
  "Publishers",
  "Asin ID",
  "Offer Status",
];

const data = [
  {
    id: 1,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={BrandsImage} />
      </div>
    ),
    promotion: (
        <div
          className="d-flex justify-content-center"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <img src={MarketBtn} />
        </div>
      ),
    offerName: (<div>
        <span className="pe-2">Xetrusion bar</span>
        <img src={LinkSimpleBreak} alt="" />
    </div>),
    agency: 'Wetheweb.20',
    prices: "$255.89",
    status: <span className="text-success">Enabled</span>,
    commissionOffer: <div>
        <span>12%</span>
        <span className="bg-info rounded p-1 ms-2 ps-2 pe-2" style={{fontSize: '8px', height: '12px'}}>Pay per click</span>
    </div>,
    tag: <div>
        <img src={LinkIcon} alt="" />
        <span>B099HP4D5Z</span>
    </div>,
    publishers: "Donna Slider",
    asinId: "B099HP4D5Z",
    offerStatus: <span className="border rounded ps-2 pe-2 text-align-center">Accepted</span>,
    
  },
  {
    id: 2,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={BrandsImage} />
      </div>
    ),
    promotion: (
        <div
          className="d-flex justify-content-center"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <img src={MarketBtn} />
        </div>
      ),
    offerName: (<div>
        <span className="pe-2">Xetrusion bar</span>
        <img src={LinkSimpleBreak} alt="" />
    </div>),
    agency: 'Wetheweb.20',
    prices: "$255.89",
    status: <span className="text-success">Enabled</span>,
    commissionOffer: <div>
        <span>12%</span>
        <span className="bg-info rounded p-1 ms-2 ps-2 pe-2" style={{fontSize: '8px', height: '12px'}}>Pay per click</span>
    </div>,
    tag: <div>
        <img src={LinkIcon} alt="" />
        <span>B099HP4D5Z</span>
    </div>,
    publishers: "Donna Slider",
    asinId: "B099HP4D5Z",
    offerStatus: <span className="border rounded ps-2 pe-2 text-align-center">Accepted</span>,
    
  },
  {
    id: 3,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={BrandsImage} />
      </div>
    ),
    promotion: (
        <div
          className="d-flex justify-content-center"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <img src={MarketBtn} />
        </div>
      ),
    offerName: (<div>
        <span className="pe-2">Xetrusion bar</span>
        <img src={LinkSimpleBreak} alt="" />
    </div>),
    agency: 'Wetheweb.20',
    prices: "$255.89",
    status: <span className="text-success">Enabled</span>,
    commissionOffer: <div>
        <span>12%</span>
        <span className="bg-info rounded p-1 ms-2 ps-2 pe-2" style={{fontSize: '8px', height: '12px'}}>Pay per click</span>
    </div>,
    tag: <div>
        <img src={LinkIcon} alt="" />
        <span>B099HP4D5Z</span>
    </div>,
    publishers: "Donna Slider",
    asinId: "B099HP4D5Z",
    offerStatus: <span className="border rounded ps-2 pe-2 text-align-center">Accepted</span>,
    
  },
  {
    id: 4,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={BrandsImage} />
      </div>
    ),
    promotion: (
        <div
          className="d-flex justify-content-center"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <img src={MarketBtn} />
        </div>
      ),
    offerName: (<div>
        <span className="pe-2">Xetrusion bar</span>
        <img src={LinkSimpleBreak} alt="" />
    </div>),
    agency: 'Wetheweb.20',
    prices: "$255.89",
    status: <span className="text-success">Enabled</span>,
    commissionOffer: <div>
        <span>12%</span>
        <span className="bg-info rounded p-1 ms-2 ps-2 pe-2" style={{fontSize: '8px', height: '12px'}}>Pay per click</span>
    </div>,
    tag: <div>
        <img src={LinkIcon} alt="" />
        <span>B099HP4D5Z</span>
    </div>,
    publishers: "Donna Slider",
    asinId: "B099HP4D5Z",
    offerStatus: <span className="border rounded ps-2 pe-2 text-align-center">Accepted</span>,
    
  },
  {
    id: 5,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={BrandsImage} />
      </div>
    ),
    promotion: (
        <div
          className="d-flex justify-content-center"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <img src={MarketBtn} />
        </div>
      ),
    offerName: (<div>
        <span className="pe-2">Xetrusion bar</span>
        <img src={LinkSimpleBreak} alt="" />
    </div>),
    agency: 'Wetheweb.20',
    prices: "$255.89",
    status: <span className="text-success">Enabled</span>,
    commissionOffer: <div>
        <span>12%</span>
        <span className="bg-info rounded p-1 ms-2 ps-2 pe-2" style={{fontSize: '8px', height: '12px'}}>Pay per click</span>
    </div>,
    tag: <div>
        <img src={LinkIcon} alt="" />
        <span>B099HP4D5Z</span>
    </div>,
    publishers: "Donna Slider",
    asinId: "B099HP4D5Z",
    offerStatus: <span className="border rounded ps-2 pe-2 text-align-center">Accepted</span>,
    
  },
  {
    id: 6,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={BrandsImage} />
      </div>
    ),
    promotion: (
        <div
          className="d-flex justify-content-center"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <img src={MarketBtn} />
        </div>
      ),
    offerName: (<div>
        <span className="pe-2">Xetrusion bar</span>
        <img src={LinkSimpleBreak} alt="" />
    </div>),
    agency: 'Wetheweb.20',
    prices: "$255.89",
    status: <span className="text-success">Enabled</span>,
    commissionOffer: <div>
        <span>12%</span>
        <span className="bg-info rounded p-1 ms-2 ps-2 pe-2" style={{fontSize: '8px', height: '12px'}}>Pay per click</span>
    </div>,
    tag: <div>
        <img src={LinkIcon} alt="" />
        <span>B099HP4D5Z</span>
    </div>,
    publishers: "Donna Slider",
    asinId: "B099HP4D5Z",
    offerStatus: <span className="border rounded ps-2 pe-2 text-align-center">Accepted</span>,
    
  },
  {
    id: 7,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={BrandsImage} />
      </div>
    ),
    promotion: (
        <div
          className="d-flex justify-content-center"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <img src={MarketBtn} />
        </div>
      ),
    offerName: (<div>
        <span className="pe-2">Xetrusion bar</span>
        <img src={LinkSimpleBreak} alt="" />
    </div>),
    agency: 'Wetheweb.20',
    prices: "$255.89",
    status: <span className="text-success">Enabled</span>,
    commissionOffer: <div>
        <span>12%</span>
        <span className="bg-info rounded p-1 ms-2 ps-2 pe-2" style={{fontSize: '8px', height: '12px'}}>Pay per click</span>
    </div>,
    tag: <div>
        <img src={LinkIcon} alt="" />
        <span>B099HP4D5Z</span>
    </div>,
    publishers: "Donna Slider",
    asinId: "B099HP4D5Z",
    offerStatus: <span className="border rounded ps-2 pe-2 text-align-center">Accepted</span>,
    
  },
  {
    id: 8,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={BrandsImage} />
      </div>
    ),
    promotion: (
        <div
          className="d-flex justify-content-center"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <img src={MarketBtn} />
        </div>
      ),
    offerName: (<div>
        <span className="pe-2">Xetrusion bar</span>
        <img src={LinkSimpleBreak} alt="" />
    </div>),
    agency: 'Wetheweb.20',
    prices: "$255.89",
    status: <span className="text-success">Enabled</span>,
    commissionOffer: <div>
        <span>12%</span>
        <span className="bg-info rounded p-1 ms-2 ps-2 pe-2" style={{fontSize: '8px', height: '12px'}}>Pay per click</span>
    </div>,
    tag: <div>
        <img src={LinkIcon} alt="" />
        <span>B099HP4D5Z</span>
    </div>,
    publishers: "Donna Slider",
    asinId: "B099HP4D5Z",
    offerStatus: <span className="border rounded ps-2 pe-2 text-align-center">Accepted</span>,
      },
  {
    id: 9,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={BrandsImage} />
      </div>
    ),
    promotion: (
        <div
          className="d-flex justify-content-center"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <img src={MarketBtn} />
        </div>
      ),
    offerName: (<div>
        <span className="pe-2">Xetrusion bar</span>
        <img src={LinkSimpleBreak} alt="" />
    </div>),
    agency: 'Wetheweb.20',
    prices: "$255.89",
    status: <span className="text-success">Enabled</span>,
    commissionOffer: <div>
        <span>12%</span>
        <span className="bg-info rounded p-1 ms-2 ps-2 pe-2" style={{fontSize: '8px', height: '12px'}}>Pay per click</span>
    </div>,
    tag: <div>
        <img src={LinkIcon} alt="" />
        <span>B099HP4D5Z</span>
    </div>,
    publishers: "Donna Slider",
    asinId: "B099HP4D5Z",
    offerStatus: <span className="border rounded ps-2 pe-2 text-align-center">Accepted</span>,
    
  },
  {
    id: 10,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={BrandsImage} />
      </div>
    ),
    promotion: (
        <div
          className="d-flex justify-content-center"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <img src={MarketBtn} />
        </div>
      ),
    offerName: (<div>
        <span className="pe-2">Xetrusion bar</span>
        <img src={LinkSimpleBreak} alt="" />
    </div>),
    agency: 'Wetheweb.20',
    prices: "$255.89",
    status: <span className="text-success">Enabled</span>,
    commissionOffer: <div>
        <span>12%</span>
        <span className="bg-info rounded p-1 ms-2 ps-2 pe-2" style={{fontSize: '8px', height: '12px'}}>Pay per click</span>
    </div>,
    tag: <div>
        <img src={LinkIcon} alt="" />
        <span>B099HP4D5Z</span>
    </div>,
    publishers: "Donna Slider",
    asinId: "B099HP4D5Z",
    offerStatus: <span className="border rounded ps-2 pe-2 text-align-center">Accepted</span>,
    
  },
  {
    id: 11,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={BrandsImage} />
      </div>
    ),
    promotion: (
        <div
          className="d-flex justify-content-center"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <img src={MarketBtn} />
        </div>
      ),
    offerName: (<div>
        <span className="pe-2">Xetrusion bar</span>
        <img src={LinkSimpleBreak} alt="" />
    </div>),
    agency: 'Wetheweb.20',
    prices: "$255.89",
    status: <span className="text-success">Enabled</span>,
    commissionOffer: <div>
        <span>12%</span>
        <span className="bg-info rounded p-1 ms-2 ps-2 pe-2" style={{fontSize: '8px', height: '12px'}}>Pay per click</span>
    </div>,
    tag: <div>
        <img src={LinkIcon} alt="" />
        <span>B099HP4D5Z</span>
    </div>,
    publishers: "Donna Slider",
    asinId: "B099HP4D5Z",
    offerStatus: <span className="border rounded ps-2 pe-2 text-align-center">Accepted</span>,
    
  },
  {
    id: 12,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={BrandsImage} />
      </div>
    ),
    promotion: (
        <div
          className="d-flex justify-content-center"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <img src={MarketBtn} />
        </div>
      ),
    offerName: (<div>
        <span className="pe-2">Xetrusion bar</span>
        <img src={LinkSimpleBreak} alt="" />
    </div>),
    agency: 'Wetheweb.20',
    prices: "$255.89",
    status: <span className="text-success">Enabled</span>,
    commissionOffer: <div>
        <span>12%</span>
        <span className="bg-info rounded p-1 ms-2 ps-2 pe-2" style={{fontSize: '8px', height: '12px'}}>Pay per click</span>
    </div>,
    tag: <div>
        <img src={LinkIcon} alt="" />
        <span>B099HP4D5Z</span>
    </div>,
    publishers: "Donna Slider",
    asinId: "B099HP4D5Z",
    offerStatus: <span className="border rounded ps-2 pe-2 text-align-center">Accepted</span>,
    
  },
];

const displayLabels = [
  // "id",
  "image",
  "promotion",
  "offerName",
  "agency",
  "prices",
  "status",
  "commissionOffer",
  "tag",
  "publishers",
  "asinId",
  "offerStatus",
];

function BrandOffersTable() {
  const [tableData, setTableData] = useState(data);
  const filterData = (searchString: any) => {
    if (!searchString) return tableData;
    return tableData.filter((item: any) => {
      return (
        item.offerStatus.toLowerCase().includes(searchString.toLowerCase()) ||
        item.offerName.toLowerCase().includes(searchString.toLowerCase()) ||
        item.agency.toLowerCase().includes(searchString.toLowerCase()) ||
        item.prices.toLowerCase().includes(searchString.toLowerCase()) ||
        item.status.toLowerCase().includes(searchString.toLowerCase()) ||
        item.commissionOffer.toLowerCase().includes(searchString.toLowerCase()) ||
        item.tag.toLowerCase().includes(searchString.toLowerCase()) ||
        item.publishers.toLowerCase().includes(searchString.toLowerCase()) ||
        item.asinId.toLowerCase().includes(searchString.toLowerCase())
      );
    });
  };
  const deleteRow = (id: number) => {
    setTableData((prev) => {
      return prev.filter((row) => row.id != id);
    });
  };

  const addRow = (row: any) => {
    setTableData((prev) => {
      return [...prev, { id: prev.length, ...row }];
    });
  };

  const editData = (data: any) => {
    // setTableData(prev=>{return prev.map()})
  };
  return (
    <Table
      tableData={tableData}
      displayLabels={displayLabels}
      headers={headers}
      tableWidth={"130%"}
      deleteRow={deleteRow}
      editData={editData}
      addRow={addRow}
      filterData={filterData}
    />
  );
}

export default BrandOffersTable;