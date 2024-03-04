import Accordian from './components/accordian';
import StarRating from './components/star-rating';
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import './App.css';

function App() {
  return (
    <div className="App">
      <Accordian></Accordian>
      <StarRating noOfStars={10}/>
          {/* Image slider component */}
        <ImageSlider
          url={"https://picsum.photos/v2/list"}
          page={"1"}
          limit={"10"}
        /> 
      <LoadMoreData/>
    </div>
  );
}

export default App;
