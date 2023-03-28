import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { HiOutlineSearchCircle } from 'react-icons/hi';

function Search({ setSearchInput }) {
    let HandlerInput = (e) => {
        let lowerCase = e.target.value.toLowerCase();
        setSearchInput(lowerCase);
    };

    return (
        <>
            <form className='searchForm'>
                <div className="SearchInput" style={{ width: '100%' }}>
                    <InputGroup >
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            onChange={HandlerInput}
                        />
                        <InputGroup.Text className='bg-white'><HiOutlineSearchCircle size={24} /></InputGroup.Text>
                    </InputGroup>
                </div>
            </form>
        </>
    );
}

export default Search;