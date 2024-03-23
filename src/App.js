import Delivery from "./components/Buy";
import Categories from "./components/Categories";
import Email from "./components/Email";
import Featured from "./components/Featured";
import Games from "./components/Games";
import TopNav from "./components/TopNav";
import TopPicks from "./components/TopPicks";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
     <TopNav/>
     <Featured/>
     <Delivery/>
     <TopPicks/>
     <Games/>
     <Categories/>
     <Email/>
     <Footer/>
    </div>
  );
}  

export default App;
