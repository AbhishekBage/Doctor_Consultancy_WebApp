import React, {useEffect} from 'react'
import { useHistory } from 'react-router-dom';

export default function Logout() {
    const history = useHistory();
    const logout = async (e)=>{
        try{
         const res = await fetch('/Userlogout',{
           method: "GET",
           credentials: "include",
           headers: {
             "Content-Type": "application/json",
             Accept: "application/json",
           }
         });

           if(res.status===200)
           {  window.alert('Logout Successfully')
              history.push('/signIn');
           }
        }catch(err){
         console.log(err);
        }
       
      }
      useEffect(()=>{
          logout();
        },[])
    return (
        <div>
        </div>
    )
}
