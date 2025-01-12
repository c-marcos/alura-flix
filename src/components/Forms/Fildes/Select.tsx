import { ErrorMessage, Field, useFormikContext } from "formik";
import { Label } from "./Label";
import { FaCheckCircle, FaChevronDown, FaTimesCircle } from "react-icons/fa";
import styled from "@emotion/styled";


type Option = {
   value: string ;
   label: string;
   disabled?: boolean;
};

type SelectProps = {
   label: string;
   name: string;
   options: Option[];
}; 

type Props = SelectProps & React.SelectHTMLAttributes<HTMLSelectElement>;

export const Select = ({ label, name, options, ...rest }: Props) => {
   const { touched, errors } = useFormikContext<Record<string, any>>();
   let color = touched[name] && errors[name] ? '--color-error' : undefined;
   color = touched[name] && !errors[name] ? '--color-success' : color;

   return (
      <Label borderColor={color}>
         {label}
         <Field as="select" name={name} className="select" {...rest}>
         {options.map((option) => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
               {option.label}
            </option>
         ))}
         </Field>
         <div className="select-icon">
            <FaChevronDown size={20} color="var(--texte-gray)" />
         </div>
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