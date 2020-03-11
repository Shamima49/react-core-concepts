import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

 function App() {
   return (
     <div className="App">
       
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <p>
           Edit done <code>src/App.js</code> and save to reload.
         </p>
               <Person name="Munna" profession="Doctor"></Person>
               <Person name="Masum" profession="footballer"></Person>
               <Person name="Rana" profession="Dorshok"></Person>
               
               <AppList></AppList>

               <Counter></Counter>
               
               <Users></Users>
              
         </header>
     </div>
   );
 }
 function Person(Props) {
   const personStyle={
     border:'2px solid red',
     margin:'10px'
   }
   return (
     <div style={personStyle}>
          <h1>My Name:{Props.name}</h1>
   <h3>My Profession:{Props.profession}</h3>
     </div>
   );
 }

   function AppList(){
       const products = [
         {Name:'photoshop', price:'$90.90'},
         {Name:'Illustrator', price: '$40.90'},
         {Name:'PDF Reader', price: '$6.99'}

        ]
     return (
       <Product product = {products[0]}></Product>,
       <Product product = {products[1]}></Product>
     
     )
   }

    function Product(props){
      const productStyle={
        border:'1px solid gray',
        borderRadius:'5px',
        backgroundColor:'lightgray',
        height:'200px',
        width:'200px',
        float:'left'
      }
      const {name, price} = props.product;
      console.log(name, price)
      return (
        <div style={productStyle}>
          <h2>{name}</h2>
          <h1>{price}</h1>
          <button>Buy Now</button>
        </div>
      )
    }

    

    function Counter(){
      const[count, setCount] = useState(10);
      const handleIncrease = () => {
        const newCount = count + 1;
        setCount(newCount);
      }
      return(
        <div>
          <h1>Count: {count}</h1>
          <button onClick= {handleIncrease} >Increase</button>
          <button onClick= { () => setCount(count - 1)} >Decrease</button>
        </div>
      )
    }


    function Users(){
      const [users, setUsers] = useState([]);
      useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data));
      })
      return(
        <div>
          <h3>Dynamic Users: {users.length} </h3>
          <ul>
            {
              users.map(user => <li>{user.name}</li>)
            }
          </ul>
        </div>
      )
    }



export default App;
