import { BsCart4 } from "react-icons/bs";

import React from 'react'

const CartWidget = () => {
  return (
    <div className="Cartwidget">
        <BsCart4 className="icon-cart" color= "green"/>
        <p>2</p>
    </div>
  )
}

export default CartWidget