import React, { useEffect, useState } from "react";
import CalendarWrapper from "../components/Calendar";
import ActiveIcon from "../components/svgs/ActiveIcon";
import DeleteIcon from "../components/svgs/DeleteIcon";
import Funnel from "../components/svgs/Funnel";
import ListIcon from "../components/svgs/ListIcon";
import Table from "../components/Table";
import Button from "../components/Table/Button";
import Dropdown from "../components/Table/Dropdown";
import SearchInput from "../components/Table/SearchInput";
import TableDropdown from "../components/Table/TableDropdown";
import TableFooter from "../components/Table/TableFooter";
import TableToolbar from "../components/Table/TableToolbar";

import { agenciesBrand } from "../types";

const headers = [
  "Brand Name",
  "Campaign Name",
  "Tag/Key Link",
  "Country",
  "Category",
  "Store",
  "Status",
  "Growth",
  "Commissions Officer",
  "Conversions Rate",
  "Total Products",
  "Permissions",
];

const displayLabels = [
  "brand_name",
  "campaign_name",
  "tag_keylink",
  "country",
  "category",
  "store",
  "status",
  "growth",
  "commission_offer",
  "conversion_rate",
  "total_product",
  "permissions",
];

function BrandsManage() {
  const [tableData, setTableData] = useState<agenciesBrand[]>([]);

  const [numOfRows, setNumOfRows] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [componentDate, setComponentDate] = useState<
    string | { from: string; to: string }
  >({ from: "", to: "" });
  const [searchString, setSearchString] = useState("");
  const [numOfPages, setNumOfPages] = useState(1);
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setCurrentPage(1);
  }, [numOfRows]);

  const handleDelete = () => {
    let ids = tableData.filter((row) => row.checked === true);
    // console.log(ids);
    var url = new URL(process.env.REACT_APP_BASE_URL+"agencies/brands");
    fetch(url, {
      method: "DELETE",
      mode: "cors",
      body: JSON.stringify({ ids: ids }),
    }).then(async (response) => {
      let res = await response.json();//console.log(res)

      if (res.success) {
        setSearchString(""); //Trigger data refresh
      } else {
        //Show error message
      }
    });
  };

  const updatePermission = (id:number)=>{alert(id)
    let updates = tableData.filter((row:any)=>{
      if(row.id === id){
        return {...row, permissions: ""}
      }
    })
    var url = new URL(
      process.env.REACT_APP_BASE_URL+"agencies/brands?"
    );
    fetch(url, { mode: "cors", method: 'PUT' }).then(async (response) => {
      let res = await response.json();
      if (res.success) {
        setSearchString(""); //Trigger data refresh
      } else {
        //Show error message
      }
    })
  }

  useEffect(() => {
    // console.log(componentDate);

    const searchParams = new URLSearchParams();
    typeof componentDate == "object" &&
      componentDate.from != "" &&
      searchParams.append(
        "date_from",
        typeof componentDate == "object" ? componentDate.from : ""
      );
    typeof componentDate == "object" &&
      componentDate.to != "" &&
      searchParams.append(
        "date_to",
        typeof componentDate == "object" ? componentDate.to : ""
      );
    searchString && searchParams.append("search", searchString);
    var url = new URL(
      process.env.REACT_APP_BASE_URL+"agencies/brands?" + searchParams.toString()
    );

    // console.log(url);

    fetch(url, { mode: "cors" }).then(async (response) => {
      let res = await response.json();

      setTableData(
        res.data.data.map((row: any) => {
          return {
            ...row,
            status: <div className="d-flex justify-content-center">
            <ActiveIcon color={row.status ? "#65DD2C" : "#CB6862"} />
          </div>,
            permissions: (//What are the options for permissions
              <button onClick={()=>updatePermission(row.id)} className="btn btn-danger btn-sm">{"action"}</button>
            ),
            checked: false,
          };
        })
      );
      setTotal(res.data.total)
    });
  }, [componentDate, searchString]);

  return (
    <div className="row pt-3 ps-2 pe-5">
      <div className="col-12 mt-3 d-flex justify-content-between">
        <h4>See your partners</h4>
        <button className="btn btn-primary btn-sm">Connect</button>
      </div>
      <div className="col-12 mt-4 d-flex">
        <button className="btn btn-primary btn-lg w-25 me-2">Brands</button>
      </div>
      <div className="col-12 mt-4">
        <div className="card d-flex p-2">
          <div className="row">
            <span className="col d-inline d-flex align-items-center ">
              <ListIcon /> <span className="fs-5 ms-2">List of brands</span>
            </span>
          </div>
        </div>
      </div>
      <div className="col-12">
        <Table
          tableData={tableData}
          displayLabels={displayLabels}
          headers={headers}
          tableWidth={"112%"}
          numOfPages={numOfPages}
          setNumOfPages={setNumOfPages}
          numOfRows={numOfRows}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setTableData={setTableData}
          toolbar={
            <TableToolbar>
              <div className="col-12 col-md-6  d-flex ">
                <TableDropdown
                  value={numOfRows}
                  setValue={setNumOfRows}
                  width={"29%"}
                  data={[
                    { title: 10, value: 10 },
                    { title: 20, value: 20 },
                  ]}
                />
                <div className="col-5 d-flex align-items-center">
                  <div className="col-12 d-flex align-items-center">
                    <div className="card p-2 px-auto border-0">
                      <CalendarWrapper
                        setComponentDate={setComponentDate}
                        format={2}
                      />
                    </div>
                    <div className="ms-2">
                      <Button
                        bootstrapClass="btn btn-sm"
                        content={<DeleteIcon />}
                        clickFunc={handleDelete}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 d-flex align-items-center justify-content-end">
                <div className="col-5">
                  <SearchInput
                    value={searchString}
                    onChangeFunc={(value: string) => {
                      setSearchString(value);
                      setCurrentPage(1);
                    }}
                  />
                </div>
                <div className="col-3 ms-3">
                  <Dropdown
                    width="90%"
                    data={[
                      { title: "Export", value: "" },
                      { title: 10, value: 10 },
                    ]}
                    value=""
                    setValue={() => {}}
                  />
                </div>
                <Button
                  bootstrapClass="btn btn-white "
                  content={
                    <>
                      Filter
                      <span className="ms-1">
                        <Funnel />
                      </span>
                    </>
                  }
                />
              </div>
            </TableToolbar>
          }
          footer={
            <TableFooter
              totalData={total}
              rowsPerPage={numOfRows}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          }
        />
      </div>
    </div>
  );
}

export default BrandsManage;
