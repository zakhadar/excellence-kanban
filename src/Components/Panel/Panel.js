import React, { useState } from 'react'
import './Panel.css';
import Card from '../Card/Card';
import Editable from '../Editable/Editable';
import { MoreHorizontal } from 'react-feather'
import Dropdown from '../Dropdown/Dropdown';

export default function Panel(props) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className='panel'>
      <div className='panel_header'>
        <p className='panel_header_title'>{props.panel?.title} <span>{props.panel?.cards?.lenght}</span></p>
        <div className='panel_top_more' onClick={()=> setShowDropdown(true)}>
          <MoreHorizontal />
          {showDropdown && (
              <Dropdown onClose={()=> setShowDropdown(false)}>
                <div className='panel_dropdown'>
                  <p onClick={()=> props.removePanel(props.panel?.id)}>Delete Panel</p>
                </div>
              </Dropdown>
          )}
        </div>
      </div>
      <div className='panel_cards custom-scroll'>
        {props.panel?.cards?.map((item)=>{
          return <Card key={item.id} card={item}/>
        })}
        <Editable 
        displayClass="panels_cards_add"
        text="Add Card"
        placeholder="Enter Card Title"
        />
      </div>
    </div>
  )
}
