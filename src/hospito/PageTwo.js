import React from 'react'
import'./SecondPage.css'

function PageTwo() {
  return (
    <div><h3 className='one'>BOOK SLOTS :</h3>
    <p className='head'>(CLICK TO BOOK SLOTS)</p>
    <p className='head1'>MORNING SLOTS:</p>
    <div className='box1'>
    <button type='book1'>SLOT 1</button>

    <button type='book2'>SLOT 2</button>

    <button type='book3'>SLOT 3</button>

    <br></br><br></br>
    </div>
    <p className='head2'>EVENING SLOTS:</p>
    <div className='box2'>
    <button type='book4'>SLOT 4</button>

    <button type='book5'>SLOT 5</button>

    <button type='book6'>SLOT 6</button>
    <br></br>
    <br></br>
    <br></br>
 

    </div>
    <h4 className='end'>DISCLAIMER:</h4>
    <p className='end1'>
    The information contained in this website  is for general information purposes only. The information is provided by the specified Hospital and while we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.

In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.

    </p>
    </div>

  )
}

export default PageTwo