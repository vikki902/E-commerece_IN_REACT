import React from 'react'
import Footer from '../components/Footer'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const About = () => {
  return (
    <>
        <div className='container'>

          <h1 className='text-center my-4'>About Us</h1>
          <hr/>
          <p className='lead text-muted '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere doloremque veritatis odit similique sequi. Odit amet fuga nam quam quasi facilis sed doloremque saepe sint perspiciatis explicabo totam vero quas provident ipsam, veritatis nostrum velit quos recusandae est mollitia esse fugit dolore laudantium. Ex vel explicabo earum unde eligendi autem praesentium, doloremque distinctio nesciunt porro tempore quis eaque labore voluptatibus ea necessitatibus exercitationem tempora molestias. Ad consequuntur veniam sequi ullam tempore vel tenetur soluta dolore sunt maxime aliquam corporis est, quo saepe dolorem optio minus sint nemo totam dolorum! Reprehenderit delectus expedita a alias nam recusandae illo debitis repellat libero, quasi explicabo molestiae saepe, 
          dolorem tempore itaque eveniet quam dignissimos blanditiis excepturi harum numquam vel nihil? Ipsum
          </p>

          <h1 className='text-center my-4'>Our Products</h1>
          <div className="row">
       

      <Card  className='card-row' style={{ width: '16rem' }}>
      <Card.Img  src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600"  />
      <Card.Body>
      <h5 className="card-title text-center">Mens's Clothing</h5>
      </Card.Body>
      </Card>

      <Card className='card-row' style={{ width: '16rem' }}>
      <Card.Img src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Card.Body>
      <h5 className="card-title text-center">Women's Clothing</h5>
      </Card.Body>
      </Card>
      
      <Card className='card-row' style={{ width: '16rem' }}>
      <Card.Img  src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Card.Body>
      <h5 className="card-title text-center">Jewelery</h5>
      </Card.Body>
      </Card>
      
      <Card className='card-row' style={{ width: '16rem' }}>
      <Card.Img src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Card.Body>
      <h5 className="card-title text-center">Electronics</h5>
      </Card.Body>
      </Card>
      

      

        </div>
        </div>

    <Footer/>
    </>
  )
}

export default About
