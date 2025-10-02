import styles from '../styles.module.scss';

function Menu({ content, href, setOpen, setSidebarType }) {
  return (
    <div
      onClick={() => {
        setOpen(true);
        setSidebarType(content);
      }}
    >
      {content}
    </div>
  );
}

export default Menu;
