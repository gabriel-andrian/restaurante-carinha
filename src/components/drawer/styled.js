import styled, { keyframes } from 'styled-components';

export const animMask = keyframes`
    from{
    background-color:rgba(0,0,0,0)
    }
    to{
    background-color:rgba(0,0,0,.5)
    }
`;
export const animContent = keyframes`
    from{
        width:0%;
    }
    to{
        width:60%;
    }
`;
export const SubDrawer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
export const CancelArea = styled.div`
  height: 100%;
  width: 100%;
`;
export const InnerDrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #333;

`;
export const TitleDrawerContent = styled.div`
  height: 20%;
  width: 100%;
  background-color: darkorange;
`;
export const BottomDrawerContent = styled.div`
    display:flex;
    flex-direction:column;
    padding:10%;
    & a {
      text-decoration: none;
  
      &:link {
        color: white;
      }
      &:visited {
        color: white;
      }
      &:hover {
        color: white;
      }
      &:active {
        color: white;
      }
    }

`;
