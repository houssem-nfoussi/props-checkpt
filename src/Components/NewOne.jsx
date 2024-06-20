import React from 'react'

const NewOne = ({el}) => {
  return (
    <div className='card'>
      <img src={el.image} alt="" />
      <h2>name:{el.name}</h2>
      <h2>team:{el.team}</h2>
      <h2>jersey number:{el.nb}</h2>
      <h2>nationality:{el.nationality}</h2>
      <h2>age:{el.age}</h2>
    </div>
  )
}

export default NewOne
