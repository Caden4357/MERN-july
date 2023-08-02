import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import HomepageImage from './components/HomepageImage'
import { Routes, Route } from 'react-router-dom'
import FeaturedProducts from './components/FeaturedProducts'

const startingProducts = [
  {
    name: 'Air Jordans',
    price: 149.99,
    description: 'The best basketball shoes ever made',
    image: 'https://cdn.sanity.io/images/c1chvb1i/production/b388df050c3645aa4bf44a60187a97ece9b1cd1b-1100x735.jpg/ebay-air-jordan-1-og.jpg',
    seller: 'Ben Affleck'
  },
  {
    name: 'MacBook Pro',
    price: 1999.99,
    description: 'The best laptop ever made',
    image: 'https://media.cnn.com/api/v1/images/stellar/prod/230125131405-macbook-pro-14-inch-2023-review-cnnu-7.jpg?c=original',
    seller: 'Michael Fastbender'
  },
  {
    name: 'Tesla Model S',
    price: 79999.99,
    description: 'The best car ever made',
    image: 'https://www.tesla.com/sites/default/files/modelsx-new/social/model-s-hero-social.jpg',
    seller: 'Elon Musk'
  },
  {
    name: 'Beats Fit Pro',
    price: 299.99,
    description: 'The best headphones ever made',
    image: 'https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/beats-fit-pro/pdp/product-carousel/tidal-blue/pc-fit-pro-tidal-blue-case-closed-floating.jpg',
    seller: 'Slim Shady'
  }
  ]


function App() {
  const [products, setProducts] = useState(startingProducts)
  return (
    <>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={[<HomepageImage/>, <FeaturedProducts/>]}/>
        </Routes>
      </div>
    </>
  )
}

export default App
