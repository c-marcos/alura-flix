import styled from "@emotion/styled";
import { ButtonDefault } from "../Butoons/ButoonDefault";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { useUpdateVideo } from "../../contexts/ContexUpdate";

type StyledProps = { type: "success" | "error" };
type AlertProps = { msg: string | null; close: () => void } & StyledProps;

export const AlertaDefault = ({ msg, type, close }: AlertProps) => {
  const update = useUpdateVideo();

  const icon =
    type === "success" ? (
      <FaCheckCircle size={64} />
    ) : (
      <FaTimesCircle size={64} />
    );

  const handleClose = () => {
    close();
    update.toogleUpdate();
  };

  return (
    <AlertaContainer type={type}>
      {icon}
      {msg}
      <ButtonDefault
        text="OK"
        w="100px"
        bgColor="transparent"
        onClick={handleClose}
      />
    </AlertaContainer>
  );
};

const AlertaContainer = styled.div<StyledProps>`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-light);
  font-size: 32px;
  font-weight: 500;
  gap: 32px;
  background-color: ${(props) =>
    props.type === "success" ? "var(--color-success)" : "var(--color-error)"};
`;
