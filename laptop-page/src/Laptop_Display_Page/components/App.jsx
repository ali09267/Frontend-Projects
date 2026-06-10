import { useState } from 'react';
import { useEffect } from 'react';
import '../styles/App.css'
import laptopImg from '../asset/image.png';
import laptopImg2 from '../asset/image2.png'
import laptopImg3 from '../asset/image3.png'

function App(){
  const [isLoading, setIsLoading]=useState(true)//if image is loading show skeleton
  //images array
const images = [laptopImg, laptopImg2, laptopImg3]

  const [currentIndex, setCurrentIndex] = useState(0)  //to track images (which image to show based on clicking on prev and nxt btn)

  //render this component after 1 second till then show loading skeleton
useEffect(() => {
  setTimeout(() => {
    setIsLoading(false)
  }, 1000)
}, [])

  const goNext = () => {
    //not exceed length of images array (if reached last image then further next will bring it in first image)
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const goPrev = () => {
    //if on first image then further prev will bring it to last image
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }
  return(<>
  {isLoading ? (
        //skeleton (emtpy divs)
        <div className="skeleton-wrapper">
          <div className="skel skel-image" />
          <div className="skel skel-title" />
          <div className="skel skel-price" />
          <div className="skel skel-line" />
          <div className="skel skel-line" />
          <div className="skel skel-line" />
          <div className="skel skel-btn" />
        </div>
      ) ://else not loading display actual content
      <div className="product-display">
       
 <div className="image-section">
    <button className="arrow left-arrow" onClick={goPrev}>‹</button>
        <img src={images[currentIndex]} alt="laptop" className="product-img" />
         <button className="arrow right-arrow" onClick={goNext}>›</button>
      </div>
           
 <div className="dots">
        {images.map((_, i) => (//each image from images array
          <span
            key={i}
            className={`dot ${i === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(i)}  // dot click directly sends to that corresponding image
          />
        ))}
      </div>

      <div className="info-section">
        
        <h2 className="product-title">Dell Inspiron 15</h2>
        <p className="product-price">Rs. 85,000</p>

        <hr className="divider" />

        <div className="specs">
          <p>⚡ Intel i5 11th Gen</p>
          <p>🧠 8GB RAM</p>
          <p>💾 512GB SSD</p>
        </div>

        <hr className="divider" />

        <div className="seller-card">
  <h3>Seller Information</h3>
  <p>👤 Ali Ahmed Shaikh</p>
  <p>📍 Hyderabad, Sindh</p>
</div>

        <div className="btn-group">
          <button className="btn-contact">Contact</button>
          <button className="btn-message">Message</button>
        </div>

      </div>
      </div>
}
  </>)
}
export default App;