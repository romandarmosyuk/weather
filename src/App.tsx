import { History } from './compotents/HIstory';
import { Header } from './compotents/Header';
import { InfoBlock } from './compotents/InfoBlock';
import { dataWeather } from './compotents/InfoBlock/data';
import { Measurements } from './compotents/Measurements';


function App() {
  return (
         <>
            <Header/>
            <InfoBlock infoWeather={ dataWeather }/>
            <Measurements/>
            <History/>
         </>
         
  )
}

export default App
