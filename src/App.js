
import './App.css';
import SebedimContextProvider from './context/Sebedim';

import Routes from "./routes/routes";
function App() {
  return (
    <div className="App">
      <SebedimContextProvider>
         <Routes/>
      </SebedimContextProvider>
     
    </div>
  );
}

export default App;
