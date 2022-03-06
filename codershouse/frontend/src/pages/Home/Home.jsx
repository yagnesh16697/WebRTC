import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/shared/Card/Card";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to Codershouse!!" icon="logo">
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          possimus, itaque nam, voluptas facilis, rerum deleniti voluptates eum
          tenetur excepturi quam vel. Dolores.
        </p>
        <div>
          <button>
            <span>Get your Username</span>
            <img src="/images/arrow-forward.png" alt="" />
          </button>
        </div>
        <div>
          <span>Have an invite text?</span>
          <Link to="/login">Sign In</Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
