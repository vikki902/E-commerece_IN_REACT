import React from 'react'
import { useParams } from 'react-router-dom'
import { useState ,useEffect}  from "react";
import Button from 'react-bootstrap/Button';
import Skeleton from 'react-loading-skeleton';
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
const ProductId = () => {
    
    const{ addItem } = useCart();

    const  {id } = useParams();
    const [data  , setData] =useState([])
    const [similar , setSimilar] = useState()
    const [loading , setLoding] = useState(false)

    
    const getProduct  = async () =>{

        setLoding(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setData(data)
        setLoding(false);

        const res = await fetch(`https://fakestoreapi.com/products/category/${data.category}`)
        const data2 = await res.json(); 
        setSimilar(data2);
      
        
    }

    useEffect(() => {

        getProduct();
    },[id])
   

    const Loading = () =>{

        return(
            <>
            
            <Skeleton height={400} width={400} />
            <Skeleton height={400} width={400} />
            <Skeleton height={400} width={400} />
            <Skeleton height={400} width={400} />
            <Skeleton height={400} width={400} />
            <Skeleton height={400} width={400} />
            <Skeleton height={400} width={400} />
            <Skeleton height={400} width={400} />
            <Skeleton height={400} width={400} />
            

            </>


        )
        
       
    }

    const ShowProduct = () =>{

        return(
            <>
               <div className='container my-5 py-2'>
                <div className='row'>
                 <div className='col-md-6 col sm-12 py'>
                    <img
                className="img-fluid"
                src={data.image}
                alt={data.title}
                width="400px"
                height="400px"
              />
             </div>
             <div className='col-md-6 col-md-6 py-5'>
             <h4 className="text-uppercase text-muted">{data.category}</h4>
             <h1 className="display-5">{data.title}</h1>
             <p className="lead">
                {data.rating && data.rating.rate}{" "}
                <i className="fa fa-star"></i>
              </p>
              <h3 className="display-6  my-4">${data.price}</h3>
              <p className="lead">{data.description}</p>

              <Button variant="outline-dark m-2" onClick={() => addItem(data)}>Add to Cart</Button>
              
              <Link to={'/cart'}> 
              <Button variant="outline-dark m-2">  Go to Cart</Button>
              </Link>
       
             </div>
            </div>
            </div>       
            </>
        )
    }

   const SimilarProduct= () =>{
    return(
    <>
    {
       similar?.map((item) =>{
           return(
            <>
             <div key={item.id} className="card mx-4 text-center">
                  <img
                    className="card-img-top p-3"
                    src={item.image}
                    alt="Card"
                    height={300}
                    width={300}
                  />    
                  <div className="card-body">
                    <h5 className="card-title">
                      {item.title.substring(0, 15)}...
                    </h5>
                  </div>
                  
                  <div className="card-body">
                    <Link
                      to={"/product/" + item.id}
                      className="btn btn-dark m-1"
                    >
                      Buy Now
                    </Link>
                    <button
                      className="btn btn-dark m-1"
                      onClick={() => addItem(item)}
                     
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
            </>
           )
      })
    }
        
    </>
   )
   

   }
 
    return (
    <>
        <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
       

        <div className="row my-5 py-5">
          <div className="d-none d-md-block">
          <h2 className="">You may also Like</h2>
            <Marquee
              pauseOnHover={true}
              pauseOnClick={true}
              speed={50}
            > 
               {loading ? <Loading /> : <SimilarProduct />} 
             </Marquee>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductId
