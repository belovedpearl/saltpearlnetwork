import React from 'react';
import styles from '../styles/TestimonialPage.module.css';
import img1 from '../assets/sp11.jpg'
import img2 from '../assets/sp12.jpg'
import SEO from '../components/SEO';
import image3 from '../assets/sp9.jpg'

// Testimonial Component
const Testimonial = ({ image, name, quote, role }) => {
    return (
        <div className={styles.testimonial}>
            <img src={image} alt={`${name}`} className={styles.testimonialimg} />
            <blockquote className={styles.testimonialquote} >"{quote}"</blockquote>
            <p className={styles.testimonialname}>{name}</p>
            <p className={styles.testimonialrole}>{role}</p>
        </div>
    );
};

// Sample Testimonial Data
const testimonials = [
    {
      name: 'Sarah J.',
      role: 'Beneficiary',
      quote: 'This charity provided us with food when we had nothing. I’m forever grateful!',
      image: img1,
    },
    {
      name: 'Becky A.',
      role: 'Beneficiary',
      quote: 'Good to know I am loved and remembered at christmas, my first ever christmas gift !!!',
      image: 'https://via.placeholder.com/100', // To be replaced with images
    },
    {
      name: 'Adebusayo Ijimade',
      role: 'Volunteer',
      quote: 'Helping with this organization changed my perspective on giving back and reaching out to people.',
      image: img2,
    },
    {
      name: 'Emily R.',
      role: 'Donor',
      quote: 'Knowing my donations are making a difference fills me with joy.',
      image: 'https://via.placeholder.com/100', // To be replaced with images
    },
];

// Main Testimonial Page
const TestimonialPage = () => {
    return (
        <div className={styles.testimonialpage}>
            <SEO
                title="Salt-Pearl Network Foundation"
                description="Building the Young for a better world."
                image={ image3 }
            />
            <header className={styles.testimonialheader}>
                <h1>
                  Stories of Hope and Impact
                </h1>
                <p>
                  See how your contributions are changing lives for the better.
                </p>
            </header>

          <div className={styles.testimonialcontainer}>
              {testimonials.map((testimonial, index) => (
                  <Testimonial
                    key={index}
                    image={testimonial.image}
                    name={testimonial.name}
                    quote={testimonial.quote}
                    role={testimonial.role}
                  />
              ))}
          </div>

          <footer className={styles.testimonialfooter}>
              <p>Want to make a difference? 
                <a href="/support">Donate now</a> or <a href="/volunteer">
                Join us as a volunteer!</a>
              </p>
          </footer>
        </div>
    );
};

export default TestimonialPage;
