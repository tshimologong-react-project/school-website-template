import React,{useEffect} from 'react';
import {db} from './firebase'
import {collection,getDocs} from 'firebase/firestore';


function Auth() {

  // const test =()=>{
  //   databaseRef.on('value',snapshot =>{
  //     console.log(snapshot.val())
  //   } )
  // }
  const userCollectionRef=collection(db,"employee");
  useEffect(() => {
   const findUser = async ()=>{
    const data = await getDocs(userCollectionRef);
    console.log(data.docs.key)
    
   }

   findUser() ;
  }, []);
  
  
    
  return (
    <div><button  >send data</button></div>
  )
}

export default Auth