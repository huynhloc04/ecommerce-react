import MainLayout from '@components/Layout/Layout';
import { contentAds } from '@components/Info/constants';
import styles from './styles.module.scss';

import truckIcon from '@icons/truckIcon.svg';
import cardIcon from '@icons/cardIcon.svg';
import boxIcon from '@icons/boxIcon.svg';
import chatIcon from '@icons/chatIcon.svg';

function Info() {
  const handleRenderIcons = type => {
    switch (type) {
      case 'truck':
        return truckIcon;
      case 'box':
        return boxIcon;
      case 'card':
        return cardIcon;
      case 'chat':
        return chatIcon;
    }
  };

  const {
    container,
    adWrapper,
    adIcon,
    adContent,
    adContentTitle,
    adContentDesc
  } = styles;

  return (
    <MainLayout>
      <div className={container}>
        {contentAds.map((item, index) => (
          <div key={index} className={adWrapper}>
            <img
              className={adIcon}
              src={handleRenderIcons(item.icon)}
              alt={item.icon}
            />
            <div className={adContent}>
              <div className={adContentTitle}>{item.title}</div>
              <div className={adContentDesc}>{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}

export default Info;
