import React from 'react'
import image from '../assets/sp7.jpg'
import styles from '../styles/ContactUs.module.css'
import stylesb from '../styles/AboutUs.module.css'
import { Link } from 'react-router-dom';
import { BiDonateHeart } from "react-icons/bi";

const ContactUs = () => {
  return (
    <div>
        <div className={styles.contactDetails}>
            <h1>Contact Us</h1>
            <p>
                If you would like more information about Salt-Pearl, you can
                call us or send a message using the following details.
            </p>
            <p className={styles.noSelect}>
            <strong>Phone: </strong> +234 803 853 0222</p>
            <p className={styles.noSelect}>
                <strong>Address: </strong>Shop 13, St Peter's Shopping Complex, Iremo,  <br />
                Ile-Ife, Osun State  <br /> Nigeria</p>
        </div>
        <div className={styles.container}>
            <img 
                    src={image} 
                    alt="Contact us display profile" 
            />
        </div>
        
        <div className={styles.contactDetails}>
            <h3>The Salt-Pearl Network Foundation</h3>
            <p>
              <strong>Address: </strong>Shop 13, St Peter's Shopping Complex, Iremo,
              Ile-Ife, Osun State <br />
               Nigeria.
            </p>
            <p>
                <strong>Email: </strong> info@thesaltpearlnetwork.org.ng
            </p>
        </div>
        <div className={stylesb.support}>
            <p>
                <BiDonateHeart className='mr-1' size={25}/>
                You can also
                     <strong>
                        <Link  to="/support" className={stylesb.take}> support </Link> </strong>
                this mission also by donating to this work. 
                
            </p>
        </div>
    </div>
  )
}

export default ContactUs
