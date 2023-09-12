import React from 'react'

const ItemListConteiner = ({greeting}) => {
  return (
    <div className='itemList'>
        <h1 className='greeting'>{greeting}</h1>
    </div>
  )
}

export default ItemListConteiner
