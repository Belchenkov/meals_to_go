import React from 'react';
import { Text } from 'react-native';

const RestaurantInfo = ({ restaurant = {} }) => {
    const {
        name = 'Some Restaurant',
        icon,
        photos = [
            'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80'
        ],
        address = '100 some random street',
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily,
    } = restaurant;
    return <Text>{name}</Text>;
};

export default RestaurantInfo;
