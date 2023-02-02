export const  handleCheck = (id: any, value: boolean, setTableData: (data:any)=>void) => {
    setTableData((prev:any) =>
      prev.map((row:any) => {
        return row.id === id ? { ...row, checked: value } : { ...row };
      })
    );
  };

export  const checkAll = (value: boolean, setTableData: (data:any)=>void) => {
    setTableData((prev:any) =>
      prev.map((row:any) => {
        return { ...row, checked: value };
      })
    );
  };