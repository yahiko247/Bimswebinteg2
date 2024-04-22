import React from 'react'
import Downloadpdf from '../components/download'

function BrgClearance() {
  return (
    <div className='Clearance' id='clearance'>
        <h1> Clearance</h1>
        <Downloadpdf rootElementId="clearance" downloadFileName="Brg Clearance"/>
    </div>
  )
}

export default BrgClearance
