import React, { useRef }from 'react'
import styles from '../styles/SupportPage.module.css'
import image from '../assets/sp4.jpg'
import { LuSmilePlus } from "react-icons/lu";
import { Link } from 'react-router-dom';



const SupportPage = () => {

  const donateRef = useRef(null);

  const scrollToDonate = () => {
      donateRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  

  return (
    <div>
       <h1 className='text-light mb-4'>Your donation helps change lives</h1>
       <div className={styles.supportmessage}>
          <p>Right now, many children in Nigeria live in poverty and are  
            not able to live life as it should be, families are struggling to make ends
            meet
          </p>
          <div className={styles.container}>
              <img 
                      src={image} 
                      alt="Support us display pic" 
                      ref={donateRef}
              />
          </div>
          <button className='m-3'>Donate</button>
          <p>We're on a mission to support as many children as we can and create a world
            where all children and young people have access to different opportunities. By creating, 
            finding and inventing a wide range of support.
          </p>
          
          
          <p>With donations like yours, we're able to fufil this mission and aim to reach out to
            more children. Together, we can help children and young ones live happier, healthier and more
            hopeful of a brighter future.
          </p>
          <h2 className='m-3'>
              <u>More Ways to support</u>
          </h2>
          <p>You can <strong>
               <Link  to="/contact" className='text-light'> 
                contact
              </Link> 
            </strong> us using our address or phone numbers to drop welfare materials
            like;
          </p>
          <p><strong>*</strong> School Supplies Kits</p>
          <p><strong>*</strong> Hygiene Kits</p>
          <p><strong>*</strong> Nutritious Snack Packs</p>
          <p><strong>*</strong> Clothing Essentials</p>
          <p><strong>*</strong> Books and Educational Materials</p>
          <p><strong>*</strong> You can also <span onClick={scrollToDonate} className={styles.supportdonate}>donate</span> to support.</p>
           
          <p className='mt-5'>
              <strong>Thank you for changing childhood and changing lives,
                 bringing smiles <LuSmilePlus className='mr-1' size={30}/> to faces.</strong>
          </p>
       </div>

       
    </div>
  )
}

export default SupportPage
