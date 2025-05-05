import Expressions from "./components/Expressions";
import Footer from "./components/Footer";
import Greet from "./components/Greet";
import Header from "./components/Header";
import JSXRules from "./components/JSXRules";
import MainContent from "./components/MainContent";
import WelcomeMessage from "./components/WelcomeMessage";
import ProductInfo from "./components/ProductInfo";
import GreetingOne from "./components/GreetingOne";
import Lists from "./components/Lists";
import ListsTwo from "./components/ListsTwo";
import UserList from "./components/UserList";
import ProductListOne from "./components/ProductListOne";
import ReactOne from "./components/ReactOne";

function App() {
  return (
    <>
      <Greet />
      <h1>Hello, World</h1>
      <Header />
      <MainContent />
      <Footer />
      <WelcomeMessage />
      <JSXRules />
      <Expressions />
      <ProductInfo />
      <GreetingOne />
      <Lists />
      <ListsTwo />
      <UserList />
      <ProductListOne />
      <ReactOne />
    </>
  );
}

export default App;
