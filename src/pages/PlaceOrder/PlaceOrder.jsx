import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {
const{getTotalCartAmount} = useContext(StoreContext)

  return (
    <form className='place-order'>
      <div className="place-order-left">
       <p className="title">Delivary Information</p>
       <div className="multi-fields">
        <input type="text" placeholder='First name' />
        <input type="text" placeholder='Last name'/>
       </div>
       <input type="email" placeholder='Email address'/>
       <input type="text" placeholder='street' />
       <div className="multi-fields">
        <input type="text" placeholder='City' />
        <input type="text" placeholder='State'/>
       </div>
       <div className="multi-fields">
        <input type="text" placeholder='Zip code' />
        <input type="text" placeholder='Country'/>
       </div>
       <input type='text' placeholder='phone'/>
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
          <div className="cart-totals-details">
              <p>Subtotal</p>
              <p>Rs.{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-totals-details">
             <p>Delivery Fee</p>
             <p>Rs.{getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-totals-details">
                <b>Total</b>
                <b>Rs.{getTotalCartAmount()===0?0: getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button >PROCEED TO PAYMENT</button>
        </div>
      </div>

    </form>
  )
}

export default PlaceOrder