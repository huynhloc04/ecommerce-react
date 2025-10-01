import BoxIcon from './BoxIcon/BoxIcon';
import Menu from './Menu/Menu';
import styles from './styles.module.scss';
import retinaLogo from '@images/retina_logo.png';
import useScrollHandling from '@hooks/useScrollHandling';
import { mediaIcons, dataMenu } from '@components/Header/constants';
import { useContext, useEffect, useState } from 'react';
import { SideBarContext } from '@/contexts/SideBar';
import classNames from 'classnames';

function Header() {
  const {
    containerBoxIcons,
    containerBox,
    containerDataMenu,
    containerHeader,
    container,
    topContainer,
    scrollContainer
  } = styles;

  const { scrollDirection, scrollPosition } = useScrollHandling();
  const [fixScrollHeader, setFixScrollHeader] = useState(false);
  const { isOpen, setIsOpen } = useContext(SideBarContext);

  useEffect(() => {
    setFixScrollHeader(scrollPosition >= 120);
  }, [scrollPosition]);

  return (
    <div
      className={classNames(container, topContainer, {
        [scrollContainer]: fixScrollHeader
      })}
    >
      <div className={containerHeader}>
        <div className={containerBox}>
          <div className={containerBoxIcons}>
            {mediaIcons.slice(0, 3).map((mediaIcon, index) => (
              <BoxIcon
                key={index}
                type={mediaIcon.type}
                href={mediaIcon.href}
              />
            ))}
          </div>
          <div className={containerDataMenu}>
            {dataMenu.slice(0, 3).map((data, index) => (
              <Menu key={index} content={data.content} href={data.href} />
            ))}
          </div>
        </div>

        <div>
          <img
            style={{ width: '153px', height: '53px' }}
            src={retinaLogo}
            alt='retina-logo.png'
          />
        </div>

        <div className={containerBox}>
          <div className={containerDataMenu}>
            {dataMenu.slice(3, 6).map((data, index) => (
              <Menu
                key={index}
                content={data.content}
                href={data.href}
                setOpen={setIsOpen}
              />
            ))}
          </div>
          <div className={containerBoxIcons}>
            {mediaIcons.slice(3, 6).map((mediaIcon, index) => (
              <BoxIcon
                key={index}
                type={mediaIcon.type}
                href={mediaIcon.href}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
