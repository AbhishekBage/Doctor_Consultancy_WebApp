import React from 'react'


    const CheckUser = async ()=>{
        try{
           const res = await fetch('/userprofile',{
               method:"GET",
               headers: {
                   Accept: "application/json",
                   "content-Type":"application/json"
               },
               credentials:"include"
           })
        
        const data = await res.json();
        
        if(res.status===400)
        {
            
            throw new Error("Error");
        }
        
        return true;
    }catch(err){

        window.alert('User Not Logged In');
        return false;
        //console.log(err);
        //history.push('/signIn');
      }
        
    }


export default CheckUser;
