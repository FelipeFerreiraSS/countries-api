import styled from "styled-components";

const HomeHeader = styled.header`
  header {
    height: 80px;
    background-color: ${({ theme }) => theme.colors.White_DarkModeTextLightModeElements};
  }

  header section {
    margin: auto;
    width: 1080px;
    height: 80px;
    display: flex;
    justify-content: space-between;
  }
  
  header section h1 {
    margin-left: 0px;
    font-weight: 800;
    display: flex;
    align-items: center;
  }

  header section div {
    margin-right: 40px;
    display: flex;
    align-items: center;
  }

  header section div p {
    color: black;
    font-weight: 600;
  }
  
`

export default HomeHeader