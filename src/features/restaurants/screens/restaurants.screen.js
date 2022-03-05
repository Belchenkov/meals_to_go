import React from 'react';
import { SafeAreaView, StatusBar, View, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

import RestaurantInfoCard from '../components/restaurant-info-card.component';
import { Spacer } from '../../../components/spacer/spacer.component';

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled(View)`
    padding: ${(props) => props.theme.space[3]};
`;

const RestaurantsScreen = () => {
    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar />
            </SearchContainer>
            <FlatList
                data={[
                    { name: 1 },
                    { name: 2 },
                    { name: 3 },
                ]}
                renderItem={() => (
                    <Spacer position="bottom" size="large">
                        <RestaurantInfoCard />
                    </Spacer>
                )}
                keyExtractor={(item) => item.name}
                contentContainerStyle={{ padding: 16 }}
            />
        </SafeArea>
    );
};

export default RestaurantsScreen;
