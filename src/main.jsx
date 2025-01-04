import ReactDOM from 'react-dom/client'
import store from './reducers/noteReducer.js'
import App from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)

