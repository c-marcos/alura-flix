import { ErrorMessage, Field, useFormikContext } from "formik";
import { Label } from "./Label";
import styled from "@emotion/styled";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

interface TextareaProps {
   name: string;
   placeholder?: string;
}

export const Textarea = ({
   name,
   placeholder,
   ...rest
}: TextareaProps) => {
   const { touched, errors } = useFormikContext<Record<string, any>>();
   let color = touched[name] && errors[name] ? '--color-error' : undefined;
   color = touched[name] && !errors[name] ? '--color-success' : color;
   const label = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()

   return (
      <Label borderColor={color}>
         {label}
         <Field
            as="textarea"
            name={name}
            placeholder={placeholder}
            className='textarea'
            {...rest}
         />
         <ErrorMessage name={name} component="div" className="error" />
         <CotainetIcons>
            {touched[name] && !errors[name] && <FaCheckCircle color="green" />}
            {touched[name] && errors[name] && <FaTimesCircle color="red" />}
         </CotainetIcons>
      </Label>
   );
};


const CotainetIcons = styled.div`
   position: absolute;
   top: 56px;
   right: 15px;
`;