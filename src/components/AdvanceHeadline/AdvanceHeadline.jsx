import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';

function AdvanceHeadline() {
  const { container, title, description } = styles;
  return (
    <MainLayout>
      <div className={container}>
        <div className={title}>don't miss super offers</div>
        <div className={description}>Our best products</div>
      </div>
    </MainLayout>
  );
}

export default AdvanceHeadline;
