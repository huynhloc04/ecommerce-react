import styles from './styles.module.scss';
import { selectIcons } from './constants';
import bagIcon from '@icons/bagIcon.svg';
import heartIcon from '@icons/heartIcon.svg';
import reloadIcon from '@icons/reloadIcon.svg';
import eyeIcon from '@icons/eyeIcon.svg';

function ProductItem({ src, prevSrc, name, price, details }) {
  const {
    container,
    productInfo,
    productName,
    productPrice,
    boxImg,
    boxIcon,
    boxIconContainer,
    showImgOnHover,
    showSelectorOnHover
  } = styles;

  const handleRenderIcon = type => {
    switch (type) {
      case 'bag':
        return bagIcon;
      case 'heart':
        return heartIcon;
      case 'reload':
        return reloadIcon;
      case 'eye':
        return eyeIcon;
    }
  };

  return (
    <div className={container}>
      <div className={boxImg}>
        <img src={src} alt='Img1' />
        <img src={prevSrc} className={showImgOnHover} alt='Img2' />
        <div className={(boxIconContainer, showSelectorOnHover)}>
          {selectIcons.map((icon, index) => (
            <div key={index} className={boxIcon}>
              <img src={handleRenderIcon(icon.type)} alt={icon.type} />
            </div>
          ))}
        </div>
      </div>
      <div className={productInfo}>
        <div className={productName}>{name}</div>
        <div className={productPrice}>${price}</div>
      </div>
    </div>
  );
}

export default ProductItem;
