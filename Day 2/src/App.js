// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import MainContent from './components/MainContent';

function App() {
  return (
    <>
      <Navbar/>
      <div className='flex'>
        <SideBar/>
        <MainContent/>
      </div>
    </>
  );
}

export default App;
