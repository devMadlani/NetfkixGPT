import appStore from "./utils/appStore";
import "./App.css";
import Body from "./Components/Body";
import { Provider, useSelector } from "react-redux";
import { Bounce, ToastContainer } from "react-toastify";


function App() {
  
  return (
    <Provider store={appStore}>
      <ToastContainer
        autoClose={1500}
        position="top-center"
        transition={Bounce}
        hideProgressBar={true}
      />
   
      <Body />
    </Provider>
  );
}

export default App;
