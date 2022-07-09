import React, { useContext, useEffect, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { View } from 'react-native';

import { LocationContext } from '../../../services/location/location.context';

const SearchContainer = styled(View)`
    padding: ${(props) => props.theme.space[3]};
`;

const Search = ({ isFavouritesToggled, onFavouritesToggle }) => {
    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    useEffect(() => {
        setSearchKeyword(keyword);
    }, [keyword]);

    return (
        <SearchContainer>
            <Searchbar
                icon={isFavouritesToggled ? 'heart' : 'heart-outline'}
                placeholder="Search for a location"
                onIconPress={onFavouritesToggle}
                value={searchKeyword}
                onSubmitEditing={() => {
                    search(searchKeyword);
                }}
                onChangeText={(text) => {
                    if (!text.length) {
                        return;
                    }
                    setSearchKeyword(text);
                }}
            />
        </SearchContainer>
    );
};

export default Search;
