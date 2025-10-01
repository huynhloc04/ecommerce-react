import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import Button from '@components/Button/Button';
import styles from './styles.module.scss';

function CountdownBanner() {
  const { container, countTime, title, boxBtn } = styles;
  const targetDate = '2025-12-31T00:00:00';

  return (
    <div className={container}>
      <div className={countTime}>
        <CountdownTimer targetDate={targetDate} />
      </div>
      <h2 className={title}>The classics make a comeback</h2>
      <div className={boxBtn}>
        <Button content='Buy now' />
      </div>
    </div>
  );
}

export default CountdownBanner;
