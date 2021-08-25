import React, { useState } from "react";
import Home from "./Home";
import Menu from "./Menu";
import Categories from "./Categories";
import Footer from "./footer";
import items from "./data";
import About from "./About";
import Contact from "./Contact";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section>
        <Home />
        <About />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
        <Contact />
        <Footer />
      </section>
    </main>
  );
}

export default App;
