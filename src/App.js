import "./App.css";
// import BatchDetails from "./components/batch-details/batch-details";
import Batch from "./components/batch/batch";
import CommunityAndLearning from "./components/community-learning/community-learning";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Batch />
      <CommunityAndLearning />
      <Footer />
    </div>
  );
}

export default App;
