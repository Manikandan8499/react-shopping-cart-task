import { useState } from 'react'
import './App.css'
import Cart from "./Cart.jsx"

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  function handleBuy() {
    setShow(!show);
    setCount(count + 1);
  }

  function handleRemove() {
    setShow(!show);
    setCount(count - 1);
  }

  return (
    <>
    
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Start Bootstrap</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
          Shop
        </a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">All Products</a>
          <li><hr className="dropdown-divider" /></li>
          <a className="dropdown-item" href="#">Popular items</a>
          <a className="dropdown-item" href="#">New Arrivals</a>
        </div>
      </li>
    </ul>
  </div>
        <div className="cart-logo">
          <p> <i className="fa-sharp fa-solid fa-cart-shopping"></i> Cart : {count}</p>
        </div>
</nav>
<div className="cards">
  <div className="cards-body">
    <br/><br/>
    <br/><br/>
    <h1 className="cards-title">Shop in style</h1>
    <p className="cards-text">With this shop homepage template</p>
    <br/><br/>
    <br/><br/>
  </div>
</div>
<br/><br/>
<div className="card-container">
<Cart data = {{ handleBuy, handleRemove, title: "Fancy Product" , amount : ["$40.00", "$80.00"], isSale: false, isRating: false, image: "https://i.pinimg.com/236x/a6/35/97/a635970f604cb141c132f1b3184bce24.jpg"}}/>
<Cart data = {{ handleBuy, handleRemove, title: "Special Item" , amount : [ "$20.00", "$18.00"], isSale: true, isRating: true, image: "https://i.pinimg.com/236x/a6/35/97/a635970f604cb141c132f1b3184bce24.jpg"}}/>
<Cart data = {{ handleBuy, handleRemove, title: "Sale Item" , amount : ["$50.00", "$25.00"], isSale: true, isRating: false, image: "https://i.pinimg.com/236x/a6/35/97/a635970f604cb141c132f1b3184bce24.jpg"}}/>
<Cart data = {{ handleBuy, handleRemove, title: "Popular Item" , amount : ["$40.00"], isSale: false, isRating: true,  image: "https://i.pinimg.com/236x/a6/35/97/a635970f604cb141c132f1b3184bce24.jpg"}}/>

<Cart data = {{ handleBuy, handleRemove, title: "Sale Item" , amount : ["$50.00", "$25.00"], isSale: true, isRating: false, image: "https://i.pinimg.com/236x/a6/35/97/a635970f604cb141c132f1b3184bce24.jpg"}}/>
<Cart data = {{ handleBuy, handleRemove, title: "Fancy Product" , amount : ["$120.00", "$280.00"], isSale: false,  isRating: false, image: "https://i.pinimg.com/236x/a6/35/97/a635970f604cb141c132f1b3184bce24.jpg"}}/>
<Cart data = {{ handleBuy, handleRemove, title: "Special Item" , amount : [ "$20.00", "$18.00"], isSale: true, isRating: true, image: "https://i.pinimg.com/236x/a6/35/97/a635970f604cb141c132f1b3184bce24.jpg"}}/>
<Cart data = {{ handleBuy, handleRemove, title: "Popular Item" , amount : ["$40.00"], isSale: false,  isRating: true, image: "https://i.pinimg.com/236x/a6/35/97/a635970f604cb141c132f1b3184bce24.jpg"}}/>



</div>
<br></br>
<br></br>
<div className="footer">
  <br></br>
  <br></br>
  <p>Copyright © Your Website 2023</p>
  <br></br>
  <br></br>
</div>
    </>
  )
}

export default App
