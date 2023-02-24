import React, { useEffect, useState } from "react";
import BrandsImage from "../../assets/images/images.svg";
import MarketBtn from "../../assets/images/market-btn.svg";
import LinkSimpleBreak from "../../assets/images/LinkSimpleBreak.svg";
import LinkIcon from "../../assets/images/Link.svg";
import Table from "../../components/Table";
import TableFooter from "../../components/Table/TableFooter";

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
        <img style={{width: '50px'}} src={BrandsImage} alt="" />
      </div>
    ),
    promotion: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={MarketBtn} alt="" />
      </div>
    ),
    offer_name: (
      <div>
        <span className="pe-2">Xetrusion bar</span>
        <img src={LinkSimpleBreak} alt="" />
      </div>
    ),
    agency: "Wetheweb.20",
    prices: "$255.89",
    status: <span className="text-success">Enabled</span>,
    commission_offer: (
      <div>
        <span>12%</span>
        <span
          className="bg-info rounded p-1 ms-2 ps-2 pe-2"
          style={{ fontSize: "8px", height: "12px" }}
        >
          Pay per click
        </span>
      </div>
    ),
    tag_link: (
      <div>
        <img src={LinkIcon} alt="" />
        <span>B099HP4D5Z</span>
      </div>
    ),
    publishers: "Donna Slider",
    asin_id: "B099HP4D5Z",
    offer_status: (
      <span className="border rounded ps-2 pe-2 text-align-center">
        Accepted
      </span>
    ),
  },
  {
    id: 2,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={BrandsImage} alt="" />
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
    offer_name: (
      <div>
        <span className="pe-2">Xetrusion bar</span>
        <img src={LinkSimpleBreak} alt="" />
      </div>
    ),
    agency: "Wetheweb.20",
    prices: "$255.89",
    status: <span className="text-success">Enabled</span>,
    commission_offer: (
      <div>
        <span>12%</span>
        <span
          className="bg-info rounded p-1 ms-2 ps-2 pe-2"
          style={{ fontSize: "8px", height: "12px" }}
        >
          Pay per click
        </span>
      </div>
    ),
    tag_link: (
      <div>
        <img src={LinkIcon} alt="" />
        <span>B099HP4D5Z</span>
      </div>
    ),
    publishers: "Donna Slider",
    asin_id: "B099HP4D5Z",
    offer_status: (
      <span className="border rounded ps-2 pe-2 text-align-center">
        Accepted
      </span>
    ),
  },
  {
    id: 3,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={BrandsImage} alt="" />
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
    offer_name: (
      <div>
        <span className="pe-2">Xetrusion bar</span>
        <img src={LinkSimpleBreak} alt="" />
      </div>
    ),
    agency: "Wetheweb.20",
    prices: "$255.89",
    status: <span className="text-success">Enabled</span>,
    commission_offer: (
      <div>
        <span>12%</span>
        <span
          className="bg-info rounded p-1 ms-2 ps-2 pe-2"
          style={{ fontSize: "8px", height: "12px" }}
        >
          Pay per click
        </span>
      </div>
    ),
    tag_link: (
      <div>
        <img src={LinkIcon} alt="" />
        <span>B099HP4D5Z</span>
      </div>
    ),
    publishers: "Donna Slider",
    asin_id: "B099HP4D5Z",
    offer_status: (
      <span className="border rounded ps-2 pe-2 text-align-center">
        Accepted
      </span>
    ),
  },
  {
    id: 4,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={BrandsImage} alt="" />
      </div>
    ),
    promotion: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={MarketBtn} alt="" />
      </div>
    ),
    offer_name: (
      <div>
        <span className="pe-2">Xetrusion bar</span>
        <img src={LinkSimpleBreak} alt="" />
      </div>
    ),
    agency: "Wetheweb.20",
    prices: "$255.89",
    status: <span className="text-success">Enabled</span>,
    commission_offer: (
      <div>
        <span>12%</span>
        <span
          className="bg-info rounded p-1 ms-2 ps-2 pe-2"
          style={{ fontSize: "8px", height: "12px" }}
        >
          Pay per click
        </span>
      </div>
    ),
    tag_link: (
      <div>
        <img src={LinkIcon} alt="" />
        <span>B099HP4D5Z</span>
      </div>
    ),
    publishers: "Donna Slider",
    asin_id: "B099HP4D5Z",
    offer_status: (
      <span className="border rounded ps-2 pe-2 text-align-center">
        Accepted
      </span>
    ),
  },
  {
    id: 5,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={BrandsImage} alt="" />
      </div>
    ),
    promotion: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={MarketBtn} alt="" />
      </div>
    ),
    offer_name: (
      <div>
        <span className="pe-2">Xetrusion bar</span>
        <img src={LinkSimpleBreak} alt="" />
      </div>
    ),
    agency: "Wetheweb.20",
    prices: "$255.89",
    status: <span className="text-success">Enabled</span>,
    commission_offer: (
      <div>
        <span>12%</span>
        <span
          className="bg-info rounded p-1 ms-2 ps-2 pe-2"
          style={{ fontSize: "8px", height: "12px" }}
        >
          Pay per click
        </span>
      </div>
    ),
    tag_link: (
      <div>
        <img src={LinkIcon} alt="" />
        <span>B099HP4D5Z</span>
      </div>
    ),
    publishers: "Donna Slider",
    asin_id: "B099HP4D5Z",
    offer_status: (
      <span className="border rounded ps-2 pe-2 text-align-center">
        Accepted
      </span>
    ),
  },
  {
    id: 6,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={BrandsImage} alt="" />
      </div>
    ),
    promotion: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={MarketBtn} alt="" />
      </div>
    ),
    offer_name: (
      <div>
        <span className="pe-2">Xetrusion bar</span>
        <img src={LinkSimpleBreak} alt="" />
      </div>
    ),
    agency: "Wetheweb.20",
    prices: "$255.89",
    status: <span className="text-success">Enabled</span>,
    commission_offer: (
      <div>
        <span>12%</span>
        <span
          className="bg-info rounded p-1 ms-2 ps-2 pe-2"
          style={{ fontSize: "8px", height: "12px" }}
        >
          Pay per click
        </span>
      </div>
    ),
    tag_link: (
      <div>
        <img src={LinkIcon} alt="" />
        <span>B099HP4D5Z</span>
      </div>
    ),
    publishers: "Donna Slider",
    asin_id: "B099HP4D5Z",
    offer_status: (
      <span className="border rounded ps-2 pe-2 text-align-center">
        Accepted
      </span>
    ),
  },
  {
    id: 7,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={BrandsImage} alt="" />
      </div>
    ),
    promotion: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={MarketBtn} alt="" />
      </div>
    ),
    offer_name: (
      <div>
        <span className="pe-2">Xetrusion bar</span>
        <img src={LinkSimpleBreak} alt="" />
      </div>
    ),
    agency: "Wetheweb.20",
    prices: "$255.89",
    status: <span className="text-success">Enabled</span>,
    commission_offer: (
      <div>
        <span>12%</span>
        <span
          className="bg-info rounded p-1 ms-2 ps-2 pe-2"
          style={{ fontSize: "8px", height: "12px" }}
        >
          Pay per click
        </span>
      </div>
    ),
    tag_link: (
      <div>
        <img src={LinkIcon} alt="" />
        <span>B099HP4D5Z</span>
      </div>
    ),
    publishers: "Donna Slider",
    asin_id: "B099HP4D5Z",
    offer_status: (
      <span className="border rounded ps-2 pe-2 text-align-center">
        Accepted
      </span>
    ),
  },
  {
    id: 8,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={BrandsImage} alt="" />
      </div>
    ),
    promotion: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={MarketBtn} alt="" />
      </div>
    ),
    offer_name: (
      <div>
        <span className="pe-2">Xetrusion bar</span>
        <img src={LinkSimpleBreak} alt="" />
      </div>
    ),
    agency: "Wetheweb.20",
    prices: "$255.89",
    status: <span className="text-success">Enabled</span>,
    commission_offer: (
      <div>
        <span>12%</span>
        <span
          className="bg-info rounded p-1 ms-2 ps-2 pe-2"
          style={{ fontSize: "8px", height: "12px" }}
        >
          Pay per click
        </span>
      </div>
    ),
    tag_link: (
      <div>
        <img src={LinkIcon} alt="" />
        <span>B099HP4D5Z</span>
      </div>
    ),
    publishers: "Donna Slider",
    asin_id: "B099HP4D5Z",
    offer_status: (
      <span className="border rounded ps-2 pe-2 text-align-center">
        Accepted
      </span>
    ),
  },
  {
    id: 9,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={BrandsImage} alt="" />
      </div>
    ),
    promotion: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={MarketBtn} alt="" />
      </div>
    ),
    offer_name: (
      <div>
        <span className="pe-2">Xetrusion bar</span>
        <img src={LinkSimpleBreak} alt="" />
      </div>
    ),
    agency: "Wetheweb.20",
    prices: "$255.89",
    status: <span className="text-success">Enabled</span>,
    commission_offer: (
      <div>
        <span>12%</span>
        <span
          className="bg-info rounded p-1 ms-2 ps-2 pe-2"
          style={{ fontSize: "8px", height: "12px" }}
        >
          Pay per click
        </span>
      </div>
    ),
    tag_link: (
      <div>
        <img src={LinkIcon} alt="" />
        <span>B099HP4D5Z</span>
      </div>
    ),
    publishers: "Donna Slider",
    asin_id: "B099HP4D5Z",
    offer_status: (
      <span className="border rounded ps-2 pe-2 text-align-center">
        Accepted
      </span>
    ),
  },
  {
    id: 10,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={BrandsImage} alt="" />
      </div>
    ),
    promotion: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={MarketBtn} alt="" />
      </div>
    ),
    offer_name: (
      <div>
        <span className="pe-2">Xetrusion bar</span>
        <img src={LinkSimpleBreak} alt="" />
      </div>
    ),
    agency: "Wetheweb.20",
    prices: "$255.89",
    status: <span className="text-success">Enabled</span>,
    commission_offer: (
      <div>
        <span>12%</span>
        <span
          className="bg-info rounded p-1 ms-2 ps-2 pe-2"
          style={{ fontSize: "8px", height: "12px" }}
        >
          Pay per click
        </span>
      </div>
    ),
    tag_link: (
      <div>
        <img src={LinkIcon} alt="" />
        <span>B099HP4D5Z</span>
      </div>
    ),
    publishers: "Donna Slider",
    asin_id: "B099HP4D5Z",
    offer_status: (
      <span className="border rounded ps-2 pe-2 text-align-center">
        Accepted
      </span>
    ),
  },
  {
    id: 11,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={BrandsImage} alt="" />
      </div>
    ),
    promotion: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={MarketBtn} alt="" />
      </div>
    ),
    offer_name: (
      <div>
        <span className="pe-2">Xetrusion bar</span>
        <img src={LinkSimpleBreak} alt="" />
      </div>
    ),
    agency: "Wetheweb.20",
    prices: "$255.89",
    status: <span className="text-success">Enabled</span>,
    commission_offer: (
      <div>
        <span>12%</span>
        <span
          className="bg-info rounded p-1 ms-2 ps-2 pe-2"
          style={{ fontSize: "8px", height: "12px" }}
        >
          Pay per click
        </span>
      </div>
    ),
    tag_link: (
      <div>
        <img src={LinkIcon} alt="" />
        <span>B099HP4D5Z</span>
      </div>
    ),
    publishers: "Donna Slider",
    asin_id: "B099HP4D5Z",
    offer_status: (
      <span className="border rounded ps-2 pe-2 text-align-center">
        Accepted
      </span>
    ),
  },
  {
    id: 12,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={BrandsImage} alt="" />
      </div>
    ),
    promotion: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={MarketBtn} alt="" />
      </div>
    ),
    offer_name: (
      <div>
        <span className="pe-2">Xetrusion bar</span>
        <img src={LinkSimpleBreak} alt="" />
      </div>
    ),
    agency: "Wetheweb.20",
    prices: "$255.89",
    status: <span className="text-success">Enabled</span>,
    commission_offer: (
      <div>
        <span>12%</span>
        <span
          className="bg-info rounded p-1 ms-2 ps-2 pe-2"
          style={{ fontSize: "8px", height: "12px" }}
        >
          Pay per click
        </span>
      </div>
    ),
    tag_link: (
      <div>
        <img src={LinkIcon} alt="" />
        <span>B099HP4D5Z</span>
      </div>
    ),
    publishers: "Donna Slider",
    asin_id: "B099HP4D5Z",
    offer_status: (
      <span className="border rounded ps-2 pe-2 text-align-center">
        Accepted
      </span>
    ),
  },
];

