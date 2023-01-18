import React, { useState } from "react";
import PopupsContainer from "./PopupsContainer";
import DeleteButton from "../../assets/images/Del-button.svg";

const dummyData = [
  "https://www.amazon.com/s?k=amazom&adgrpid=85279052327&gclid=Cj0KC",
  "https://www.amazon.com/s?k=amazom&adgrpid=85279052327&gclid=Cj0KC",
  "https://www.amazon.com/s?k=amazom&adgrpid=85279052327&gclid=Cj0KC",
  "https://www.amazon.com/s?k=amazom&adgrpid=85279052327&gclid=Cj0KC",
  "https://www.amazon.com/s?k=amazom&adgrpid=85279052327&gclid=Cj0KC",
];

function ReferLink({id}: {id:string}) {
  const [links, setLinks] = useState(dummyData);
  const [newLink, setNewLink] = useState("")
  const deleteLink = (linkIndex: number) => {
    const newLinks = links.filter((link, index) => index !== linkIndex)
    setLinks(newLinks);
  }
  const addLink = (link: string) => {
    const newLinks = links;
    newLinks.push(link)
    setLinks(newLinks);
  }
  return (
    <PopupsContainer modalName="(Refer link) edit panel" id={id}>
      <div style={{}}>
        <h1 style={{ fontSize: "1.4rem" }} className="mt-5">
          Current Links
        </h1>
        <div
          style={{ height: "238px", overflowY: "auto" }}
          className="mt-2 border rounded p-3"
        >
          {links?.map((link, index) => (
            <RLink key={index} link={link} onDelete={() => deleteLink(index)}/>
          ))}
        </div>
        <h1 style={{ fontSize: "1.4rem" }} className="mt-4">
          Add new
        </h1>
        <input
            onChange={(e) => setNewLink(e.target.value)}
          style={{ height: "71px" }}
          className="mt-2 border rounded p-3 w-100"
          type="text"
          placeholder="Add refer link here / or re route the existing ones"
        >
      </input>
      <div className="mt-5 mb-3 d-flex flex-row justify-content-evenly" >
        <button className="btn btn-primary" style={{width: "131px", height: "48px", fontSize: "0.8rem"}}>Update</button>
        <button className="btn btn-primary" style={{width: "131px", height: "48px", fontSize: "0.8rem"}} onClick={() => addLink(newLink)}>Add</button>
        <button className="btn btn-primary" style={{width: "131px", height: "48px", fontSize: "0.8rem"}}>Draft</button>
      </div>
      </div>
    </PopupsContainer>
  );
}

export default ReferLink;

interface RLinkProps {
  link: string;
  onDelete: () => void
}

const RLink = ({ link, onDelete }: RLinkProps) => {
  return (
    <div className="d-flex flex-row justify-content-between align-items-center mb-3">
      <div
        style={{
          width: "14.57px",
          height: "14.57px",
          border: "2.14px solid #585858",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#585858",
            width: "8.57px",
            height: "8.57px",
            borderRadius: "50%",
          }}
        ></div>
      </div>
      <a className="w-75" style={{ overflowX: "hidden" }}>
        {link}
      </a>
      <button className="border-0 bg-none rounded" onClick={onDelete} style={{width: '40px'}}>
        <img src={DeleteButton} alt="" />
      </button>
    </div>
  );
};
