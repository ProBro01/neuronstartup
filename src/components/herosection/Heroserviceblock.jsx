import React from 'react'

export const Heroserviceblock = (props) => {
  return (
    <div className='hero__section-block'>
        <img src={props.imgurl} />
        <h3>{props.heading}</h3>
    </div>
  )
}
