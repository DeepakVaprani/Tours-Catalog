import React from "react";
import Tours from "./Component/Tours";
import data from "./data";
import {useState} from "react";


const App = () => {
  const [tours,setTours] = useState(data);

  const removeTour = (id) =>{
       const newTours  = tours.filter(tour => tour.id !== id);
       setTours(newTours);
  }

  if(tours.length===0){
    return (
      <div className="refresh">
        <h2>No Package left to Show</h2>
        <button className="refresh" onClick={()=>{setTours(data)}}>
          Refresh
        </button>
      </div>
    )
  }

  return (
    <div className="App">
      <div className="title">Plan With Deepak</div>
      <Tours tours={tours} removeTour={removeTour}/>
    </div>
  )
};

export default App;
