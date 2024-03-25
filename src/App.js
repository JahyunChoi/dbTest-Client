import './App.css';
import AxiosTestComponent from './component/AxiosTestComponent';
import SendAndGet from './component/SendAndGet';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SendAndGet />
        <AxiosTestComponent />
      </header>
    </div>
  );
}

export default App;
