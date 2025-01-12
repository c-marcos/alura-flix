import styled from "@emotion/styled";

interface LabelProps {
  borderColor?: string;
}


export const Label = styled.label<LabelProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 572px;
  font-weight: 600;
  font-size: 20px;
  color: var(--color-light);

  .textarea,
  .select,
  .input {
    background-color: transparent;
    border: 3px solid var(${props => props.borderColor || '--primary-color'});
    border-radius: 10px;
    height: 62px;
    color: var(--texte-gray);
    padding-left: 10px;
    font-weight: 400;
    appearance: none; /* Remove a seta padrão */
    -webkit-appearance: none; /* Para navegadores WebKit */
    -moz-appearance: none; /* Para navegadores Firefox */
    position: relative;
  }

  .textarea {
    padding: 10px;
    height: 112px;
    resize: none;
  }

  .select {
    padding-right: 30px; /* Ajusta o padding para acomodar o ícone */
    width: 100%; /* Garante que o select ocupe toda a largura disponível */
    appearance: none; /* Remove a seta padrão */
  }

  /* Coloca o ícone de seta dentro do select */
  .select-icon {
    position: absolute;
    right: 40px;
    top: 55px;
    transform: translateY(-50%);
    pointer-events: none;
    cursor: pointer;
  }

  .error {
    color: red;
    font-size: 16px;
    font-weight: 300;
  }
`;