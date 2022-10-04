import { useEffect, useState } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';
import React from 'react';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [title, setTitle] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const onSearchChange = (event)=> {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => setMonsters(users))
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1 className='app-title'>Kitties Rolodex</h1>

      <SearchBox 
        onChangeHandler={onSearchChange}
        placeholder='Search kitties'
        className='monsters-search-box' />
      <CardList monsters={filteredMonsters}/>
    </div>
  );
}

export default App;
