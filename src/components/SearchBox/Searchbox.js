import React,{useState} from 'react';

import searchicon from '../../assets/ic-actions-search.png';

import './Searchbox.css'


const categories = ['fruits','vegetables','grains','legumes','legumes','baby products','computer']

const Searchbox = () => {
    const [searchword,setSearchWord] = useState('');
    const [showDropdown,setShowDropdown] = useState(false);

    const inputHandler = (e) => {
        setSearchWord(e.target.value);
    }

    const showDropdownHandler = () =>{
        if(!showDropdown){
            setShowDropdown(true)
        }
        setShowDropdown(false)
    }
    return (
        <div className='search_box'>
          <div className="search_category" onClick={showDropdownHandler}>All categories <ul className={showDropdown===true?'select-categories show-categories':'select-categories'}>{categories.map(category =>{
              return <li className='select-category'>{category}</li>
          })}</ul></div>
          <div className="search_group"><input type="text" className="search_word" value={searchword} onChange={inputHandler} placeholder='Search Products,categories...'/>
          <button className="search_button"><img src={searchicon} alt="search" className="search_icon" /></button></div>
        </div>
    )
}

export default Searchbox
