import styled from "styled-components";

const HomeMain = styled.main`
  main {
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.VeryLightGray_LightModeBackground};
  }

  section {
    margin: auto;
    width: 1200px;
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
    width: 230px;
    height: 330px;
    border-radius: 8px;
  }

  main li img {
    width: 230px;
    height: 150px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  main li div h3 {
    font-weight: 800;
    margin-left: 20px;
  }

  main li div p {
    font-weight: 600;
    margin-left: 20px;
  }

`

export default HomeMain