import React from 'react';
import styles from './Home.module.css';

const Home = () => (
  <div>
    <h2>Welcome to our page!</h2>
    <p className={styles.item1}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Animi cumque sit quaerat cum,ratione soluta! Eveniet, magnam
      eum ea excepturi et temporibus laborum at officia!
    </p>
    <p className={styles.item2}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elite.
      Animi cumque sit quaerat cum, ratione soluta! Eveniet, magnam
      eum ea excepturi et temporibus laborum at officia!
    </p>
  </div>
);

export default Home;
