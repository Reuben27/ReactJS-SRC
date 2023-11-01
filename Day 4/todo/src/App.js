import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Navbar title = "Navbar" name = "ReactJS" link = "https://react.dev"/>
      <div className="content">
        <Home name = "Reuben Shibu"/>
      </div>
    </div>
  );
}

export default App;
