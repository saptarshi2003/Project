import React,{useEffect,useState} from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/carousel'

export default function Home() {

  const[search,setSearch]=useState('');

  const [foodCat,setFoodCat]=useState([]);
  const [foodItem, setFoodItem]=useState([]); 

  const loadData=async()=>{
    let response=await fetch("http://localhost:5000/api/foodData",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      }
    });

    response=await response.json();

   // console.log(response[0],response[1]);   // from displaydata route first item is foodItem and second is foodCategory

   setFoodItem(response[0]);
   setFoodCat(response[1]);
  }


  useEffect(()=>{
    loadData()
  },[])


  return (
    <div>
      <div><Navbar /></div>
      <div id="testimonial-carousel" className="carousel slide carousel-fade" data-ride="carousel" style={{objectFit:"contain !important"}}>
      <div className="carousel-inner" id='carousel'>
      <div className="carousel-caption d-none d-md-block" style={{zIndex:"10"}}>
      <form className="d-flex">
    <input className="form-control me-2 outline-white" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{
      setSearch(e.target.value);
    }}/>
    <button className="btn btn-outline-white text-white bg-success" type="submit">Search</button>
  </form>

  </div>

        <div className="carousel-item active">
          <img className="d-block w-100" src="/pizza.jpeg" style={{width:"400px",height:"600px",filter:"brightness(40%)"}} alt="burger"/>
          
        </div>
        <div className="carousel-item">
          
          <img className="d-block w-100" src="/burger.jpeg" style={{width:"400px",height:"600px",filter:"brightness(40%)"}} alt="pizza"/>
          
        </div>

        <div className="carousel-item">
          
          <img className="d-block w-100" src="/noodles.jpeg" style={{width:"400px",height:"600px",filter:"brightness(40%)"}} alt="noodles"/>
          
        </div>

      </div>
      <a className="carousel-control-prev" href="#testimonial-carousel" role="button" data-slide="prev">

        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </a>


      <a className="carousel-control-next" href="#testimonial-carousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </a>


    </div>
      <div className="container">
        {
          foodCat !== [] 
          ? foodCat.map((data) => {
            return (
              <div className='row mb-3' key={data._id}>
                <div className="fs-3 m-3">{data.CategoryName}</div>
                <hr />
                {foodItem !== [] 
                  ? foodItem.filter((item) => (item.CategoryName === data.CategoryName) &&(item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                    .map((filterItems) => {
                      return (
                        <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                        <Card foodItem={filterItems}
                        options={filterItems.options[0]}>
                          </Card>
                        </div>
                      );
                    })
                  : <div>No Such Data Found</div>
                }
              </div>
            );
          })
          : ""
        }
      </div>
      <div><Footer /></div>
    </div>
  );
}  