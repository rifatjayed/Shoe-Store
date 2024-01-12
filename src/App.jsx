
import { useState } from 'react'
import './App.css'
import Navigation from './Components/Navigation/Navigation'
import Products from './Components/Products/Products'

import Recommended from './Components/Recommended/Recommended'
import Sidebar from './Components/Sliderbar/Sidebar/Sidebar'


// Database

import products from './DB/data'
import Card from './Components/Share/Card'
function App() {

  const [selectedCategory, setSelectedCategory] = useState(null)
  const [query, setQuery] = useState("");

  // const [color, setcolor] = useState(red)
  // setcolor("green")

  // let color = red;
  // color = green
  //color = orange


  // console.log(color)


  //-------------------- Input filter
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  }

  const filterdItems = products.filter(product => product.title.toLocaleLowerCase().indexOf(query.toLocaleUpperCase() !== -1));


  // radio filter
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  }

  // button filter

  const handleClick = (event) => {
    setSelectedCategory(event.target.value)
  }

  function filterdData(products, selected, query) {
    let filteredProducts = products;


    // Filtering Input Items
    if (query) {
      filteredProducts = filterdItems;
    }

    // Selected Filter

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    return filteredProducts.map(({ img, title, star, reviews, newPrice, prevPrice }) => (
      <Card key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        newPrice={newPrice}
        prevPrice={prevPrice}
      >

      </Card>
    )
    )

  }


  const result = filterdData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange}></Sidebar>
      <Navigation></Navigation>
      <Recommended></Recommended>
      <Products ></Products>
    </>
  )
}

export default App
