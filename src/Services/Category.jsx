import { Link } from "react-router-dom";


const Category = ({category}) => {
    const{id,name,image,price,short_description,button}=category;
    return (
        
            <div className="card  bg-base-100 shadow-xl  ">
                <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
                 </figure>
             <div className="card-body items-center text-center">
                <h2 className="card-title hover:text-cyan-500">{name}</h2>
                <p className="font-bold text-center">Fee: <span className="font-normal">{price}</span></p>
                 <p>{short_description}</p>

                <div className="card-actions">
                   <Link to={`/category/${id}`}> 
                   <button className="btn text-cyan-500 hover:text-white hover:bg-sky-700 px-8">Join</button>
                   </Link>
                </div>
             </div>
            </div>
        
    );
};

export default Category;