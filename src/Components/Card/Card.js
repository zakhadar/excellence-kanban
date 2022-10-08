import React from 'react'
import './Card.css'
import Chip from '../Chip/Chip'
import { Clock, MoreHorizontal, CheckSquare, Check } from 'react-feather'

const Card = () => {
  return (
    <div className='card'>
      <div className='card_top'>
        <div className='card_top_label'>
          <Chip text='test' color="green" />
          {/* <Chip text='test' color="green" close /> */}
        </div>
        <MoreHorizontal />
      </div>
      <div className='card_title'>
        Test Card title
      </div>
      <div className='card_footer'>
        <p>
          <Clock /> 29 Sept
        </p>
        <p>
          <CheckSquare />
          1/4
        </p>
      </div>
    </div>
  )
}

export default Card