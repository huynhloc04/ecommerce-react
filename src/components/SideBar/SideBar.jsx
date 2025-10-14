import styles from './styles.module.scss';
import classNames from 'classnames';
import Login from '@components/SideBarContent/Login/Login';
import Register from '@components/SideBarContent/Register/Register';
import { useSideBar } from '@/contexts/SideBarProvider';
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
  const { isOpen, setIsOpen, sidebarType } = useSideBar();

  const handleCloseSideBar = () => {
    setIsOpen(!isOpen);
  };

  const handleRenderSidebarContent = type => {
    switch (type) {
      case 'Sign In':
        return <Login />;
      case 'Sign Up':
        return <Register />;
      case 'Search':
        return <div>Search</div>;
      case 'Contacts':
        return <div>Contacts</div>;
    }
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
        {handleRenderSidebarContent(sidebarType)}
      </div>
    </div>
  );
}

export default SideBar;
