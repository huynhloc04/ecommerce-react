import styles from './styles.module.scss';
import classNames from 'classnames';
import { SideBarContext } from '@/contexts/SideBar';
import Login from '@components/SideBarContent/Login';
import { useContext } from 'react';
import { RiCloseLargeLine } from 'react-icons/ri';

function SideBar() {
  const {
    container,
    overlay,
    sideBar,
    sideBarOpen,
    sideBarClose,
    boxCloseIcon
  } = styles;
  const { isOpen, setIsOpen } = useContext(SideBarContext);

  const handleCloseSideBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={container}>
      <div
        onClick={() => handleCloseSideBar()}
        className={classNames({ [overlay]: isOpen })}
      />
      <div
        className={classNames(sideBar, {
          [sideBarOpen]: isOpen,
          [sideBarClose]: !isOpen
        })}
      >
        {isOpen && (
          <div className={boxCloseIcon} onClick={() => handleCloseSideBar()}>
            <RiCloseLargeLine />
          </div>
        )}
        <Login />
      </div>
    </div>
  );
}

export default SideBar;
