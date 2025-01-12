import { ErrorMessage, Field, useFormikContext } from "formik";
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { Label } from "./Label";
import styled from "@emotion/styled";

interface InputProps {
   name: string;
   type: string;
   className: string;
   placeholder?: string;
}

export const Input = ({ name, type, className, placeholder, ...rest }: InputProps) => {
   const { touched, errors } = useFormikContext<Record<string, any>>();
   let color = touched[name] && errors[name] ? '--color-error' : undefined;
   color = touched[name] && !errors[name] ? '--color-success' : color;

   const label = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
   return (
      <Label borderColor={color} >
         {label}
         <Field name={name} type= {type} className={className} {...rest} 
            placeholder={placeholder}
         />
         <ErrorMessage name={name} component="div" className="error" />
         <CotainetIcons>
            {touched[name] && !errors[name] && <FaCheckCircle color="green" />}
            {touched[name] && errors[name] && <FaTimesCircle color="red" />}
         </CotainetIcons>
      </Label>
   );
}

const CotainetIcons = styled.div`
   position: absolute;
   top: 56px;
   right: 15px;
`;