import selectors from './card.module.scss';
import Image from 'next/image';
import HeroImageMobile from 'public/images/image-product-mobile.jpg';
import HeroImageDesktop from 'public/images/image-product-desktop.jpg';


export const Card: React.FC = () => {
  return (   
    <article className={selectors['card']}>      
      <div className={selectors["image-mobile-container"]}>
        <Image src={HeroImageMobile} alt='Gabrielle Essence Eau De Parfum' />          
      </div>
      <div className={selectors["image-desktop-container"]}>
        <Image src={HeroImageDesktop} alt='Gabrielle Essence Eau De Parfum' />          
      </div>
      <div className={selectors["content"]}>
        <p className={selectors['product']}>PERFUME</p>
        <h1 className={selectors["title"]}>Gabrielle Essence Eau De Parfum</h1>
        <p className={selectors["description"]}>
          A floral, solar and voluptuous interpretation composed by Olivier Polge, 
          Perfumer-Creator for the House of CHANEL.
        </p>        
        <p className={selectors["price"]}>
          <span className={selectors["with-discount"]}>$149.99</span>
          <span className={selectors["total-price"]}>$169.99</span>
        </p>
        <button className={selectors["call-to-action"]}>
            Add to Cart
        </button>
      </div>     
    </article>    
  );
}