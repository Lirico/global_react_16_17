


import React from 'react'

const Cita = ({data}) => {

    const {cita, autor} = data;

  return (
    <>
        <div className='cita'>
            <blockquote>
                <i>"{cita}"</i>
            </blockquote>
            <h3>- {autor}</h3>
        </div>
    </>
  )
}

export default Cita