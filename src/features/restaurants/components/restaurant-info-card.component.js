import React from 'react';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';
import { Image, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import star from '../../../../assets/star';
import open from '../../../../assets/open';

const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.body};
    color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled.View`
    padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
    flex-direction: row;
    padding-top: ${(props) => props.theme.space[2]};
    padding-bottom: ${(props) => props.theme.space[2]};
`;

const Address = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Section = styled.View`
    flex-direction: row;
    align-items: center;
`;

const SectionEnd = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
`;

const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = 'Some Restaurant',
        icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
        photos = [
            'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80'
        ],
        address = '100 some random street',
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Info>
                <Title>{name}</Title>
                <Section>
                    <Rating>
                        {ratingArray.map((_, i) => (
                            <SvgXml key={i} width={20} height={20} xml={star} />
                        ))}
                    </Rating>
                    <SectionEnd>
                        {isClosedTemporarily && (
                            <Text variant="label" style={{ color: 'red' }}>
                                CLOSED TEMPORARILY
                            </Text>
                        )}
                        <View style={{ paddingLeft: 16 }} />
                        {isOpenNow && (
                            <SvgXml xml={open} width={20} height={20} />
                        )}
                        <View style={{ paddingLeft: 16 }} />
                        <Image style={{ width: 15, height: 15}} source={{ uri: icon }} />
                    </SectionEnd>
                </Section>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    );
};

export default RestaurantInfoCard;
