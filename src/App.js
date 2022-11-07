
import { Container } from 'react-bootstrap'
import React, { useState } from 'react'
import NavBar from './Components/NavBar'
import Header from './Components/Header'
import Category from './Components/Category'
import ItemsList from './Components/ItemsList'
import { items } from './data'


function App() {
  const [itemsData, setItemsData] = useState(items)

  //get all cat uniqe
  const AllCategory = ['All', ...new Set(items.map((i) => i.category))]

  //filter by category
  const filterbyCategory = (cat) => {
    if (cat === "All") {
      setItemsData(items)
    } else {
      const newArr = items.filter((item) => item.category === cat)
      setItemsData(newArr)
    }
  }

  //filter by search form
  const filterbySearch = (word) => {
    if (word !== "") 
    {
      const newArr = items.filter((item) => item.title === word)
      setItemsData(newArr)
    }
  }

  return (
    <div className="color-body font">
      <NavBar filterbySearch={filterbySearch} />
      <Container>
        <Header />
        <Category filterbyCategory={filterbyCategory} AllCategory={AllCategory} />
        <ItemsList itemsData={itemsData} />
      </Container>
    </div>
  );
}

export default App;
