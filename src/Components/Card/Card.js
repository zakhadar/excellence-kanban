import React, { useState } from 'react'
import './Card.css'
import Chip from '../Chip/Chip'
import Dropdown from '../Dropdown/Dropdown'
import { Clock, MoreHorizontal, CheckSquare, Check } from 'react-feather'

export default function Card(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className='card'>
      <div className='card_top'>
        <div className='card_top_labels'>
        {props.card?.labels?.map((item, index)=>{
          return <Chip key={index} text={item.text} color={item.color}/>
        })}
        </div>
        <div className='card_top_more' onClick={()=> setShowDropdown(true)}>
          <MoreHorizontal />
          {showDropdown && (
              <Dropdown onClose={()=> setShowDropdown(false)}>
                <div className='card_dropdown'>
                  <p>Delete Card</p>
                </div>
              </Dropdown>
          )}
        </div>
      </div>
      <div className='card_title'>
        {props.card?.title}
      </div>
      <div className='card_footer'>
        <p>
          <Clock className='card_footer_icon' /> {props.card?.date}
        </p>
        <p>
          <CheckSquare className='card_footer_icon' />
          1/4
        </p>
      </div>
    </div>
  )
}
