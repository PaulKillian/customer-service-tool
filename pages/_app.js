import '../styles/globals.css'
import store from '../components/store.js'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
