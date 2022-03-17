import {useState, useEffect} from 'react';
import './App.css';

function App() {
  const person = {
    names:"Pranta",
    age:34,
    job:"singer",
    result:4.66,
  }
  const product = [
    {name:'Adobe PhotoShop', price:'$324.3', laisane:'yes'}, 
    {name:"Ilestator", price:'$34.0',laisane: 'not yeat'},
    {name:'Adobe XD', price:'$34.39',laisane:'free'},
    {name:"ThimeMaker", price:'$54.0',laisane: 'not yeat'},
    {name:"Velestator", price:'$34.0',laisane: 'yes'}
]
return (
  <div className="app">
      <Counter></Counter>
      <Users></Users>
      <ol style={{color:'red',textDecoration:'none'}}>
        {
        product.map(pd=><li>{pd.name}</li>)
      }
      </ol>
      {/* <Person product={product[0]}></Person>
      <Person product={product[1]}></Person>
      <Person product={product[2]}></Person> */}
      {
        product.map(pd => <Person prct={pd}></Person>)
      }
      
    </div>
  )
};
function Person(props){
  
  const productStyle = {
    color:'red',
    backgroundColor:'blue',
    margin:'14px',
    height:'180px',
    padding:'9px',
    textAlign:'center'
    
  }
  const {name, price, laisane} = props.prct
  
  return (
    <div style={productStyle}>
      <h1>{name}</h1>
      <h2>price: {price}</h2>
      <h3>laisence: {laisane}</h3>
     </div>
   )
  }
  function countHandeler(){
    
  }
  function Counter(){
    
    const [count, setCount]=useState(0);
    return(
      <div>
      <h1>count: {count}</h1>
      <button onClick={ ()=> setCount(count + 1)}>incriase</button>
      <button onClick={ ()=> setCount(count - 1)}>decrease</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(res => res.json())
    .then(data => setUsers(data))
    
  },[])
  console.log(users)
  const userStyle = {
    backgroundColor:'yellow',
    display:'flex',
    margin:'3px',
    padding:'3px',
    justifyContent: 'space-between'
  }
  const h1={display:"block",color:"red"}
  function userHandel(user){
  return <div style={userStyle}>
            <h4 style={h1}>{user.name}</h4>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.address.city}</p>
            </div>
  }
  return(
    <div>
      <p>users: {users.length}</p>
      <ul>
        {
          users.map(user=> userHandel(user))
        }
      </ul>
     

    </div>
  )
}

export default App;
