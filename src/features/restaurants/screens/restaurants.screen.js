import React, { useContext, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import styled from 'styled-components/native';

import RestaurantInfoCard from '../components/restaurant-info-card.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { FavouritesContext } from '../../../services/favourites/favourites.context';
import Search from '../components/search.component';
import FavouritesBar from '../../../components/favourites/favourites-bar.component';

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    },
})``;

const Loading = styled(ActivityIndicator)`
    margin-left: -25px;
`;

const LoadingContainer = styled.View`
    position: absolute;
    top: 50%;
    left: 50%;
`;

const RestaurantsScreen = ({ navigation }) => {
    const { restaurants, isLoading } = useContext(RestaurantsContext);
    const { favourites } = useContext(FavouritesContext);
    const [isToggled, setIsToggled] = useState(false);

    return (
        <SafeArea>
            <Search
                isFavouritesToggled={isToggled}
                onFavouritesToggle={() => setIsToggled(!isToggled)}
            />

            {isToggled && (
                <FavouritesBar
                    favourites={favourites}
                    onNavigate={navigation.navigate}
                />
            )}

            {!isLoading ? (
                <RestaurantList
                    data={restaurants}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate('RestaurantDetail', {
                                        restaurant: item,
                                    })
                                }
                            >
                                <Spacer position="bottom" size="large">
                                    <RestaurantInfoCard restaurant={item} />
                                </Spacer>
                            </TouchableOpacity>
                        );
                    }}
                    keyExtractor={(item) => item.name}
                    contentContainerStyle={{ padding: 16 }}
                />
            ) : (
                <LoadingContainer>
                    <Loading
                        size={50}
                        animating={true}
                        color={Colors.blue300}
                    />
                </LoadingContainer>
            )}
        </SafeArea>
    );
};

export default RestaurantsScreen;
