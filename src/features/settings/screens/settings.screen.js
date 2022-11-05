import React, { useContext } from 'react';
import { Avatar, List } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { SafeArea } from '../../../components/utility/safe-area.component';
import { AuthContext } from '../../../services/auth/auth.context';
import { Text } from '../../../components/typography/text.component';
import { Spacer } from '../../../components/spacer/spacer.component';

const SettingsItem = styled(List.Item)`
    padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
    align-items: center;
`;

const SettingsScreen = ({ navigation }) => {
    const { onLogout, user } = useContext(AuthContext);

    return (
        <SafeArea>
            <AvatarContainer>
                <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
                    <Avatar.Icon
                        size={150}
                        icon="human"
                        backgroundColor="#2182BD"
                    />
                </TouchableOpacity>
                <Spacer position="top" size="large">
                    <Text variant="caption">{user.email}</Text>
                </Spacer>
            </AvatarContainer>
            <List.Section>
                <SettingsItem
                    title="Favourites"
                    description="View your favourites"
                    left={(props) => (
                        <List.Icon {...props} color="black" icon="heart" />
                    )}
                    onPress={() => navigation.navigate('Favourites')}
                />
                <SettingsItem
                    title="Logout"
                    left={(props) => (
                        <List.Icon {...props} color="black" icon="door" />
                    )}
                    onPress={onLogout}
                />
            </List.Section>
        </SafeArea>
    );
};

export default SettingsScreen;
