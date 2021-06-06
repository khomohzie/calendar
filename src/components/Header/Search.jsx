import React from 'react'
import styled from 'styled-components/macro'
import Searchpng from '../../assets/images/SearchIcon.png'
import SearchIcon from '@material-ui/icons/Search'
import { IconButton } from "@material-ui/core";

const Search = () => {
    return (
        <SearchBar>
            <IconButton>
                <SearchIcon src={Searchpng} />
            </IconButton>

            <SearchInput type="text" placeholder="Search here anything" />
        </SearchBar>
    )
}

export default Search

const SearchBar = styled.div`
    display: flex;
    align-items: center;
    background: var(--bg-color);
    padding-left: 20px;
    border-radius: 2px;

    @media (max-width: 340px) {
        padding-left: 0;
    }
`;

const SearchInput = styled.input`
    flex: 1;
    outline-width: 0;
    padding-left: 1.5rem;
    border: none;
    background: var(--bg-color);

    ::placeholder,
    ::-webkit-input-placeholder {
        color: #ccc;
        font-size: 0.9rem;
    }

    :-ms-input-placeholder {
        color: #ccc;
        font-size: 0.9rem;
    }

    @media (max-width: 340px) {
        padding-left: 0;
    }
`;

// const SearchIcon = styled.img`
//     width: 1.5rem;
// `;
