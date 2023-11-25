import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  let [arr, setArr] = useState([]);
  const [searchValue, setSearchValue] = useState('');


  useEffect(() => {
    fetch('http://localhost:5000/goods')
      .then(res => res.json())
      .then(data => setArr(data))
  }, [])


  const handleSearch = () => {
    fetch(`http://localhost:5000/search-goods/${searchValue}`)
      .then(res => res.json())
      .then(data => setArr(data))
  };

  if(searchValue === ''){
    fetch('http://localhost:5000/goods')
      .then(res => res.json())
      .then(data => setArr(data))
  }

  
  return (
    <div className="App">

      <input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      

      <ul>
        {arr.map((item) => {
          return (
            <li key={item.id}>
              <p>{item.product_name}</p>
              <p>{item.product_description}</p>
              <p>{item.product_price}</p>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
