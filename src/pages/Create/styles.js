import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 105px  auto;
  grid-template-areas:
    "header header"
    "content content";

  /* overflow-y: auto; */
  overflow-x: hidden;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  .tags {
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 24px;
    /* justify-content: space-between; */
    flex-wrap: wrap;
    background-color: #0d0c0f;
    padding: 16px;
    border-radius: 10px;
  }

  .buttons {
    display: flex;
    gap: 40px;
    padding-bottom: 90px;
  }

  .delete {
    background-color: #0d0c0f;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Content = styled.div`
grid-area: "content";
  width: 100vw;
  height: 100%;
  padding: 50px 80px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  overflow-y: auto;

  &&::-webkit-scrollbar-track
{	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: transparent; 

}

&&::-webkit-scrollbar
{ 
  width:  8px;
	background-color: transparent;
  
}

&&::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: ${({theme}) => theme.COLORS.PINK};

}
`;

export const Title = styled.div`
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
`;

export const Form = styled.div`
  max-width: 100%;

  display: grid;
  gap: 40px 16px;

  grid-template-columns: 50%;
  grid-template-rows: 55px auto;
  grid-template-areas:
    "nameMovie notaMovie"
    "observacao observacao ";
`;

export const NameMovie = styled.div`
  grid-area: nameMovie;
`;

export const NotaMovie = styled.div`
  grid-area: notaMovie;
`;

export const Observacao = styled.div`
  grid-area: observacao;
`;
