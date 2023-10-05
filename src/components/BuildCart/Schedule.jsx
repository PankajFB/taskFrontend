import React from 'react'

import { Link, useNavigate } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ListGroup, ListGroupItem, Row, Col, ButtonGroup } from 'reactstrap';
import ProgressBar from '../SchedulePickup/Progressbar'
import './Schedule.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react'


const Schedule = () => {

    const [userId,setUserId]=useState('');
    const [matched,setMatched]=useState(false);
  
    const redirect=async()=>{
     
      const response= await fetch('http://localhost:3007/matched') 
      const data=await response.json();
        setMatched(data.matched);
  }
  
  useEffect(()=>{
  redirect();
  })
  
  
   
  const fetchUser=async()=>{
    const response= await fetch('http://localhost:3007/login');
    var data= await response.json();
    setUserId(data[0].userId);
    console.log("userId",userId);
  
  }
  if(matched===true)
     fetchUser();

    const navigate=useNavigate();
    const [mainModal, setMainModal] = useState(false);
    const [clothModal, setClothModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('women');
    const [kgModal, setKgModal] = useState(false);
const [kilogramCount, setKilogramCount] = useState(0);
    const [products, setProducts] = useState({
        women: [
            {"name": "Belt", "price": "₹59.00", "count": 0},
            {"name": "Blouse", "price": "₹99.00", "count": 0},
            {"name": "Blouse Designer", "price": "₹159.00", "count": 0},
            {"name": "Blouse Heavy Work", "price": "₹129.00", "count": 0},
            {"name": "Blouse Normal", "price": "₹99.00", "count": 0},
            {"name": "Boot", "price": "₹399.00", "count": 0},
            {"name": "Cap ( Casual / Woolen )", "price": "₹99.00", "count": 0},
            {"name": "Caps Woolen", "price": "₹129.00", "count": 0},
            {"name": "Chadar", "price": "₹199.00", "count": 0},
            {"name": "Chadar Muga and Pator", "price": "₹239.00", "count": 0},
            {"name": "Choli", "price": "₹299.00", "count": 0},
            {"name": "Choli + Lehanga + Dupatta", "price": "₹699.00", "count": 0},
            {"name": "Coat - Long", "price": "₹229.00", "count": 0},
            {"name": "Coat - Short", "price": "₹179.00", "count": 0},
            {"name": "Designer Choli + Lehanga + Duppatta", "price": "₹1499.00", "count": 0},
            {"name": "Designer Kurta", "price": "₹299.00", "count": 0},
            {"name": "Designer Lehanga / ghagra", "price": "₹399.00", "count": 0},
            {"name": "Dhara", "price": "₹359.00", "count": 0},
            {"name": "Dress", "price": "₹149.00", "count": 0},
            {"name": "Dress ( Cotton )", "price": "₹219.00", "count": 0}
        ]
        ,
        men: [
            {"name": "Belt", "price": "₹59.00", "count": 0},
            {"name": "Blazer / Coat - Long", "price": "₹399.00", "count": 0},
            {"name": "Blazer / Coat - Short", "price": "₹299.00", "count": 0},
            {"name": "Boots leather", "price": "₹599.00", "count": 0},
            {"name": "Cap ( Casual / Woolen )", "price": "₹99.00", "count": 0},
            {"name": "Combo - Shirt and Pant", "price": "₹149.00", "count": 0},
            {"name": "Dhoti Heavy", "price": "₹169.00", "count": 0},
            {"name": "Dhoti Normal", "price": "₹109.00", "count": 0},
            {"name": "Dhoti / Lungi ( Silk )", "price": "₹119.00", "count": 0},
            {"name": "Formal and Casual Trousers / Pants", "price": "₹109.00", "count": 0},
            {"name": "Gloves ( Leather )", "price": "₹369.00", "count": 0},
            {"name": "Gloves ( Woolen )", "price": "₹69.00", "count": 0},
            {"name": "Handkerchief", "price": "₹29.00", "count": 0},
            {"name": "Hats", "price": "₹29.00", "count": 0},
            {"name": "Indo Western", "price": "₹696.00", "count": 0},
            {"name": "Jacket - Faux fur Long", "price": "₹899.00", "count": 0},
            {"name": "Jacket - Faux fur Short", "price": "₹799.00", "count": 0},
            {"name": "Jacket Leather", "price": "₹799.00", "count": 0},
            {"name": "Jacket Normal Long", "price": "₹249.00", "count": 0},
            {"name": "Jacket Normal Short", "price": "₹299.00", "count": 0}
        ]
        ,
        kids: [
            {"name": "Blouse", "price": "₹39.00", "count": 0},
            {"name": "Blouse / Top", "price": "₹69.00", "count": 0},
            {"name": "Choli + Lehanga + Dupatta", "price": "₹399.00", "count": 0},
            {"name": "Coat", "price": "₹179.00", "count": 0},
            {"name": "Combo - Shirt and Pant ( 2 pcs set )", "price": "₹79.00", "count": 0},
            {"name": "Cotton Frock", "price": "₹149.00", "count": 0},
            {"name": "Designer Frock", "price": "₹299.00", "count": 0},
            {"name": "Dress", "price": "₹119.00", "count": 0},
            {"name": "Dress ( Heavy )", "price": "₹249.00", "count": 0},
            {"name": "Dungaree ( Short / Long )", "price": "₹149.00", "count": 0},
            {"name": "Ethnic Kurta set - 2pcs", "price": "₹199.00", "count": 0},
            {"name": "Ethnic wear ( Normal / Heavy work )", "price": "₹299.00", "count": 0},
            {"name": "Frock", "price": "₹119.00", "count": 0},
            {"name": "Jacket", "price": "₹149.00", "count": 0},
            {"name": "Jeans", "price": "₹65.00", "count": 0},
            {"name": "Kurta + Pants / Salwar / Churidar + Dupatta", "price": "₹299.00", "count": 0},
            {"name": "Pyjama", "price": "₹45.00", "count": 0},
            {"name": "Shirt", "price": "₹69.00", "count": 0},
            {"name": "Shorts", "price": "₹49.00", "count": 0},
            {"name": "Skirt", "price": "₹89.00", "count": 0}
        ]
        ,
        household: [
            {"name": "Bag", "price": "₹550.00", "count": 0},
            {"name": "Bagpack Large", "price": "₹499.00", "count": 0},
            {"name": "Bagpack Medium", "price": "₹349.00", "count": 0},
            {"name": "Bagpack Small", "price": "₹299.00", "count": 0},
            {"name": "Bath Mat ( Large )", "price": "₹89.00", "count": 0},
            {"name": "Bath Mat ( Small )", "price": "₹49.00", "count": 0},
            {"name": "Bath Robe ( Big )", "price": "₹89.00", "count": 0},
            {"name": "Bath Robe ( Medium )", "price": "₹69.00", "count": 0},
            {"name": "Bath Robe ( Small )", "price": "₹59.00", "count": 0},
            {"name": "Bath Towel", "price": "₹59.00", "count": 0},
            {"name": "Bed Cover Double", "price": "₹349.00", "count": 0},
            {"name": "Bed Cover Single", "price": "₹249.00", "count": 0},
            {"name": "Bed Sheet Double", "price": "₹199.00", "count": 0},
            {"name": "Bed Sheet Single", "price": "₹119.00", "count": 0},
            {"name": "Blanket Double", "price": "₹449.00", "count": 0},
            {"name": "Blanket Duvet ( Double )", "price": "₹899.00", "count": 0},
            {"name": "Blanket Duvet ( Single )", "price": "₹699.00", "count": 0},
            {"name": "Blanket Single", "price": "₹349.00", "count": 0},
           
        ],
        luxury:[
            {"name": "Blouse / Top", "price": "₹199.00", "count": 0},
            {"name": "Blouse / Top", "price": "₹299.00", "count": 0},
            {"name": "Choli + Lehanga", "price": "₹799.00", "count": 0},
            {"name": "Choli + Lehanga + Dupatta", "price": "₹999.00", "count": 0},
            {"name": "Coat", "price": "₹649.00", "count": 0},
            {"name": "Dress", "price": "₹599.00", "count": 0},
            {"name": "Dupatta", "price": "₹189.00", "count": 0},
            {"name": "Dupatta Designer", "price": "₹249.00", "count": 0},
            {"name": "Jacket - Short ( including leather )", "price": "₹499.00", "count": 0},
            {"name": "Kameez / Kurta", "price": "₹349.00", "count": 0},
            {"name": "Kurta + Pants / Salwar / Churidar", "price": "₹425.00", "count": 0},
            {"name": "Kurta + Pants / Salwar / Churidar + Dupatta", "price": "₹599.00", "count": 0},
            {"name": "Ladies Suit 2 Pc", "price": "₹399.00", "count": 0},
            {"name": "Ladies Suit 3 Pc", "price": "₹499.00", "count": 0},
            {"name": "Lehanga / Flared Skirt", "price": "₹699.00", "count": 0},
            {"name": "Overcoat", "price": "₹539.00", "count": 0},
            {"name": "Pyjama / Pants / Salwar / Churidar", "price": "₹129.00", "count": 0},
            {"name": "Saree ( Embroidered / Heavy )", "price": "₹539.00", "count": 0},
            {"name": "Shawl - Pashmina", "price": "₹899.00", "count": 0},
            {"name": "Shawl - Toosh", "price": "₹999.00", "count": 0}
        ]
        
    });
    // const [ orderDetails, setOrder] = useState([])
    const [orderDetails, setOrder] = useState(() => {
        const savedOrderDetails = localStorage.getItem('orderDetails');
        return savedOrderDetails ? JSON.parse(savedOrderDetails) : [];
      });
    const [servicesType, setservicesType] = useState({})

    // const toggleMainModal = (e) =>{ 
    //     // setservicesType(e);
    //     setMainModal(!mainModal);
        

    // }
    
    const handleToggleMainModal = (serviceType = "") => () => {
        setMainModal(!mainModal);
        setservicesType(serviceType);
    };
    const toggleClothModal = () => setClothModal(!clothModal);


    const toggleKgModal = () => setKgModal(!kgModal);

    const incrementCount = (index) => {
        localStorage.setItem("isbyCloth",true);
        const updatedProducts = [...products[selectedCategory]];
        updatedProducts[index].count += 1;
        setProducts(prev => ({ ...prev, [selectedCategory]: updatedProducts }));
        
        const order={
            category:selectedCategory,
           
            name: updatedProducts[index].name,
            price: updatedProducts[index].price,
            quantity: updatedProducts[index].count,
            services:servicesType

        }
        // orderDetails.push(order)
        setOrder(prev => ({ ...prev, [servicesType]: order }));
        console.log(orderDetails)
        
    };
    
    useEffect(() => {
        localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
        // localStorage.setItem('isServiceAdded',true);
      }, [orderDetails]);

    const decrementCount = (index) => {
        const updatedProducts = [...products[selectedCategory]];
        if (updatedProducts[index].count > 0) {
            updatedProducts[index].count -= 1;
            setProducts(prev => ({ ...prev, [selectedCategory]: updatedProducts }));
        }
    };

    const handleSubmit = () => {
        // Process the orderDetails (for now, we'll just console log it)
        localStorage.setItem('isServiceAdded',true);
        console.log("Submitted order details:", orderDetails);
    
      
        // Clear the orderDetails from state
        // setOrder([]);
      
        // Clear the orderDetails from local storage
        // localStorage.removeItem('orderDetails');
      
        // Close the modal (assuming you want to close the clothModal after submitting)
        toggleClothModal();
      };


      const handleKgOrder = () => {
        localStorage.removeItem('isbyCloth');
        localStorage.setItem('isbyWeight',true);
        setOrder([]);
        if(kilogramCount <= 0) {
            // If the kg count is 0 or less, show an error message to the user.
            alert("Please select a valid weight.");
            return;
        }
        
        // Create the kg order object.
        const kgOrder = {
            type: "Dry Cleaning by Kg",
            weight: kilogramCount,
            service: "DryCleaning",
        };
    
        // Add the kg order to the orderDetails list.
        setOrder(prevOrders => [...prevOrders, kgOrder]);
    
        // Close the kgModal.
        toggleKgModal();
    
        // Show a confirmation message to the user.
        alert("Order placed successfully!");
        localStorage.setItem('isServiceAdded',true);

        console.log()
    };

    const handleNavigation=()=>{
        if(localStorage.getItem('isServiceAdded')){
            navigate(`/schedulepickup/${userId}`);
        }
        else{
            alert('please select some service...')
        }
    }
  return <>
  <ProgressBar/>

  <div>
      <div class="container mt-5">
     
    <h2 class="mb-4 text-center text-dark">Choose from our services</h2>
   
</div>
<div class="container mt-5 ">
    <div class="row rounded border p-2 shadow">
        
        <div class="col-md-3">
        <img src="https://stoffcare.online/wp-content/uploads/2023/09/gm-2afcf653-d966-4cda-9789-79cd1710023e-ironinglead-300x300.jpeg" alt="Description" class="img-fluid rounded-circle"/>

            </div>
        
        
        <div class="col-md-3">
          <h3>Dry Cleaning</h3>
          <ul>
            <li>Formal wear, Ornamental</li>
            <li>Blankets, Quilts, Curtains</li>
            <li>Bags, Shoes, Soft Toys</li>
          </ul>
           
        </div>
        
       
        <div class="col-md-3 ">
            <p className='m-5 text-dark'>3-5 Days
₹24/Pc onwards</p>
        </div>
        
        
        <div class="col-md-3 d-flex align-items-center">
            <div class="form-check">
                <input type="checkbox" class="form-check-input" onClick={handleToggleMainModal("DryCleaning" )} id="exampleCheck" />
                <label class="form-check-label" for="exampleCheck" >Check me out</label>
            </div>
        </div>
    </div>
</div>
<div class="container mt-5">
    <div class="row rounded border p-3 shadow">
        
        <div class="col-md-3">
        <img src="https://img.freepik.com/free-vector/iron-hand-realistic-illustration_1284-57392.jpg" alt="Description" class="img-fluid rounded-circle"/>

            </div>
        
        
        <div class="col-md-3">
          <h3>Steam Iron</h3>
            <ul>
              <li>Vacuum Steam Iron</li>
              <li>Individually Packed-Hanger or Folded</li>
            </ul>
        </div>
        
       
        <div class="col-md-3">
            <p className='m-5'>10 days, 2 months</p>
        </div>
        
        
        <div class="col-md-3 d-flex align-items-center">
            <div class="form-check">
                <input type="checkbox" class="form-check-input" onClick={handleToggleMainModal("Steam Iron")} id="exampleCheck" />
                <label class="form-check-label"  for="exampleCheck" >Check me out</label>
            </div>
        </div>
    </div>
</div>
<div class="container mt-5">
    <div class="row rounded border p-3 shadow">
        
        <div class="col-md-3">
        <img src="https://img.freepik.com/premium-photo/washing-machine-flying-clothes-white-background_495423-31986.jpg?w=2000" alt="Description" class="img-fluid rounded-circle"/>

            </div>
        
        
        <div class="col-md-3">
          <h3>Premium Laundry</h3>
           <ul>
            <li>Formal wear</li>
            <li>Bedsheets, Dohars</li>
            <li>Delicates etc.</li>
           </ul>
           </div>
           <div class="col-md-3">
            <p className='m-5'>10 days, 2 months</p>
        </div>
        
        
        <div class="col-md-3 d-flex align-items-center">
            <div class="form-check">
                <input type="checkbox" class="form-check-input" onClick={handleToggleMainModal("PremiumLaundry")} id="exampleCheck"/>
                <label class="form-check-label" for="exampleCheck">Check me out</label>
            </div>
        </div>
   
</div>
</div>
<div class="container mt-5">
    <div class="row rounded border p-3 shadow">
        
        <div class="col-md-3">
        <img src="https://stoffcare.online/wp-content/uploads/2023/09/fluffy-cashmere-cardigan-warm-elegant-design-generated-by-ai-300x300.jpg" alt="Fluffy Cashmere Cardigan" class="img-fluid rounded-circle"/>

            </div>
        
        
        <div class="col-md-3">
          <h3>LAUNDRY - WASH & FOLD</h3>
            <ul>
              <li>Laundry by Kilo</li>
              <li>Stack Packing</li>
              <li>Intimate wear, Socks</li>
            </ul>
        </div>
        
       
        <div class="col-md-3">
            <p className='m-5'>10 days, 2 months</p>
        </div>
        
        
        <div class="col-md-3 d-flex align-items-center">
            <div class="form-check">
                <input type="checkbox" class="form-check-input" onClick={handleToggleMainModal("LAUNDRYWASHFOLD")} id="exampleCheck" />
                <label class="form-check-label" for="exampleCheck">Check me out</label>
            </div>
        </div>
    </div>
</div>
<div class="container mt-5">
    <div class="row rounded border p-3 shadow">
        
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSxrBxMhIWxNdOIPYgZYECIzzNfC53E9Cd8DyWEtCWDSUNhHp29KSMqhICk_rHQIp8uPc&usqp=CAU" alt="Description" class="rounded-circle"/>
        </div>
        
        
        <div class="col-md-3">
          <h3><span>LAUNDRY - WASH & IRON</span></h3>
            <ul>
              <li>Laundry by Kilo</li>
              <li>Stack Packing</li>
              <li>Vacuum Steam Iron</li>
            </ul>
        </div>
        
       
        <div class="col-md-3">
            <p className='m-5'>10 days, 2 months</p>
        </div>
        
        
        <div class="col-md-3 d-flex align-items-center">
            <div class="form-check">
                <input type="checkbox" class="form-check-input" onClick={handleToggleMainModal("LAUNDRYWASHIRON")} id="exampleCheck" />
                <label class="form-check-label" for="exampleCheck ">Check me out</label>
            </div>
        </div>
    </div>
</div>
<div class="container mt-5 mb-5">
    <div class="row">
       
        <div class="col-sm-4"></div>

       
        <div class="col-sm-2 m-3">
            <Link to={`/Home`}>
            <button class="btn btn-outline-secondary btn-block m-2">Previous</button>
            </Link>
        </div>

        <div class="col-sm-2 m-3">
            <button class="btn btn-primary btn-block m-2" onClick={handleNavigation}>Next</button>
            
        </div>

        
        <div class="col-sm-4"></div>
    </div>
</div>

<div className="container mt-5">
            {/* <Button color="primary" onClick={handleToggleMainModal} className="mb-3 w-100">Open Dry Cleaning Modal</Button> */}

            <div className="container mt-5">
                <Modal isOpen={mainModal} toggle={handleToggleMainModal()}>
                    <ModalHeader toggle={handleToggleMainModal()}>Select Order</ModalHeader>
                    <ModalBody>
                        <Button color="secondary " block className="mb-2 m-2" onClick={() => { handleToggleMainModal(); toggleClothModal(); }}>By Cloth</Button>
                        <Button color="secondary "className="mb-2 m-2" block onClick={toggleKgModal} >By Kilogram</Button>
                    </ModalBody>
                </Modal>

                <Modal isOpen={clothModal} toggle={toggleClothModal}>
                    <ModalHeader toggle={toggleClothModal}>Select Products</ModalHeader>
                    <ModalBody>
                        <ButtonGroup className="mb-3 w-100 d-flex">
                            {['women', 'men', 'kids', 'household', 'luxury'].map(category => (
                                <Button 
                                    color={selectedCategory === category ? "primary" : "secondary"}
                                    onClick={() => setSelectedCategory(category)}
                                    key={category}
                                    className="m-2"
                                >
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </Button>
                            ))}
                        </ButtonGroup>
                        <ListGroup>
                            {products[selectedCategory] && products[selectedCategory].map((product, index) => (
                                <ListGroupItem key={index}>
                                    <Row>
                                        <Col xs="4">{product.name}</Col>
                                        <Col xs="3">{product.price}</Col>
                                        <Col xs="5" className="d-flex justify-content-end">
                                            <Button color="danger" size="sm" onClick={() => decrementCount(index)}>-</Button>
                                            <span className="mx-3">{product.count}</span>
                                            <Button color="success" size="sm" onClick={() => incrementCount(index)}>+</Button>
                                        </Col>
                                    </Row>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={toggleClothModal}>Cancel</Button>
                        <Button color="primary" onClick={handleSubmit}>Submit</Button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={kgModal} toggle={toggleKgModal} className="modal-sm">
    <ModalHeader toggle={toggleKgModal}>Order By Kilogram</ModalHeader>
    <ModalBody>
        <h4 className="">Dry Cleaning by Kg</h4>
        <p className="">Experience convenience with our dry cleaning service tailored to your needs. Simply place an order and have your clothes expertly cleaned, with pricing determined by the weight of your garments in kilograms.</p>
        <div className="d-flex justify-content-center align-items-center">
            <Button color="" onClick={() => setKilogramCount(Math.max(0, kilogramCount - 1))}>-</Button>
            <span className="mx-4">{kilogramCount} kg</span>
            <Button color="" onClick={() => setKilogramCount(kilogramCount + 1)}>+</Button>
        </div>
    </ModalBody>
    <ModalFooter>
        <Button color="secondary" onClick={toggleKgModal}>Cancel</Button>
        <Button color="primary" onClick={handleKgOrder}>Place Order</Button>
    </ModalFooter>
</Modal>
            </div>
        </div>
</div>
  
  </>
}

export default Schedule


