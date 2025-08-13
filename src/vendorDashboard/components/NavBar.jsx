import React from 'react'

const NavBar = ({showLoginHandle ,showRegisterHandler ,shpwLogOut,logOutHandler}) => {
  const firmName = localStorage.getItem('firmName')
  return (
    <div className='navSection'>
    
        <div className='company'>
            Vendor Dashboard
        </div>
        <div className="firName">
          <h4>FirmName : {firmName}</h4>
        </div>
        <div className="userAuth">
          {!shpwLogOut ?           <>
          <span onClick={showLoginHandle}>Login/</span>
            <span onClick={showRegisterHandler}>Register</span>
          </> : <span onClick={logOutHandler}>Logout</span>}

            
            
        </div>
      
    </div>
  )
}

export default NavBar
