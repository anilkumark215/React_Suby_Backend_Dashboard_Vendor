import React, {useState,useEffect} from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Login from '../components/forms/Login'
import Register from '../components/forms/Register'
import AddFirm from '../components/forms/AddFirm'
import AddProduct from '../components/forms/AddProduct'
import Welcome from '../components/Welcome'
import AllProducts from '../components/AllProducts'

const LandingPage = () => {
 
  const [showLogin ,setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [showFirm , setShowFirm] = useState(false)
  const [showProduct ,setShowProduct] = useState(false) 
  const [showWelcome, setShowWelcome]  =  useState(false)
  const [showAllProducts, setShowAllProducts] = useState(false)
  const [shpwLogOut , setShowLogOut]  = useState(false)
  //const [showFirmTitle ,setShowFirmTitle] = useState(true)

  useEffect(()=>{
    const loginToken = localStorage.getItem('loginToken');
    if(loginToken) {
      setShowLogOut(true)
    }
  },[])

  // useEffect(() =>{
  //  const firmName = localStorage.getItem('firmName');
  //  if(firmName){
  //   setShowFirmTitle(false);
  //  }
  // },[])

  const logOutHandler = () => {
    confirm("Are you sure to logout")
    // localStorage.removeItem("loginToken");
    // localStorage.removeItem("firmId");
    localStorage.removeItem("firmName");
    setShowLogOut(false)
  //  setShowFirmTitle(true)
  }

  const showLoginHandle = () =>{
    setShowLogin(true)
    setShowRegister(false)
    setShowFirm(false)
    setShowProduct(false)
    setShowWelcome(false)
    
    setShowAllProducts(false)
  }

  const showRegisterHandler = () => {
    setShowRegister(true)
    setShowLogin(false)
    setShowFirm(false)
    setShowProduct(false)
    setShowWelcome(false)
     setShowAllProducts(false)

  }

  const showFirmHandler = () => {
  //  if(shpwLogOut){
    setShowRegister(false)
    setShowLogin(false)
    setShowFirm(true)
    setShowProduct(false)
    setShowWelcome(false)
    setShowAllProducts(false)
    // }else {
    //   alert("Please Login");
    //   setShowLogin(true)
    // }

  }

  const showProductHandler = () => {
//  if(shpwLogOut){
    setShowRegister(false)
    setShowLogin(false)
    setShowFirm(false)
    setShowWelcome(false)
    setShowProduct(true)
     setShowAllProducts(false)
  // }else{
  // alert("Please Login");
  // setShowLogin(true)
  // }
  }
 
  const showWelcomeHandler = () => {
    setShowRegister(false)
    setShowLogin(false)
    setShowFirm(false)
    setShowProduct(false)
    setShowWelcome(true)
     setShowAllProducts(false)
  }
   
  const setShowAllProductsHandler = () => {
  //  if(shpwLogOut){
    setShowRegister(false)
    setShowLogin(false)
    setShowFirm(false)
    setShowProduct(false)
    setShowWelcome(false)
    setShowAllProducts(true)
  // } else {
  //     alert("Please Login");
  //     setShowLogin(true)
  //   }
  }

  return (
    <>
       <section className='landingSection'>
        <NavBar showLoginHandle = {showLoginHandle} showRegisterHandler ={showRegisterHandler}
        shpwLogOut = {shpwLogOut}
        logOutHandler = {logOutHandler}
        />
        <div className="collectionSection">
        <SideBar showFirmHandler = {showFirmHandler} showProductHandler = {showProductHandler}
        setShowAllProductsHandler = {setShowAllProductsHandler}
       // showFirmTitle = {showFirmTitle}
        />
      {showLogin &&<Login showWelcomeHandler ={showWelcomeHandler}/>}
      {showRegister && <Register showLoginHandle = {showLoginHandle} /> }
      {showFirm &&<AddFirm/>}
       {showProduct &&<AddProduct/>}
       {showWelcome && <Welcome/>}
       {showAllProducts &&<AllProducts/>}
       
        
        </div>
        
         
       </section>
    
    </>
  )
}

export default LandingPage
