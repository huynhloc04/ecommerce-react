import styles from '../styles.module.scss';
import fbIcon from '@icons/fbIcon.svg';
import insIcon from '@icons/insIcon.svg';
import ytbIcon from '@icons/ytbIcon.svg';
import reloadIcon from '@icons/reloadIcon.svg';
import heartIcon from '@icons/heartIcon.svg';
import cartIcon from '@icons/cartIcon.svg';

function BoxIcon({ type, href }) {
  const { boxIcon } = styles;

  const handleRenderIcons = type => {
    switch (type) {
      case 'fb':
        return fbIcon;
      case 'ins':
        return insIcon;
      case 'ytb':
        return ytbIcon;
      case 'reload':
        return reloadIcon;
      case 'heart':
        return heartIcon;
      case 'cart':
        return cartIcon;
    }
  };

  return (
    <div className={boxIcon}>
      <img src={handleRenderIcons(type)} alt={type} />
    </div>
  );
}

export default BoxIcon;
