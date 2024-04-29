import React from 'react'
import'./FirstPage.css'
function PageOne() {
  return (
    <div><h3 className='style'>SELECTED HOSPITAL : XYZ HOSPITAL,KUNIYAMUTHUR,COIMBATORE -641008.</h3>
    <h4 className='one'>DOCTORS AVAILABLE:</h4>
    <p className='two'>1.Dr.ARCHANA(MBBS)<br></br>
    EXPERIENCE : 5 YEARS<br></br>
    SLOTS      : 7      <br></br>
    AVAILABILITY : 9-12 PM ,6-10PM<br></br>
    <br></br>
    <button type='book'>BOOK SLOTS</button>
    <br>
    </br>
    <br></br>
    <br></br>
    2.Dr.GOKUL(MBBS,MD)<br></br>
    EXPERIENCE : 10 YEARS<br></br>
    SLOTS      : 2      <br></br>
    AVAILABILITY : 6-11PM<br></br>
    <br></br>
    <button type='book'>BOOK SLOTS</button>
    <br></br>
    <br></br>
    <br></br>
    2.Dr.DHANUSH(MBBS)<br></br>
    EXPERIENCE : 6 YEARS<br></br>
    SLOTS      : 11      <br></br>
    AVAILABILITY : 6-12PM ,4-11PM<br></br>
    <br></br>
    <button type='book'>BOOK SLOTS</button>
    <br></br>
    <br></br>
    </p>
    </div>
  )
}

export default PageOne