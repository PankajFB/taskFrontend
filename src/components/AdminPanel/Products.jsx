import React from 'react'
import Sidebar from './Sidebar'
import Services from '../Home/Services'

const Products = () => {
  return <>
    <div style={{position:'absolute'}}>
      <Sidebar/>
    </div>
    <div style={{height:'10vw',width:'80%',backgroundColor:'white',marginLeft:'18%',marginTop:'2%',borderRadius:'1vw'}}>
      <div style={{fontSize:'3vw',textAlign:'center',color:'black'}}>PRODUCTS</div>
      <Services/>
   </div>
  </>
}

export default Products
