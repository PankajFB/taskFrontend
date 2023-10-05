import React from 'react'
import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './services.css'
import { Link } from 'react-router-dom';

const Services = () => {
  return <>
        <div>
  <div className="hero-section" style={{height:30+"rem"}}>
            <Container className="hero-content ">
                <h1 className="hero-title ">Laundry & Dry</h1>
                <h1 className="hero-title">Cleaning Service</h1>
                <Link to='/login'>
                <Button variant="primary">SCHEDULE A PICKUP</Button>
                </Link>
            </Container>
        </div>
        <div class="container mt-5">
    <div class="row">
      
        <div class="col-md-6 d-flex align-items-center justify-content-center">
            <img src="https://stoffcare.in/static/media/LeftImg.0a549f5ce2e5121b5388.png" alt="Descriptive Alt Text" class="img-fluid"/>
        </div>
        
       
        <div class="col-md-6 d-flex align-items-center">
          
            <p> <h4>LET's SNEEK PEEK INTO THE PROCESS FOR A FLAWLESS FINISH</h4>Well, the cleaning process can be very cumbersome but with our expert and professional in-house team we have made each step convenient for our users. In the initial stage, we make your clothes picked at our service station with free pick up and drop service. Usually the cleaning cycle , goes through 6-7 stages. The first cycle completes by tagging the clothes. Once the tagging process completes, the machine is equipped with an eco-friendly cleaning solution & water rinses through the dirty clothes. After stains and dirt are removed, we air dry the clothes to prevent them from bleaching effect after coming into contact with harmful UV rays. Then, as per certified standards, Stoff care uses the most trusted method to imprint a flawless finish by using high-pressure vacuum stream iron. The clothes are folded, hung, or vacuumed as a stated preference with free drop service.</p>
        </div>
    </div>
    <div className="container3 ">
    <div class="container mt-5 bg-primary py-5">
    <div class="row">
       
        <div class="col-md-4">
            <div class="card">
            <img className='image-container' src="https://cdn-icons-png.flaticon.com/128/9816/9816023.png" alt="Descriptive Alt Text" class="profile-image"/>

                 <div class="card-body">
                    <h5 class="card-title">Dry Cleaning</h5>
                    <p class="card-text">Entrust your cherished garments to our expert dry cleaning service for a gentle yet thorough rejuvenation.</p>
                   
                </div>
            </div>
        </div>

       
        <div class="col-md-4">
            <div class="card">
            <img className='image-container' src="https://cdn-icons-png.flaticon.com/128/9806/9806179.png" alt="Descriptive Alt Text" class="profile-image"/>

                <div class="card-body">
                    <h5 class="card-title">Steam Ironing</h5>
                    <p class="card-text">Discover impeccable creases and polished perfection with our meticulous steam ironing techniques.</p>
                   
                </div>
            </div>
        </div>

       
        <div class="col-md-4">
            <div class="card">
            <img className='image-container' src="https://cdn-icons-png.flaticon.com/128/2230/2230884.png" alt="Descriptive Alt Text" class="profile-image"/>

                 <div class="card-body">
                    <h5 class="card-title">Premium Laundry</h5>
                    <p class="card-text">Experience the pinnacle of garment care through our premium laundry service, where attention to detail meets uncompromising quality.</p>
                  
                </div>
            </div>
        </div>
    </div>
</div>

    </div>

</div>
<div class="container mt-5 text-center">
   
    <h2>Our Process</h2>

   
    <img src="https://stoffcare.in/static/media/chart.c979ff04ccb60e4da9b6.png" alt="" class="img-fluid mx-auto d-block"/>
</div>

<div class="faq-container">
    <h2 class="text-center mb-4">Frequently Asked Questions</h2>

    <div class="accordion" id="faqAccordion">
<div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Is My Expensive And Branded Clothes Washed In The Same Way As The Casual Wear?
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-parent="#faqAccordion">
                <div class="accordion-body">
                No, our process is distinct as per the nature of the clothes. As we are obsessed with the quality of your product
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Do You Follow A Rigorous Cleaning Process.?
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-parent="#faqAccordion">
                <div class="accordion-body">
                Well, generally harsh stains need harsh washing treatment. However, the cleaning process depends on the stain.
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Do You Provide A Guarantee For Color Fade?
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-parent="#faqAccordion">
                <div class="accordion-body">
                With our professionals who take calculative decisions and informed the customer before starting the process. We don't provide a guarantee for color bleeding
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                What If Need My Clothes Washed Urgentely ?
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-parent="#faqAccordion">
                <div class="accordion-body">
                We provide an emergency service where you can get your clothes washed and ironed or washed and folded on the same day. However, an express service charge is levied for such urgent orders.
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Do You Use Fresh Water For My Laundary?
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-parent="#faqAccordion">
                <div class="accordion-body">
                Yes. At stoffcare, we are obsessed with Quality and Hygiene. We use fresh water for every wash cycle.
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Do You Use Harsh Detergent ?
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-parent="#faqAccordion">
                <div class="accordion-body">
                No. we use PH neutral and eco-friendly detergents for washing. In fact, we have different detergent compositions for different garment types. The process is gentle on your clothes, and we believe in treating your clothes with utmost care.
                 </div>
            </div>
        </div>

    </div>
</div>
   
  <div>
    
  </div>



    </div>
  </>
}

export default Services
