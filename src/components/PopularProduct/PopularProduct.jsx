import MainLayout from '@components/Layout/Layout';
import ProductItem from '@components/ProductItem/ProductItem';
import styles from './styles.module.scss';

function PopularProduct({ data }) {
  const { container } = styles;
  return (
    <MainLayout>
      <div className={container}>
        {data.map(item => (
          <ProductItem
            key={item.id}
            src={item.images[0]}
            prevSrc={item.images[1]}
            name={item.name}
            price={item.price}
            details={item}
          />
        ))}
      </div>
    </MainLayout>
  );
}

export default PopularProduct;
