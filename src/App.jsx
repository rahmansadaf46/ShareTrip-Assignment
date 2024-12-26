import { Provider } from "react-redux";
import ProductList from "./pages/ProductList";
import store from "./redux/store";
import "./styles/Styles.css";

function App() {
  return (
    <Provider store={store}>
      <div>
        <ProductList />
      </div>
    </Provider>
  );
}

export default App;
