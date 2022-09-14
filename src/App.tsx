import { ThemeProvider } from 'styled-components'
import Input from './components/common/Input/Input'
import { GlobalStyle } from './styles/GlobalStyles'
import { getTheme } from './styles/theme'

function App() {
   return (
      <ThemeProvider theme={getTheme('light')}>
         <GlobalStyle />
         <div className='App'>
            app
            <Input name='name' />
         </div>
      </ThemeProvider>
   )
}

export default App
