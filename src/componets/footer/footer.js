import React from 'react';
import './footer.css'


const Footer = () => {
    return (
        
        <footer class="footer">
   	<div class="container">
		<div class="row row-f-pl justify-content-md-center">
			
			<div class="col-lg-7">
                    

                    <ul class="footer-menu">
                         <li class="active"><a href="/">Home</a></li>
                         <li><a href="how">How it Works</a></li>
                         <li><a href="privacy">Privacy Policy</a></li>
                         <li><a href="terms">Term of Use</a></li>
                         <li><a href="license">Custom License</a></li>
                         <li><a href="business">For Bussines</a></li>
                         <li><a href="support">Support</a></li>
                         <li><a href="faq">FAQ</a></li>
                    </ul>
                    <p class="footer-copy">© 2019 <a href="https://4krelax.com/">4K Nature Relax TV</a>. All Rights Reserved </p>
               </div>

          </div>
          
     </div>
</footer>
        
    )
}

export default Footer;