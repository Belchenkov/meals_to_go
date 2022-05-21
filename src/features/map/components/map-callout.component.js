import React from 'react';
import styled from 'styled-components/native';

const MyText = styled.Text``;

const MapCallout = ({ restaurant }) => {
    return (
        <MyText>{restaurant.name}</MyText>
    );
};

export default MapCallout;