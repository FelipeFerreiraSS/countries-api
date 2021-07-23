import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
  }
`

const theme = {
  colors: {
    darkBlueDark_ModeElements: 'hsl(209, 23%, 22%)',
    veryDarkBlueDark_ModeBackground: 'hsl(207, 26%, 17%)',
    veryDarkBlueLight_LightModeText: 'hsl(200, 15%, 8%)',
    darkGrayLight_LightModeInput: 'hsl(0, 0%, 52%)',
    VeryLightGray_LightModeBackground: 'hsl(0, 0%, 98%)',
    White_DarkModeTextLightModeElements: 'hsl(0, 0%, 100%)'

  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
