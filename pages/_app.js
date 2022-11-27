import '../styles/globals.css'
import Navbar from '../Components/Navbar';
import { Provider } from 'react-redux';
import store from '../Store/store';
const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}

export default MyApp
