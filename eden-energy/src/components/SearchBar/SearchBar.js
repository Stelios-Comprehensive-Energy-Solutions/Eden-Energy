import React, { useState, useRef, useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';
import { InputBase, InputAdornment, IconButton, Popover } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

import centralContentIndex from '../../CentralContentIndex'; // Adjust the path as necessary


// Styled component for the search area
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

// Styled component for the search icon wrapper
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

// Styled component for the input base
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        width: '100%',
    },
}));

function gatherSearchableText() {
    const elements = document.querySelectorAll('.searchable-content');
    const sectionsArray = Array.from(elements).map(element => {
        return {
            title: element.previousElementSibling.textContent, // Assuming the title is right before the description
            text: element.textContent,
            sectionElement: element.closest('.section-box')
        };
    });
    // console.log(sectionsArray);
    return sectionsArray;
}

function gatherGlobalSearchableText(query) {
    let matches = [];
    // centralContentIndex.forEach((contentPage) => {
    //     console.log("Page Route:", contentPage.pageRoute);
    //     // contentPage.forEach(content => {
    //     //     // Assuming each content has 'title' and 'description'
    //     //     if (content.title.toLowerCase().includes(query.toLowerCase()) ||
    //     //         content.description.toLowerCase().includes(query.toLowerCase())) {
    //     //         matches.push(`Page ::${content.title}`);
    //     //     }
    //     // });
    // });
    // return matches;
}




export default function SearchBar() {
    const [searchableContent, setSearchableContent] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const searchRef = useRef(null);
    const [globalSearchResults, setGlobalSearchResults] = useState([]);

    useEffect(() => {
        const content = gatherSearchableText();
        setSearchableContent(content);
    }, []);

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchQuery(value);

        if (value) {
            setAnchorEl(searchRef.current);

            // Local search
            const localResults = gatherSearchableText().filter(item =>
                item.text.toLowerCase().includes(value.toLowerCase())
            );
            setSearchResults(localResults);

            // Global search
            const globalResults = gatherGlobalSearchableText(value);
            // console.log(globalResults);
            // setGlobalSearchResults(globalResults);
        } else {
            setAnchorEl(null);
            setSearchResults([]);
            // setGlobalSearchResults([]);
        }
    };

    const handleClearSearch = () => {
        setSearchQuery('');
        setAnchorEl(null);
    };

    const scrollToSection = (sectionElement) => {
        sectionElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    const open = Boolean(anchorEl);
    const id = open ? 'search-popover' : undefined;

    // Debugging
    // console.log('Search Query:', searchQuery);

    return (
        <div ref={searchRef}>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    value={searchQuery}
                    onChange={handleSearchChange}
                    endAdornment={
                        searchQuery && (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleClearSearch}
                                    aria-label="clear search"
                                    size="small"
                                    edge="end"
                                >
                                    <CloseIcon />
                                </IconButton>
                            </InputAdornment>
                        )
                    }
                />
            </Search>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClearSearch}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                disableAutoFocus
                disableEnforceFocus
            >
                <div style={{ padding: '10px', maxWidth: '300px' }}>
                    <div>
                        <strong>Local Results:</strong>
                        {searchResults.length > 0 ? (
                            searchResults.map((result, index) => (
                                <div
                                    key={index}
                                    onClick={() => scrollToSection(result.sectionElement)}
                                    style={{ cursor: 'pointer', padding: '5px', borderBottom: '1px solid #ddd' }}
                                    tabIndex={0} // Make the div focusable
                                    onKeyPress={(e) => e.key === 'Enter' && scrollToSection(result.sectionElement)} // Handle keyboard events
                                >
                                    {result.title}
                                </div>
                            ))
                        ) : (
                            <div>No results found</div>
                        )}
                    </div>
                    <div>
                        <strong>Global Results:</strong>
                        {globalSearchResults.length > 0 ? (
                            globalSearchResults.map((result, index) => (
                                <a
                                    key={index}
                                    href={result.url}
                                    style={{ display: 'block', cursor: 'pointer', padding: '5px', borderBottom: '1px solid #ddd' }}
                                    tabIndex={0}
                                >
                                    {result.title}
                                </a>
                            ))
                        ) : (
                            <div>No global results found</div>
                        )}
                    </div>
                </div>
            </Popover>

        </div>
    );
}