import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { HiOutlineSearchCircle } from 'react-icons/hi';
import { Link } from 'react-router-dom';


function Search({ data }) {
    const [searchInput, setSearchInput] = useState("");

    const filteredData = data.filter((value) => {
        return value.title.toLowerCase().includes(searchInput.toLowerCase());
    });

    const handleInput = (e) => {
        let lowerCase = e.target.value.toLowerCase();
        setSearchInput(lowerCase);
    };

    return (
        <>
            <form className='searchForm'>
                <div className="SearchInput" style={{ width: '100%' }}>
                    <InputGroup>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            onChange={handleInput}
                        />
                        <InputGroup.Text className='bg-white'><HiOutlineSearchCircle size={24} /></InputGroup.Text>
                    </InputGroup>
                </div>
                {searchInput.trim().length > 0 &&  (
                    <div className='searchResult'>
                        {filteredData.length > 0 ? (
                            filteredData.map((value, key) => {
                                return (
                                    <Link to={`/product/${value.id}`} key={key}>
                                        <div className='search-products d-flex justify-content-between my-2'>
                                            <p className='mt-2'>{value.title}</p>
                                            <div style={{ width: '50px', height: '50px' }}>
                                                <img src={value.imageUrl} alt={value.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })
                        ) : (
                            <p className="text-black">No match found for '{searchInput}'</p>
                        )}
                    </div>
                )}
            </form>
        </>
    );
}

export default Search;

