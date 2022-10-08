import React from 'react'
import './Panel.css';
import Card from '../Card/Card';
import Editable from '../Editable/Editable';
import { MoreHorizontal } from 'react-feather'

const panel = () => {
  return (
    <div className='panel'>
      <div className='panel_header'>
        <p className='panel_header_title'>To Do <span>2</span></p>
        <MoreHorizontal className='panel_header_title_more' />
      </div>
      <div className='panel_cards custom-scroll'>
        <Card />
        <Editable 
        displayClass="panels_cards_add"
        text="Add Card"
        placeholder="Enter Card Title"
        />
      </div>
    </div>
  )
}

export default panel