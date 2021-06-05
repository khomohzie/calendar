import React from 'react'
import styled from 'styled-components/macro'
import Notification from './Notification'
import Profile from './Profile'
import Search from './Search'

const Header = () => {
    return (
        <Container>
            <SearchContainer>
                <Search />
            </SearchContainer>

            <NotificationContainer>
                <Notification />
            </NotificationContainer>

            <ProfileContainer>
                <Profile />
            </ProfileContainer>
        </Container>
    )
}

export default Header

const Container = styled.div`
    display: flex;
    max-width: 90%;
    align-items: center;
    margin: 0 10%;
`;

const SearchContainer = styled.div`
    flex: 3;
`;

const NotificationContainer = styled.div`
    flex: 1;

    &&&{
        margin-left: 50px;
    }
`;

const ProfileContainer = styled.div`
    flex: 1;
    justify-content: left;
`;
