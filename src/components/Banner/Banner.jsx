import styles from './styles.module.scss';
import Button from '@components/Button/Button';

function Banner() {
  const { container, content, title, description } = styles;
  return (
    <div className={container}>
      <div className={content}>
        <div className={title}>XStore Marseille04 Demo</div>
        <div className={description}>
          Make yours celebrations even more special this years with beautiful.
        </div>
        <Button content='Go to Shop' />
      </div>
    </div>
  );
}

export default Banner;
