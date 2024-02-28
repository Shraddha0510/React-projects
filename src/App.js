import Accordian from './components/accordian';
import StarRating from './components/star-rating';
import './App.css';

function App() {
  return (
    <div className="App">
      <Accordian></Accordian>
      <StarRating noOfStars={10}/>
    </div>
  );
}

export default App;
