import React, { useEffect, useState } from 'react'
import { supabase } from '../../Helper/supabase-client';

function Categories() {

    const [categories,setCategories] = useState([]);

    async function getCategories(){
        let {data,error}= await supabase.from("categories").select("*");
        if(error){
            console.log("error fetching categories",error.message);
            return [];
        }
        return data;
    }

    useEffect(()=>{
        async function fetchData(){
            let result = await getCategories();
            console.log("category result :" , result);
            setCategories(result);
        }
        fetchData();

    },[])
    return (
        
    //         
    <div>categories</div>
    
    )
}

export default Categories
