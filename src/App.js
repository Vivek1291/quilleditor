import './App.scss';
import Content from './Components/Content';
import Header from './Components/Header';
import SideBar from './Components/SideBar';

function App() {
  return (
    <div className="App">
      <div className="side-bar-container">
        <SideBar />
      </div>
      <div className="body-content">
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
