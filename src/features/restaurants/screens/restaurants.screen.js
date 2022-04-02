import React, { useContext } from 'react';
import { View, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

import RestaurantInfoCard from '../components/restaurant-info-card.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';

const SearchContainer = styled(View)`
    padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    },
})``;

const RestaurantsScreen = () => {
    const { restaurants, isLoading, error } = useContext(RestaurantsContext);

    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar />
            </SearchContainer>
            {!isLoading && (
                <RestaurantList
                    data={restaurants}
                    renderItem={({ item }) => {
                        return (
                            <Spacer position="bottom" size="large">
                                <RestaurantInfoCard restaurant={item} />
                            </Spacer>
                        );
                    }}
                    keyExtractor={(item) => item.name}
                    contentContainerStyle={{ padding: 16 }}
                />
            )}
        </SafeArea>
    );
};

export default RestaurantsScreen;
