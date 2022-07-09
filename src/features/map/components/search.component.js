import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { View } from 'react-native';

import { LocationContext } from '../../../services/location/location.context';

const SearchContainer = styled(View)`
    padding: ${(props) => props.theme.space[3]};
    position: absolute;
    z-index: 999;
    top: 40px;
    width: 100%;
`;

const Search = () => {
    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    useEffect(() => {
        setSearchKeyword(keyword);
    }, [keyword]);

    return (
        <SearchContainer>
            <Searchbar
                placeholder="Search for a location"
                value={searchKeyword}
                icon="map"
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
