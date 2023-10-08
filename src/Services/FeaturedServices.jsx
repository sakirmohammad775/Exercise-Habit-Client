import { useEffect, useState } from "react";
import Category from "./Category";


const FeaturedServices = () => {
    const [category,setCategory]=useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategory(data))
    })

    return (
        <div>
           <div>
           <h1 className="font-extrabold text-2xl my-4 text-gray-700 text-center">Featured<span className="text-cyan-500"> Our</span> Services</h1>
            <p></p>
           </div>
           <div className="grid grid-cols-2 gap-6">
                {            
                category.map(category=><Category key={category.id}category={category}></Category> )
                }
            </div>

        </div>
    );
};

export default FeaturedServices;