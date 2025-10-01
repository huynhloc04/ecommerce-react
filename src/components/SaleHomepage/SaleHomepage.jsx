import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import HomepageLeft from '@images/sale_page_left.webp';
import HomepageRight from '@images/sale_page_right.webp';
import useTranslateImage from '@hooks/useTranslateImage';

function SaleHomepage() {
  const { container, boxImg, saleInfo, title, description } = styles;
  const { translateXPosition } = useTranslateImage();

  return (
    <div className={container}>
      <div
        className={boxImg}
        style={{
          transform: `translateX(${translateXPosition}px)`,
          transition: 'transform 0.6s ease'
        }}
      >
        <img src={HomepageLeft} alt='Homepage' />
      </div>
      <div className={saleInfo}>
        <h2 className={title}>Sale of the year</h2>
        <p className={description}>
          Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.
        </p>
        <Button content={'Read more'} />
      </div>
      <div
        className={boxImg}
        style={{
          transform: `translateX(${-translateXPosition}px)`,
          transition: 'transform 0.6s ease'
        }}
      >
        <img src={HomepageRight} alt='Homepage' />
      </div>
    </div>
  );
}

export default SaleHomepage;
