import React from 'react'

import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import './services.css';
import '../BuildCart/Schedule.css'
import { Link } from 'react-router-dom';
// import Footer from './Footer';
const About = () => {
  return (
    <div>
        
         <div className="hero-section" style={{height:30+"rem"}}>
            <Container className="hero-content ">
                <h1 className="hero-title ">About Us</h1>
                {/* <h1 className="hero-title">Cleaning Service</h1> */}
                <Link to='/login'>   
                <Button variant="primary">SCHEDULE A PICKUP</Button>
                </Link>
            </Container>
        </div>
        <div class="container mt-5">
    
    <h1 className='text-center m-5'>About Us</h1>
    <h2 className='text-center bg-secondary text-white m-4'>Be stainless, where your clothes will speak the power of cleaning.!!!</h2>

    
    <div class="row">
      
        <div class="col-md-6  d-flex align-items-center">
            <img src="https://img.freepik.com/premium-photo/laundry-basket-blurred-background-modern-washing-machine_488220-17518.jpg" alt="Descriptive Alt Text" className="img-fluid my-3"/>
        </div>

       
        <div class="col-md-6 d-flex align-items-center">

            <p>
                <h1>Where does it come from?</h1>
            Stoff care is young and flourishing top laundry service provider. We are setting off on a mission where our prime aim is to eliminate the cluttered laundry industry in a simplified mechanism. At Stoff Care, We cater to all sorts of cleaning services which include laundry, steam iron, dry cleaning, and personalized cleaning solution. Our most trusted cleaning process is evident which offers you a cozy touch to your clothes. All safety measures are highly maintained while washing off stubborn dirt and stains to keep the quality of clothes intact & make the fabric skin friendly. Let's play with the dirt to make your clothes shine like a crystal with our free pickup and drop services. </p>
        </div>
    </div>
</div>
<div class="container mt-5 bg-dark">
    <div class="row ">
      
        <div class="col-md-6  d-flex align-items-center ">
            <img src="https://stoffcare.online/wp-content/uploads/2023/09/human.png" alt="Descriptive Alt Text" className="img-fluid my-3"/>
        </div>

       
        <div class="col-md-6 d-flex align-items-center">

            
                <h1 className="hero-title  ">Thousands of People Visit Our Company Every Single Day!</h1>
           </div>
    </div>
</div>

<div class="container mt-5">

    
    <h2 class="text-center mb-5">Our Promises</h2>

   
    <div class="row ">

       
        <div class="col-lg-4 col-md-6 mb-4 ">
            <div class="card shadow rounded-5">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABqCAYAAAAWYrcAAAAAAXNSR0IArs4c6QAAAPplWElmTU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAAGAAAAcgE7AAIAAAAQAAAAeIdpAAQAAAABAAAAiAAAAAAAAABgAAAAAQAAAGAAAAABQ2FudmEAU2hpdmVuZHJhIFNpbmdoAAAEkoYABwAAADwAAAC+oAEAAwAAAAEAAQAAoAIABAAAAAEAAABMoAMABAAAAAEAAABqAAAAAEFTQ0lJAAAAeHI6ZDpEQUZzN0xtbFJ5RToxOCxqOjc0NDkzNTUwMzk4Njg2NDQ1MzgsdDoyMzA4MjkxNsQCi9YAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAYSaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczpBdHRyaWI9Imh0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+Q2FudmE8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPGRjOmNyZWF0b3I+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpPlNoaXZlbmRyYSBTaW5naDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwvZGM6Y3JlYXRvcj4KICAgICAgICAgPGRjOnRpdGxlPgogICAgICAgICAgICA8cmRmOkFsdD4KICAgICAgICAgICAgICAgPHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5VbnRpdGxlZCBkZXNpZ24gLSAxPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOkFsdD4KICAgICAgICAgPC9kYzp0aXRsZT4KICAgICAgICAgPEF0dHJpYjpBZHM+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPEF0dHJpYjpUb3VjaFR5cGU+MjwvQXR0cmliOlRvdWNoVHlwZT4KICAgICAgICAgICAgICAgICAgPEF0dHJpYjpDcmVhdGVkPjIwMjMtMDgtMjk8L0F0dHJpYjpDcmVhdGVkPgogICAgICAgICAgICAgICAgICA8QXR0cmliOkV4dElkPjg2NDM1Mjc3LWIxNzEtNDc1Mi1iMDcyLWI0OGU4MmI4MmY1NDwvQXR0cmliOkV4dElkPgogICAgICAgICAgICAgICAgICA8QXR0cmliOkZiSWQ+NTI1MjY1OTE0MTc5NTgwPC9BdHRyaWI6RmJJZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC9BdHRyaWI6QWRzPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8ZXhpZjpVc2VyQ29tbWVudD4KICAgICAgICAgICAgPHJkZjpBbHQ+CiAgICAgICAgICAgICAgIDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+eHI6ZDpEQUZzN0xtbFJ5RToxOCxqOjc0NDkzNTUwMzk4Njg2NDQ1MzgsdDoyMzA4MjkxNjwvcmRmOmxpPgogICAgICAgICAgICA8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" class="card-img-top custom-image" alt="Image Description"/>
      
                 <div class="card-body ">
                    <h5 class="card-title">No Quality Compromise</h5>
                    <p class="card-text ">Our process takes care of your clothes with 100% quality assurance.</p>
                  
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4 ">
            <div class="card shadow rounded-5">
                 <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHUAAABMCAYAAABTcfjZAAAAAXNSR0IArs4c6QAAAPplWElmTU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAAGAAAAcgE7AAIAAAAQAAAAeIdpAAQAAAABAAAAiAAAAAAAAABgAAAAAQAAAGAAAAABQ2FudmEAU2hpdmVuZHJhIFNpbmdoAAAEkoYABwAAADwAAAC+oAEAAwAAAAEAAQAAoAIABAAAAAEAAAB1oAMABAAAAAEAAABMAAAAAEFTQ0lJAAAAeHI6ZDpEQUZzN0xtbFJ5RToxOCxqOjc0NDkzNTUwMzk4Njg2NDQ1MzgsdDoyMzA4MjkxNu3PiikAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAYSaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczpBdHRyaWI9Imh0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+Q2FudmE8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPGRjOmNyZWF0b3I+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpPlNoaXZlbmRyYSBTaW5naDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwvZGM6Y3JlYXRvcj4KICAgICAgICAgPGRjOnRpdGxlPgogICAgICAgICAgICA8cmRmOkFsdD4KICAgICAgICAgICAgICAgPHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5VbnRpdGxlZCBkZXNpZ24gLSAyPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOkFsdD4KICAgICAgICAgPC9kYzp0aXRsZT4KICAgICAgICAgPEF0dHJpYjpBZHM+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPEF0dHJpYjpUb3VjaFR5cGU+MjwvQXR0cmliOlRvdWNoVHlwZT4KICAgICAgICAgICAgICAgICAgPEF0dHJpYjpDcmVhdGVkPjIwMjMtMDgtMjk8L0F0dHJpYjpDcmVhdGVkPgogICAgICAgICAgICAgICAgICA8QXR0cmliOkV4dElkPjMzNDFiZmUzLWZlYzgtNGM4Mi05YjY2LTVmMTc1MzZjOTRlODwvQXR0cmliOkV4dElkPgogICAgICAgICAgICAgICAgICA8QXR0cmliOkZiSWQ+NTI1MjY1OTE0MTc5NTgwPC9BdHRyaWI6RmJJZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC9BdHRyaWI6QWRzPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8ZXhpZjpVc2VyQ29tbWVudD4KICAgICAgICAgICAgPHJkZjpBbHQ+CiAgICAgICAgICAgICAgIDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+eHI6ZDpEQUZzN0xtbFJ5RToxOCxqOjc0NDkzNTUwMzk4Njg2NDQ1MzgsdDoyMzA4MjkxNjwvcmRmOmxpPgogICAgICAgICAgICA8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" class="card-img-top custom-image" alt="Image Description"/>
      
                <div class="card-body">
                    <h5 class="card-title">Fastest Delivery</h5>
                    <p class="card-text">Want a wardrobe update in a flash? Choose our fastest delivery option. We ensure your clothes reach your doorstep swiftly, and the best part? No extra charges for this speedy service.</p>
                    
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card shadow rounded-5">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABGCAYAAACaGVmHAAAAAXNSR0IArs4c6QAAAPplWElmTU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAAGAAAAcgE7AAIAAAAQAAAAeIdpAAQAAAABAAAAiAAAAAAAAABgAAAAAQAAAGAAAAABQ2FudmEAU2hpdmVuZHJhIFNpbmdoAAAEkoYABwAAADwAAAC+oAEAAwAAAAEAAQAAoAIABAAAAAEAAABFoAMABAAAAAEAAABGAAAAAEFTQ0lJAAAAeHI6ZDpEQUZzN0xtbFJ5RToxOCxqOjc0NDkzNTUwMzk4Njg2NDQ1MzgsdDoyMzA4MjkxNslc9u4AAAAJcEhZcwAADsQAAA7EAZUrDhsAAAYSaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczpBdHRyaWI9Imh0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+Q2FudmE8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPGRjOmNyZWF0b3I+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpPlNoaXZlbmRyYSBTaW5naDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwvZGM6Y3JlYXRvcj4KICAgICAgICAgPGRjOnRpdGxlPgogICAgICAgICAgICA8cmRmOkFsdD4KICAgICAgICAgICAgICAgPHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5VbnRpdGxlZCBkZXNpZ24gLSAzPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOkFsdD4KICAgICAgICAgPC9kYzp0aXRsZT4KICAgICAgICAgPEF0dHJpYjpBZHM+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPEF0dHJpYjpUb3VjaFR5cGU+MjwvQXR0cmliOlRvdWNoVHlwZT4KICAgICAgICAgICAgICAgICAgPEF0dHJpYjpDcmVhdGVkPjIwMjMtMDgtMjk8L0F0dHJpYjpDcmVhdGVkPgogICAgICAgICAgICAgICAgICA8QXR0cmliOkV4dElkPjZlNDYxYTQyLTdjZTQtNDNhNC05MDAzLWRhMmY0MDNiZGU3ZjwvQXR0cmliOkV4dElkPgogICAgICAgICAgICAgICAgICA8QXR0cmliOkZiSWQ+NTI1MjY1OTE0MTc5NTgwPC9BdHRyaWI6RmJJZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC9BdHRyaWI6QWRzPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8ZXhpZjpVc2VyQ29tbWVudD4KICAgICAgICAgICAgPHJkZjpBbHQ+CiAgICAgICAgICAgICAgIDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+eHI6ZDpEQUZzN0xtbFJ5RToxOCxqOjc0NDkzNTUwMzk4Njg2NDQ1MzgsdDoyMzA4MjkxNjwvcmRmOmxpPgogICAgICAgICAgICA8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" class="card-img-top custom-image" alt="Image Description"/>
               <div class="card-body">
                    <h5 class="card-title">Complete Transparency</h5>
                    <p class="card-text">At our core, we believe in honesty and clarity. Every step of our process is laid out openly for our customers.  </p>
                    
                </div>
            </div>
        </div>

    </div> 
</div> 
<div class="container mt-5">


<h2 class="text-center mb-5">Our Founders</h2>


<div class="row">

   
    <div class="col-lg-4 col-md-6 mb-4">
        <div class="card shadow-sm rounded-5">
        <img src="https://stoffcare.online/wp-content/uploads/2023/09/pic1.jpg" class="card-img-top custom-image" alt="Image Description"/>
            <div class="card-body">
                <h5 class="card-title">MR. SATENDRA SINGH SURYA</h5>
                <h6 class="card-title">Operation Head</h6>
                <p class="card-text">Started from a very young age with a mindset of doing his best in his past job. He started it with three main principles of his business model is established. To maintain and keep the quality of clothes while washing off stubborn stains through the harsh cleaning process, to reduce the time of ironing by household individuals, and to reduce the turn around time of monthly cost and time that is involved in cleaning the clothes. MR. SATENDRA SINGH SURYA Operation Head</p>
                <div>
                    <a href="#" class="mr-2"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="mr-2"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="mr-2"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-4 col-md-6 mb-4">
        <div class="card shadow-sm rounded-5">
        <img src="https://stoffcare.online/wp-content/uploads/2023/09/pic-3.jpg" class="card-img-top custom-image" alt="Image Description"/>
            <div class="card-body">
                <h5 class="card-title">MR. PANKAJ KUMAR</h5>
                <h6 class="card-title">Technical Director</h6>
                <p class="card-text">Being worked for two decades in Siemens Energy Pvt. Ltd as a technical expert, which is a power generation company. He gained a vast amount of technical knowledge and being a good friend of Mr. Pankaj decided to put his expertise into the laundry business with a vision that helping many homeowners to get the cost of monthly cleaning reduced and through his extensive research he finally found an eco-friendly yet a non-irritant cleaning process which will maintain the coziness and softness of your clothes. His vision is to keep pace with the new techniques that will set the industry well-organized.
</p>
                <div>
                    <a href="#" class="mr-2"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="mr-2"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="mr-2"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-4 col-md-6 mb-4">
        <div class="card shadow-sm rounded-5">
        <img src="https://stoffcare.online/wp-content/uploads/2023/09/pic-2-scaled.jpg" class="card-img-top custom-image" alt="Image Description"/>
             <div class="card-body">
                <h5 class="card-title">MR. RAHUL DEV</h5>
                <h6 class="card-title">Business Development</h6>
                <p class="card-text">Communication is a great way to articulate and bridge the gap of misunderstanding. To solve the issue, our director, Mr. Rahul Dev, wished to join Stoff Care as an operational and business management head. His expert and witty communication skills help him build fortified relationships with valuable customers. And not only does he develop good customer relationships, but he also takes care of the whole operational department under his supervision. Having more than 10 years of experience in the communication industry makes him the best person to closely work with the department and the customers.
</p>
                <div>
                    <a href="#" class="mr-2"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="mr-2"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="mr-2"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div>

   
</div> 
</div> 
<div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6 col-sm-12"> 
                <img src="https://stoffcare.online/wp-content/uploads/2023/09/6.png" alt="Sample Image" class="img-fluid"/> 
            </div>
        </div>
    </div>
<div class="container m-4">
        <div class="review-container">
            <div class="reviewer-info">
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJ0AlgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAABQQGAQMHAgj/xAA5EAACAAQEAwUGBQQCAwAAAAABAgADBBEFEiExIkFRBhMyQmEUI3GBocEzUpGx0UNjgvAHFSRy4f/EABgBAAMBAQAAAAAAAAAAAAAAAAACAwEE/8QAIxEAAgIDAQEAAgIDAAAAAAAAAAECEQMSITFBIlEyYQQTFP/aAAwDAQACEQMRAD8A7Sbs120K7DrBfi7y3H+WA307zx+W0Fzf+79oAC+Ul1F3O69IBwk5OLN4vSDW5yAd5zgB37v/ACgALWGQG6HzdICARk2Tk0AsRZfw+cQq3FaOjJlzpoJtcS01b/584xtL0CaePR+EL4T1g1chm0YbL1ir1vaOc4tIVJajYnUj7RXcUxOpqj72fNf0zG36RJ54ofRnRnqZMs95Mmy0caFWcCNft9GDmWqkFjuO8GkcuF/Mp+Mb6YIzC4H6Qn/R/QaHT5cyW2kqYswNuVINo92sO7Hg/N0jnyEAcOnwiTLxCuki0ipm5eSk3H1gX+QvqDQu5sy5Dog80ZPFbNpl8J6xWqPtK4ASvp+EeaWLfSHlJXUtauaVPR7bAHUfEbiLRyRl4K00SfEczCzgaL1gubmYBx/kgN78du88sGtza3e/SHMAcJJTiJ3HSBRl4V4lbxHpANz3fi80A/t+Hz3gAAxQZUGcdYIBnA9yAV9YIAA8Nlc3c+E9INb5L+8/NBbJw3zX83SC39O/+cABucq6ONzHl3VUZswRU1cnnGJrqks53yKguX6wjrqx6s7ZZY8K/eFlLU1KyJ2gx2cVeVQ3lS+bbFv4ine0TM+tz6xYK+XcHSK5i1RKw6QZj2zscqKTa5jiyNyZWKCvxJKOQHnAsx8KL4m/iK9UY1PqJgWWDLUDiyuLfrvCXEMRNVWF2YjkXOtvgIjzqOWlsxJRlzCamlx6jlGxh+xh22I1AYd3Uve1u7mKp0+O8TqLEqlGltUTOAnKrqLD52b7CKggajnrMDd5KuNhew66xNlYmFqGlOwyta43Rx1IOqn46esO4GplufHa+iZnmmmmy73QNdLjoG1+sP8AB8foMQCypbiXUMLmU7An5EEgxzybXyM7SRMaVmXwm5+etxb6RCrWqqVpc6RJly5qAMk1OA29DsfpCaGM7FM4lIMV9qiopcTBkTGRlOjKbGFPZztzLqMlJi6pLqLaTke6v8ehhwLT6wTLCzHS0TacXQpfsExk1MsS623fWFpo0B+PSHepOUfiblop+HJZRFipaiyCU7WU7N0jsxz5TEcScOI5ZZysPEesYuGBMsWUeIdYz4+Hw259YPHxeHLyHOLCAAz6yjlXpBAF7zizZPSCADAsARL1Q+I9INLZf6XWMg3F5eiDxXhF2vxT/r8LyyWyvUHu16qOZjJOlZqVmjEsSFXU+zyGvTyja48x6xgAZYS4UeBYd/0xHLs5dZVKiBWAG8co7c4oZ+LmklWVKVbM/Vjvb6R1er5xwbH5kyq7QYgQLXqWGnKxsP2ggrZr4R3bOp7k5nvsTpE6ipcTMlSst1N7qSNIf9ncBTukcoGvqSRvF1pKKWstQ8tTpa1ofdeDrG305qlFWOuRpShToVJvc+kMaHsjiFTJInsElDwhxcx0OTQSUN0lKPgoieJQAAA0hdh1jOU1XY2tWWAr5hfS5uR6gwsqsPr8Pp+5qgXp2001yx2l5K21ELq6jkzEyMoN+oiby0P/AKU0cHeU0qZmAsFN8yi0dQ7BV3t2HqJhBmyzqQeUIsbwOQ01nvkRX4lA5dYc9iJUlMRnJIUIgQ2C7HUQ+RqSOXWmdKodAsMr8FoXUYsBE/ywRBkzD6pZn/jzmsVHATz9IYbkGYLMPCOsVWqdpTLNTRkOYGLFQ1aVlLLng3LjhtyPMfrF8cr4TkiQQrazjZoIwSgPvhd/SCKCmb5+JeFV3HWOcdsq01mJvlJ7uURLUfDf63joVXP7mmnVEzhMpCwHwEcpxBibFjdi1yfWIZ3yh4IdYR+GsPR+HFfwlxkX4Q8De7iMfByDWvlBJ5RxOolItZOmDV3nta/xO8dixiZklsd9I5FLp3n40JQBIFU36an7Q8OWD+F8wNSKdBbkIfyEUAZjCOnqBToFQEtbSwiFXdpZtNMyAU97+aaB9ISMdunTtqi7Iq20tHrMo3MV7CMWNcwQDJMPlve/wjbjVfNw8qoAZ22vG0htuDl2B1G0QqwG2ht6xSl7S1wml6tyJO/ChtaHdBjMusl2V1mINDbcROeN1ZsZqyr47OMiudWvfU5esb+w81UxfurkHu2IB57fxE3tVhoqaZapTrKe59VOhEL+yVIszGJc+SwvJQgsxtdfWKRacDnnFqZ1ejNwInHaFlC2g1v6wwJ4Y1CP0gV54DHvsdXj2qpoH83vJfodAftEbEHshhJhVX7L2ipJpNlM0S2+DcP3gTqQj6jp5YIbOuY9YIAWl8MsZh1gjrJirtRMMvBJ5maO2VV+bC8cyxB7BY6D27dpHZ9yx171LH5xzSY5qSqJqxjlz+lIeD3CJtwIsQb3ekV7C6MywPeAn4Q8W4SxhI+DivGS3csUNm5GKVRULycdWfNK+/RnAAtr/pi7YqCZZtvFTqZpGP0It7tZTKSORIBH7GGvhWKuNmzE8LrqxDLkT+4luOIrcN+seKfABTsGVBnFioVbgkddIs1IVcC/KJkzKiH4bkRkZNLg7gn6VfDaM0GIU+c2Ou5vYGHGOUaVc+SW8Srb9YhlDOrZUzTIzWufSG9WjGYhDhTlubwkr9LJLwSjs6TLWVMXvEQWQa8IjdI7L0sqaJ5V1mHU2bf4w3o61XXLoGGhEbqiYMoIMNJuhFFWI8YlJLopy7jIdIT9laCROwidMEwF8xIAN9id4bYsVnSmlvqrAg/CDCcPFDRUiSlund2ZubEj+TE4fR6/JMeYCGWSVbQBuEdBaHZ8JhXhqZZd+puIaXuIrGVnHl/kxTiI4DFUrSUmlhupuPlFwrx7sxUMVFs3zgkTOvSHeZJSZJtkdQ3zIgjVhqu+HUrK2X3KXHyEEda8JFf/AOSgZfY2umLxCWUcn0zAfeOSdnsSWdVsoN2A0juHafD/APtezeJ4dKsRU0syXc7glTY/tHylRYjNo6gTFJRxuInkhsNF0d0oKgNa8OGmDKI5RgHa+ZPnpLen4vzB9P0joVHUNOQM2kczTjxlE7PeKH3LGEsx5U2kZ1tcEf46w3rzeSYriyX98FPiU6QRdseM9RtQzbc42TKvvFLMSUHhHX1hdQP3kpgTuI04v7fJe9GsplBsQ41t6Q6Xwsn9MVFJNnTFmypsxcpuACbCPYoaytqUM6Y+SX0No90bTJyAzKlwTe/ubi/yiYVqBKBlz517a2QJ+8U14bZKmgDK62BTw25xn2gzJV+mkKJdLi82pvOq5Psw2XKC5+Y2idUWp5eW93Y/vEX+hiJXPcERYCyrKlSr3ZQFB6RV5szvJyLfUkC0OaYZXF9dN7xzZZOC4GxYKUiyiJ3lhbTMLCJwcZYrif49OWfpDrvAYqWKi7EdYtda3AYQ01Oa3G6SnGueepPwBufoIq+8EZ02nlZaeUjNlKIFIv0EEbDkP4ps3pBHYlwkZXWxl8KDxDrHy9/yB2fGD9tcRpUXLImzPaJGnkck/Q5h8o+ob5+MCwHLrHPP+YOzgxLDZGN08te/obiaLamSd/0Nj8M0ZK64Byrs5hgWcrCOl0KZJSiKhgYVSusXKQwCC0cUnbLIKvwWhfSKO+JtEypbQxFpFLTgF3JtGx9Bip0airWk3IF8yG+hU/7aJ3ee0AMNT4WERa2YuITpzyR+C5lqfzW5/rEGTVvInEEWYeJYdqyyeo8lyGXWSuVvQxLk0lQReZdr9bmNWHV0mYAWsIlzMSkywbX0jO0UtGSncKXfcQiraoNMZyb2Oka8TxadUkomidYgykmTzlBNupjFF/RZS7wl4XIafUe0OeGWwsOph+jDMIjSJK0WHcKhsilrHzHfWNzgZaeok3NPUSlmyiehG0SyR2syXKGsh9oliZpC6nO0S78MEVSJN2R62baWY3dh6bv8WqKxwbSVyJ/7t/A/eINbmZcqglmNgBzMXbAMPGE4bJpyB3j8cwjk53/j5RfFG5CSfBgSim00Zm6wRnN3fCy5z1gjqJAeIhnGVh4R1jzMRZqMs1A2ZSrSzsQdDHrXQP4/LBrm/u2gA4rj2ATezWOGQgPsU670zdBzU+o2+FjDeke8sR0XGMKpsYompKlAWJzBraow2IihT8OqMOqDTz1JIPCyg2cdRHNlhTtFIs1T9o9YPJ7yqLkXRBr84ZUuEGYueqJVfyA6mJvs0mnQpTyxLHpuT943Fid2wlNUUyiwx8Ln1NDMOZkms6N+dGJIP1t8jGrEKFXXOoOaLVilK1TTrOlqDUSNDbzDp/vOFYCzpdxz1tDSWsisXtEr1NSzb8BHwiX7FOy6lR8ommnIOYDWN5N5fhv9obgvRE9I2e17+sOKCjBCjYCCXTFpoMNJYEmXzESbKxielojWMKVdnFmI5DmYY4rRS2w9aajlaUigS1XkALWHyjdSS2o6YzWX388iwPlHL+YmSEMuWoG8UhjWvfpLJO5UVemblEzNwxYaijkVKETZa5vz2sR8+cQaXA502pKM47kalhoT6RF4ZIXYz2ew0zqgV01LpLPuwebdflFnHCCENw3iPSPMpFlqEkKFygAgbARkc+70XzR0QjqqJt2zILLpLGZesEAz/wBHwxmHMMEZTZjctsekFjfJ5/zwAZRlXiU7npARpk8m+aAAtmJQXDDdusap9PKqV41HBre2oPURt0YZWNkGzdYPF49Mvh9YAEc+keSp0ul7Bx94hTb5A3S94tLcXEw4tgvWINThsuYC8k5HO6AaQyYMpWPio/62Z7I7y2uM5lmzFb6/CIKiZLmiY6jJOUMCPzW1/mLZV4dPllrSyydV1AH+3hFIphLcyCBkz8Ibp0/3pDTipxoITcJWalQNtHruTaxN4JFi8xNRlYgA725RtmCyX2jl8Oq7PEinzAPmCqTYC1zfnG6YFp1zlWdhaxK8/QRKppPdUkuWfFqzEdTrt6faM8Tz5cqUu7E2HPQnT6fpHRDFCraITyytpGcCpZ0qmlLOmPMZbm7texJJPy5Q5RbmwGmlvX1j3TULiWq5Motsd/0hhKp0kgZFztYA35QNiGmXTlsqvdQddvWJSqFHdLowHiEFsoyA3Q7t0gsCMhPB+aFAyOI2XhI3PWAHNxKMoXcDnB4tH4QNj1gPFxPwldh1gAAGcZkORekEYKh9XbIekEAGdAPd6ofEYNLW/pdYHGV1VdFO46xm3vQnlttABjQizn3flPWA6/iC1vBAgzTSh1UbCBOIPm1y7ekAAb3uwtM5DrBc7jWbzEC3MoudWB0MB0lBx4juYAAX17rU+eNM2mp51s0lJiA3JYbRufhCFNM2/rA4yuqrop3HWABfMwbDpjq5kWVRYMrEW+seRgeHhwzS2ybjjOsM7DvcluHpGFAaYynVRsIKNTZFXDqUfiSFLeXMSbxvSWksAIipMA0VRaPacQcsbkbekA1lZz4usFswNd11m8xBtfuxcnxiBtJQcaMecD8IUqbE725wAAsNE/D8xg0tYn3XIxlgBMCDwncQWHfd2Rw9IAMHX8XRfKYDc6zdH8kEsZ2YNqBsOkCcasW1I2PSAAIQn3xs0EepSiYl3AJ9YIAP/9k=" alt="Reviewer Image" class="reviewer-image"/>
                <span class="reviewer-name">John Doe</span>
            </div>
            <h2>What People Think About Us</h2>
            <div class="star-rating text-center my-3">
                ★★★★☆
            </div>
           
            <p>I had a fantastic experience at Stoffcare. The customer service was top-notch, and the staff was both friendly and professional. They answered all my questions and made sure I felt comfortable with their services.</p>
        <p>The quality of service was exceptional. My clothes came back fresh and neatly folded, just as I wanted. They even managed to remove a stubborn stain that I thought was impossible to get rid of!</p>
        <p>What impressed me most was the convenience they offered. Their operating hours were flexible and suited my schedule perfectly. I also took advantage of their pickup and delivery service, which made my life so much easier.</p>


        </div>
    </div>
    </div>
  )
}

export default About

