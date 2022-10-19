import { useState, useEffect } from 'react'
import './styles.css'

export const App = () => {
  const [productList, setProductList] = useState(
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((json) => console.log(json))
    }, [])
  )
  return <h1>React TypeScript</h1>
}
