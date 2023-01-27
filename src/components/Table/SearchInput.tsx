import React from "react";
import Search from "../svgs/Search";

const SearchInput = ({value, onChangeFunc, placeholder=''}:any) => {
  return (
    <div className="input-group flex-nowrap my-auto">
      <input
        type="text"
        className="form-control"
        placeholder=""
        value={value}
        onChange={(e) => {
          onChangeFunc(e.target.value);
        }}
        aria-label=""
        aria-describedby="addon-wrapping"
      />
      <span className="input-group-text bg-white border" id="addon-wrapping">
        <Search color={"#00000"} />
      </span>
    </div>
  );
};

export default SearchInput;
