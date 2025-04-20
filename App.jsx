import { useEffect, useState } from 'react'
//import './App.css'


const Card=({title,actor})=>{
  const[count,setCount]=useState(0);
  const [hasLiked,setHasLiked]=useState(false);
  useEffect(()=>{
console.log(`${title} has been liked: ${hasLiked}`);

  },[hasLiked]);//matlab agar like ho tou console pay dikhao

  return(
    <div className='card' onClick={()=> setCount(count +1)}>
      <h2>{title} and cast {actor } -{count || null}</h2>
      <button onClick={()=>setHasLiked(!hasLiked)}>
        {hasLiked ? '❤️':'🤍'}
      </button>
    </div>
  )
}
//you can make a compunent one and use it whenever you need it 
//props are used to give data from one component to another
const App=()=>{
  const [hasLiked,setHasLiked]=useState(false);
  return(
    <div className="card-container">
         <h2>Shees Ikram</h2>
         <Card title="Shuttle island" actor="caprio"/>
         <Card title="Shuttle island"  />
    </div>
  )
}

export default App
