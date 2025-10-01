import Header from '@components/Header/Header';
import Banner from '@components/Banner/Banner';
import Info from '@components/Info/Info';
import AdvanceHeadline from '@components/AdvanceHeadline/AdvanceHeadline';
import HeadingListProducts from '@components/HeadingListProducts/HeadingListProducts';
import PopularProduct from '@components/PopularProduct/PopularProduct';
import SaleHomepage from '@components/SaleHomepage/SaleHomepage';
import Footer from '@components/Footer/Footer';
import styles from './styles.module.scss';
import { getProducts } from '@/apis/productService';
import { useEffect, useState } from 'react';

function HomePage() {
  const { container } = styles;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(res => {
        setProducts(res.contents);
      })
      .catch(error => console.error('Error when fetching data:', error));
  }, []);

  return (
    <>
      <div className={container}>
        <Header />
        <Banner />
        <Info />
        <AdvanceHeadline />
        <HeadingListProducts data={products.slice(0, 2)} />
        <PopularProduct data={products.slice(2, 14)} />
        <SaleHomepage />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
