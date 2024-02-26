import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header header"
    "content content";

  /* overflow-y: auto; */
  overflow-x: hidden;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Content = styled.div`
  grid-area: "content";
  
  width: 100vw;
  height: 100%;
  padding: 50px 80px;

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 145px 30px auto;
  grid-template-areas:
    "title"
    "tags"
    "sinopse";
    
  gap: 40px;
  
  overflow-y: auto;

  &&::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: transparent;
  }

  &&::-webkit-scrollbar {
    width: 8px;
    background-color: transparent;
  }

  &&::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${({ theme }) => theme.COLORS.PINK};
  }

  svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  .tagDetails {
    background-color: ${({theme}) => theme.COLORS.PINK_100};
  }
`;

export const Title = styled.div`
  grid-area: "title";
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 24px;

  > a {
    display: flex;
    align-items: center;
    justify-content: left;

    gap: 8px;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  .name {
    display: flex;
    align-items: center;
    gap: 18px;
  }

  .stats {
    display: flex;
    gap: 8px;
    align-items: center;

    height: 16px;

    > img {
      height: 16px;
      width: 16px;
      border-radius: 99px;
      border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
    }

    > span {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 16px;
    }
  }
`;

export const Tags = styled.div`
    grid-area: 'tags';

    display: flex;

`;

export const Sinopse = styled.p`
  grid-area: 'sinopse';
  color: ${({theme}) => theme.COLORS.WHITE};
  font-size: 16px;

`;
