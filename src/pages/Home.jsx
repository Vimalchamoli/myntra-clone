import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Section from "../components/Section";

function Home() {
  const [products, setProducts] = useState([]);

  // 🔥 FILTER LOGIC

  const men = Array.isArray(products)
    ? products.filter((p) => p.category === "men")
    : [];

  const women = Array.isArray(products)
    ? products.filter((p) => p.category === "women")
    : [];

  const kids = Array.isArray(products)
    ? products.filter((p) => p.category === "kids")
    : [];

  useEffect(() => {
    axios
      .get("https://myntra-clone-9o39.onrender.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Navbar />
      <Banner />

      <Section title="Men Collection" items={men} />
      <Section title="Women Collection" items={women} />
      <Section title="Kids Collection" items={kids} />
    </>
  );
}

export default Home;
