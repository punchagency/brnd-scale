import { useState } from "react";

interface FormErrorMessageProps {
    data?: any;
  }
  
 const FormErrorMessage = ({ data }: FormErrorMessageProps) => {
    const itemProperties: Array<string> =
      typeof data === "object" ? Object.keys(data) : [];
  
    return (
      <div className="alert alert-danger">
        <p>Something went wrong, please try again.</p>
        <ul>
          {itemProperties.map((key: string) => {
            if(key.includes('token') || key.includes('expire')) return null;
            return <li style={{ fontSize: "10px" }}>{data?.[key]}</li>;
          })}
        </ul>
      </div>
    );
  };
  
  export default FormErrorMessage