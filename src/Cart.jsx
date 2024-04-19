import { useState } from 'react'

const options = () =>{
  const navBar = document.querySelector('.navbar');
  console.log("navbar");
  if (navBar) {
    navBar.scrollIntoView({ behavior: 'smooth' });
  }
}

const Cart = ( { data }) =>{
    const [show, setShow] = useState(true);
    let {handleBuy, handleRemove, image, amount, title, isSale, isRating} = data;

        return (
            <>
            <div className = "card">
            {isSale ? ( <p className = "card-sale">sale</p>) : <></>}
            <img src = {image} className = "card-img-top" alt = "..."/>
            <div className = "card-body">
            <h5 className = "card-title">{title}</h5>
             {isRating && (
                <div>
                    <i className = "fa-solid fa-star" style = {{color: "#FFD43B"}}></i>
                    <i className = "fa-solid fa-star" style = {{color: "#FFD43B"}}></i>
                    <i className = "fa-solid fa-star" style = {{color: "#FFD43B"}}></i>
                    <i className = "fa-solid fa-star" style = {{color: "#FFD43B"}}></i>
                    <i className = "fa-solid fa-star" style = {{color: "#FFD43B"}}></i>
                </div>
             )}
             {(()=>{
                if(title ==="Popular Item"){
                   return <p className = "card-text">{amount}</p>
                }else{
                    return isSale ? ( <p className = "card-text"><span style  = {{textDecoration: 'line-through'}} >{amount[0]}</span>{' '} {amount[1]}</p>) : 
                    ( <p className = "card-text">{amount[0]} - {amount[1]}</p>)
                }
             })()}
      <div>
      {(() => {
        if (title === "Fancy Product") {
          return <button onClick={options}>View Options</button>
        } else {
          return show ? (
            <button onClick = {()=>{handleBuy();setShow(!show)}}>Add to cart</button>
            ) : (
           <button onClick = {()=>{handleRemove(); setShow(!show)}}>Remove from cart</button>
       );
        }
      })()}
    </div>
        </div>
    </div>
</>
 )
};
export default Cart;