/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const LoadingStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Ocupa toda a altura da tela */

  .loading-spinner {
    border: 8px solid var(--color-gray-light); /* Cor do fundo */
    border-top: 8px solid var(--primary-color); /* Cor da borda animada */
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const Loading = () => {
  return (
    <LoadingStyled>
      <div className="loading-spinner"></div>
    </LoadingStyled>
  );
};
