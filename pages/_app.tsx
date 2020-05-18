import "../styles/global.css";
import "react-toastify/dist/ReactToastify.css";
import { withRedux } from "../lib/redux";

function App({ Component, pageProps }): JSX.Element {
  return <Component {...pageProps} />;
}

export default withRedux(App);
