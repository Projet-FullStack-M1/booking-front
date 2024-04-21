import Header from "./components/partials/Header/Header";
import "./layout.scss";
import Homepage from "./pages/homepage/homepage";
const App = () => {
  return (
    <div className="layout">
      <div className="navbar">
        <Header />
      </div>
      <div className="content">
        <Homepage />
      </div>
    </div>
  );
};

export default App;
