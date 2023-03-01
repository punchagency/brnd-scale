
import { Field } from "formik";
interface FormikFieldInterface {
    touched: boolean | undefined;
    error: string | undefined;
    name: string;
    label: string;
    type?: string;
  }
  
  const FormikField = ({
    touched,
    error,
    name,
    label,
    type = "text",
  }: FormikFieldInterface) => {
    return (
      <div className="mb-3">
        <label htmlFor={name} className="form-label">
          {label}
        </label>
  
        <Field
          name={name}
          type={type}
          className="form-control"
          as={type === "textarea" ? "textarea" : null}
        />
        {error && touched ? (
          <div style={{ fontSize: "10px" }} className="text-danger">
            {error}
          </div>
        ) : null}
      </div>
    );
  };

  export default FormikField;