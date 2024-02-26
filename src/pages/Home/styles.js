import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 105px 128px auto;
  grid-template-areas:
    "header header"
    "title title"
    "menu content"
    "newnote content";

  overflow-y: hidden;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Content = styled.div`
  padding: 50px 80px;
`;

export const NewMovie = styled.button`
  grid-area: NewMovie;
  width: 200px;
  height: 50px;
  display: flex;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.PINK};

  border-radius: 10px;
  border: none;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;

  gap: 24px;
  margin: 52px 0;
  overflow-y: auto;

  height: 50vh;

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

