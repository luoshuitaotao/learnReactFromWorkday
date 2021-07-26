import React from "react";
import './App.css';
import restaurant from "./restaurant.jpg";

function App() {
  return (
    <div className="App">
      <Header name="Jing's" />
      <Main adjective="delicious" dishes={dishObjects}/>
      <Footer year= { new Date().getFullYear()} />

    </div>
  );}

  function Header(props){
    return(
      <div>{ props.name} kitchen</div>
    )
  };

  function Main(props){
    return(
      <section>
        <p>We serve the most { props.abjective } food around.</p>
      <img src={restaurant} height={300} alt="tables and chairs at the restaurant"/>
      <ul style={ {textAlign:"left"}}>
        { props.dishes.map((dish)=>(
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
      </section>
    )
  };

  function Footer(props){
    return(
      <div>Copyright {props.year }</div>
    )
    
  };
  
  const dishes =[
    "Macaroni and Cheese",
    "Lanzhou Noodles", 
    "Fish Soup"
  ]
  const dishObjects = dishes.map((dish,i)=>({id: i, title:dish}));


export default App;
