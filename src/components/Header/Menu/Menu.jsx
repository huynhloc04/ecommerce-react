import styles from '../styles.module.scss';

function Menu({ content, href, setOpen }) {
  return (
    <div
      onClick={() => {
        setOpen(true);
      }}
    >
      {content}
    </div>
  );
}

export default Menu;
