import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import * as React from "react";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);

const Products = () => {
  const Swal = require("sweetalert2");

  const { addItem } = useCart();

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const [anotherData, setAnoterData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");

      const res = await response.json();

      setData(res);
      setFilter(res);
      setLoading(false);

      const fakestoreapi = await fetch(
        "https://api.escuelajs.co/api/v1/products"
      );
      const result = await fakestoreapi.json();
      setAnoterData(result);
    };
     getData();
  }, []);

  const LodingData = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };

  const refresh = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  // 

  let term;
  const filterproduct = (cat) => {
    let term1 = cat.trim();
    let updatedList = [];

    if (term1 == "") return;

    data.map((item) => {
      console.log(item.title.toLowerCase());
      if (
        item.category.toLowerCase().search(term1.toLowerCase()) != -1 ||
        item.title.toLowerCase().search(term1.toLowerCase()) != -1
      ) {
        updatedList.push(item);
      }
    });
    console.log(updatedList);
    setFilter(updatedList);
  };


  // 
  const SweetMgs = () => {
    Swal.fire({
      icon: "success",
      title: "Product Added  To Cart -check it out ! ",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handelswipClick = (id) => {
    console.log(id);
  };

  const ShowProduct = () => {
    return (
      <>
        {filter.map((cval) => {
          return (
            <>
              <div className="col-md-4 ">
                <Card className="product-card" style={{ width: "10rem" }}>
                  <Card.Img
                    variant="top"
                    src={cval.image}
                    className="card-img"
                    style={{ height: "273px", width: "273px" }}
                  />
                  <Card.Body>
                    <Card.Title>{cval.title.substring(0, 12)}</Card.Title>
                    <Card.Text className="card-text">
                      {cval.description.substring(0, 70)}
                    </Card.Text>
                    <hr />

                    <ul className="list-group list-group-flush">
                      <li className="list-group-item lead">$ {cval.price}</li>
                    </ul>

                    <hr />
                    <Link to={"/product/" + cval.id}>
                      <Button variant="outline-dark m-2">View Now</Button>
                    </Link>

                    <Button
                      variant="outline-dark m-2"
                      onClick={() => {
                        addItem(cval);
                        SweetMgs();
                      }}
                    >
                      {" "}
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="container-fluid text-center my-3">
        <h1>Latest Products</h1>
        <hr />

        {/* search bar Starts */}

        <div class="container form-container my-5 ">
          <div class="row height d-flex justify-content-center align-items-center">
            <div class="col-md-6">
              <div class="form">
                <form onSubmit={refresh}>
                  <Button
                    variant=" "
                    type={"submit"}
                    onClick={() => filterproduct(term)}
                  >
                    <i class="fa fa-search"></i>
                  </Button>

                  <input
                    type={"text"}
                    class="form-control form-input"
                    onChange={(e) => (term = e.target.value)}
                    placeholder="Search anything..."
                  />

                  <span class="left-pan">
                    <i class="fa fa-microphone"></i>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* search bar ends */}

        {/*   Swiper starts*/}

        <div className="container">
          <Swiper
            effect={"coverflow"}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            onSwiper={(swiper) => console.log(swiper)}
            // pagination={true}

            className="mySwiper"
          >
            {anotherData.map((cval, i) => {
              return (
                <SwiperSlide key={i}>
                  <img
                    src={cval.images}
                    alt=""
                    style={{ height: "300px", width: "300px" }}
                    id={cval.id}
                    onClick={(e) => {
                      handelswipClick(e.target.id);
                    }}
                    event
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        {/*  swiper ends*/}

        <div className="buttons text-center py-5  mb-3 my-3 category-btn">
         
          <h2>Top Category</h2>

        
          <Button
            variant="outline-dark m-2"
            className="btn-change"
            onClick={() => setFilter(data)}
          >
            All
          </Button>
          <Button
            variant="outline-dark m-2"
            className="btn-change"
            onClick={() => filterproduct("men's clothing")}
          >
            Men Clothing
          </Button>
          <Button
            variant="outline-dark m-2"
            className="btn-change"
            onClick={() => filterproduct("women's clothing")}
          >
            Women Clothing
          </Button>
          <Button
            variant="outline-dark m-2"
            className="btn-change"
            onClick={() => filterproduct("jewelery")}
          >
            Jewelery
          </Button>
          <Button
            variant="outline-dark m-2"
            className="btn-change"
            onClick={() => filterproduct("electronics")}
          >
            Electronics
          </Button>
        </div>

        <div className="card-container ">
          <div className="row ">
            {loading ? <LodingData /> : <ShowProduct />}

          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
