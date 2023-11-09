import React, { useEffect } from 'react'
import SliderComponent from './SliderComponet'
// import Product from './AllCategoryProduct'
// import DealofDay from './DealofDay'
import BestMobile from './BestMobile'
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { setProducts, selectProducts } from "../../Store/productSlice";
import AllCategoryProduct from './AllCategoryProduct'


function Home() {
  const product  = useSelector(selectProducts);
  console.log(" product",product)
  const dispatch=useDispatch()
  useEffect(()=>{
    const fetchHomedata=async()=>{
      try{
        const homedata=await axios.get("https://ecommerce-server-hpa9.onrender.com/product")
        console.log(homedata.data)
        dispatch(setProducts((homedata.data.mobile)))
        dispatch(setProducts((homedata.data.laptop)))
        dispatch(setProducts((homedata.data.jewellary)))
        dispatch(setProducts((homedata.data.watches)))
      }
      catch(e){
        console.log("error during fetch data",e)
      }
      
    }
    fetchHomedata()
  },[dispatch])
  return (
    <div>
     
       
      <SliderComponent/>
      <h2>Best Mobile</h2>
      <BestMobile/>
      <h2>All Category Product</h2>
      <AllCategoryProduct/>
      
      
    </div>
  )
}

export default Home
