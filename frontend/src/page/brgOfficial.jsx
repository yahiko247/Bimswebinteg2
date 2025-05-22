import React from 'react'
import Downloadpdf from '../components/download';

function BrgOfficialPage() {
  return (
    <div className='barangay' id='example'>
      <h1>Brangay Official</h1>
      <Downloadpdf rootElementId="example" downloadFileName="test"/>
    </div>
  )
}

export default BrgOfficialPage;
