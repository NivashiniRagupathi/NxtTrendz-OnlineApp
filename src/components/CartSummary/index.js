// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.quantity * eachCartItem.price
      })

      return (
        <>
          <div className="cart-summary-container">
            <h1 className="order-heading">
              <span className="span-text">Order Total:</span> Rs {total}{' '}
            </h1>
            <p className="total-items-description">
              {cartList.length} Items in cart
            </p>
            <button type="button" className="button-lg">
              Checkout
            </button>
          </div>
          <button type="button" className="button-sm">
            Checkout
          </button>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
