import Button from 'react-bootstrap/Button';
import React from 'react'
import Footer from '../components/Footer'
import { NavLink,Link} from 'react-router-dom';
import { useCart } from 'react-use-cart'

const Cart = () => {

  
  let shipping = 30.0; 

  const { items, isEmpty, totalItems, totalUniqueItems, cartTotal, updateItemQuantity, removeItem, emptyCart } = useCart();

  if(isEmpty)
  {
    return (<>

    <div className="container my-3">
    <h1 className="text-center">Cart</h1>
        <hr />
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">Your Cart is Empty</h4>
            <Link to="/" className="btn  btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div> 
      <Footer/>
    
    </>)
  }



  return (
    <>
    <div className="container">
        <div className='text-center my-3'>
          <h1 className='muted'>Cart</h1>
          <hr/>
        </div>
       <div className="container py-5">
       <div className="row d-flex justify-content-center my-4">
       <div className="col-md-8">
       <div className="card mb-4">
       <div className="card-header py-3">
         <h5 className="mb-0">Item List</h5>
         </div>

         <div className="card-body">
                    {items.map((item) => {
                      return (
                        <div key={item.id}>
                          <div className="row d-flex align-items-center">
                            <div className="col-lg-3 col-md-12">
                              <div
                                className="bg-image rounded"
                                data-mdb-ripple-color="light"
                              >
                                <img
                                  src={item.image}
                                  // className="w-100"
                                  alt={item.title}
                                  width={100}
                                  height={75}
                                />
                              </div>
                            </div>

                            <div className="col-lg-5 col-md-6">
                              <p>
                                <strong>{item.title}</strong>
                              </p>
                              {/* <p>Color: blue</p>
                              <p>Size: M</p> */}
                            </div>

                            <div className="col-lg-4 col-md-6">
                              <div
                                className="d-flex mb-4"
                                style={{ maxWidth: "300px" }}
                              >
                                <button
                                  className="btn px-3"
                                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                >
                                  <i className="fas fa-plus"></i>
                                </button>

                                <p className="mx-5">{item.quantity}</p>

                                <button
                                  className="btn px-3"
                                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                >
                                  <i className="fas fa-minus"></i>
                                </button>
                              </div>

                              <p className="text-start text-md-center">
                                <strong>
                                  <span className="text-muted">{item.quantity}</span>{" "}
                                  x ${item.price}
                                </strong>
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                <button
                                  className="btn px-3" onClick={() =>removeItem(item.id)}>
                                    <i class="fa-sharp fa-solid fa-trash"></i>

                                  </button>
                                
                              </p>
                            </div>
                          </div>

                          <hr className="my-4" />
                        </div>
                      );
                    })}
                  </div>


       </div>
       </div>

       <div className="col-md-4">
       <div className="card mb-4">
       <div className="card-header py-3 bg-light">
          <h5 className="mb-0">Order Summary</h5>
       </div>
       <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Products ({totalItems})<span>${Math.round(cartTotal)}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        Shipping
                        <span>${shipping}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total amount</strong>
                        </div>
                        <span>
                          <strong>${Math.round(cartTotal + shipping)}</strong>
                        </span>
                      </li>
                    </ul>

                    <Link
                      to="/chekout"
                      className="btn btn-success btn-lg btn-block"
                    >
                      Go to checkout
                    </Link>
                  </div>
       </div>
       </div>
       
       </div>
       </div>
       </div>
    <Footer/>
    </>
  )
}

export default Cart
