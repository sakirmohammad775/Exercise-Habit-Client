import { useLoaderData, useParams } from "react-router-dom";




const ServicesDetails = () => {
    const categories = useLoaderData();
    const{id}=useParams()
    const idInt=parseInt(id);
    const rare= categories.find(rare=>rare.id===idInt);
    console.log(rare);

    
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/pQSw97S/frontpicture.jpg)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
            <button className="btn text-cyan-500 hover:text-white hover:bg-sky-700 px-8">Explore with us</button>
            </div>
                </div>
            </div>
           
            <div className="grid lg:grid-cols-2">
                 {/* second function */}
                <div className="card w-full mt-16">
                    <figure><img src={rare.image} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="text-center font-bold">{rare.name}</h2>
                      <p className="font-bold text-center">Fee: <span className="font-normal">{rare.price}</span></p>
                      <div className="card-actions justify-end">
                      <button className="btn text-cyan-500 hover:text-white hover:bg-sky-700 px-8"> Purchase</button>
                      </div>
                    </div>
                    </div>
                 {/* third function */}
                 <div className="card w-full mt-6">
                   <h3 className="text-center font-bold py-3">Lead A Healthy Life</h3>
                   <hr />
                   <p className="text-center font-bold pb-3">Benefit:</p>
                   <hr />
                   <ul className="ml-8 pb-5 ">
                        <li className="py-3" ><span className="font-bold">Weight Management:</span> Weight Management: Regular exercise helps you maintain a healthy weight by burning calories and building lean muscle mass. It can also aid in weight loss when combined with a balanced diet.</li>
                        <li><span className="font-bold ">Improved Cardiovascular Health:</span>Exercise strengthens the heart and improves circulation, reducing the risk of heart disease, high blood pressure, and stroke.</li>
                        <li className="pt-3"><span className="font-bold ">Muscle Strength and Endurance: </span> Fitness activities such as resistance training help build muscle strength and endurance, making daily tasks easier and reducing the risk of injury.</li>
                   </ul>
                  </div>
                

               
            </div>
        </div>
    );
};

export default ServicesDetails;