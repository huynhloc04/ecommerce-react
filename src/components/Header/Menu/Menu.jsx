import styles from './styles.module.scss';
import classNames from 'classnames';
import { useState } from 'react';
import { useStore } from '@/contexts/StoreProvider';

function Menu({ content, href, setOpen, setSidebarType }) {
  const { menu, subMenu } = styles;
  const [showSignOut, setShowSignOut] = useState(false);
  const { userInfo, handleLogOut } = useStore();

  const handleMouseEnter = () => {
    if (userInfo && ['Sign In', userInfo.username].includes(content)) {
      setShowSignOut(true);
    }
  };

  const handleOnMouseLeave = () => {
    setShowSignOut(false);
  };

  return (
    <div className={menu}>
      <div
        onClick={() => {
          setOpen(true);
          setSidebarType(content);
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      >
        {content === 'Sign In' && userInfo ? userInfo?.username : content}
      </div>
      <div
        className={classNames({ [subMenu]: showSignOut })}
        onClick={handleLogOut}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      >
        {showSignOut ? 'Log Out' : ''}
      </div>
    </div>
  );
}

export default Menu;
