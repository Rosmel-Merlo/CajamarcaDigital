import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { FluentProvider, webLightTheme } from '@fluentui/react-components'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <FluentProvider theme={webLightTheme}>
      <App />
    </FluentProvider>,
  </BrowserRouter>

)
