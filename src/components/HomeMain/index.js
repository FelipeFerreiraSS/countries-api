import styled from "styled-components";

const HomeMain = styled.main`
  main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.VeryLightGray_LightModeBackground};
  }

  main ul {
    list-style: none;
    margin: 0;
  }

  main li {
    display: inline-block;
    margin: 20px;
  }

  main li div {
    background-color: ${({ theme }) => theme.colors.White_DarkModeTextLightModeElements};
  }
`

export default HomeMain