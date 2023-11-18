import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { AppContext } from '../app/app';

function SearchForm({handleGetProducts}) {
    const[state, setState] = useContext(AppContext);
    const [query, setQuery] = useState("");
    const handleSearch = (event)=>{
        event.preventDefault(); // avoid page refresh
        handleGetProducts(query,1,state.pageSize);
    }
  return (
    <form onSubmit={handleSearch}>
                                <div className='row g-2'>
                                    <div className='col'>
                                        <input
                                        value={query}
                                        onChange={(e)=>setQuery(e.target.value)}  
                                        className='form-control'></input>
                                    </div>
                                    <div className='col'>
                                        <button className='btn btn-success'>
                                            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></button>
                                    </div>
                                </div>
                            </form>
  )
}

export default SearchForm