const displayLabels = [
  // "id",
  "image",
  "promotion",
  "offer_name",
  "agency",
  "prices",
  "status",
  "commission_offer",
  "tag_link",
  "publishers",
  "asin_id",
  "offer_status",
];

function BrandOffersTable() {
  const [tableData, setTableData] = useState(data);
  const [searchString, setSearchString] = useState("");
  const [total, setTotal] = useState(0)
  const filterData = (searchString: any) => {
    if (!searchString) return tableData;
    return tableData.filter((item: any) => {
      const itemProperties: Array<string> = Object.keys(item);
      return itemProperties
        .map((key: string) => {
          if (typeof item[key] === "string") {
            return item[key].includes(searchString);
          }
          return false;
        })
        .some((currentValue: boolean) => currentValue);
    });
  };
  const deleteRow = (id: number) => {
    setTableData((prev) => {
      return prev.filter((row) => row.id !== id);
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

  useEffect(() => {
    const searchParams = new URLSearchParams();

    searchString && searchParams.append("search", searchString);
    var url = new URL(
      process.env.REACT_APP_BASE_URL + "brands/offers" + searchParams.toString()
    );

    fetch(url, {
      mode: 'cors'
    }).then(async (response) => {
      let res = await response.json();
      setTableData(
        res.data.data.map((row: any) => {
          return {
            ...row,
            image: (
              <div
                className="d-flex justify-content-center"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <img style={{width: '100px'}} src={row.image} alt="" />
              </div>
            ),
            promotion: (
              <div
                className="d-flex justify-content-center"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <img src={MarketBtn} alt="" />
              </div>
            ),
            offer_name: (
              <div>
                <span className="pe-2">Xetrusion bar</span>
                <img src={LinkSimpleBreak} alt="" />
              </div>
            ),
            status: <span className="text-success">Enabled</span>,
            commission_offer: (
              <div>
                <span>12%</span>
                <span
                  className="bg-info rounded p-1 ms-2 ps-2 pe-2"
                  style={{ fontSize: "8px", height: "12px" }}
                >
                  Pay&nbsp;per&nbsp;click
                </span>
              </div>
            ),
            tag_link: (
              <div>
                <img src={LinkIcon} alt="" />
                <span>B099HP4D5Z</span>
              </div>
            ),
            offer_status: (
              <span className="border rounded ps-2 pe-2 text-align-center">
                Accepted
              </span>
            ),
          };
        })
      );
      setTotal(res.data.total)
    });
  }, [searchString]);

  const [numOfRows, setNumOfRows] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [componentDate, setComponentDate] = useState<
    string | { from: string; to: string }
  >({ from: "", to: "" });
  const [numOfPages, setNumOfPages] = useState(1);
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
      numOfPages={numOfPages}
      setNumOfPages={setNumOfPages}
      numOfRows={numOfRows}
      setNumOfRows={setNumOfRows}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      footer={
        <TableFooter
          totalData={total}
          rowsPerPage={numOfRows}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      }
    />
  );
}

export default BrandOffersTable;
