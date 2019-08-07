import React from 'react';
import {Container,CantactList,AddContact,Cantact,UserImg,Name,UserContainer,List,
    Store,
    ListItemContainer,
    ListWrapper,
    Item,
    Price,
    Local,
    IconWrapper,

} from './styles';
import Icons from 'react-native-vector-icons/Feather';
import Contacts from '../../services/contact.json'
import TransationsList from '../../services/transations.json'

const Transations = ()=>{
    return(
        <Container>
            <CantactList>
                <AddContact>
                <Icons name="share" size={20} color="#fff"/>
                </AddContact>


                <Cantact>
                    {Contacts.map((user)=>{
                        return(
                        <UserContainer key={user.id}>
                            <UserImg source={{uri:user.img}}/>
                            <Name>{user.name}</Name>
                        </UserContainer>
                        )
                    })}
                </Cantact>
            </CantactList>


            <List>
                {TransationsList.map((item)=>{
                    return(
                        <ListItemContainer key={item.id}>
                            <ListWrapper>
                                <IconWrapper>
                                <Icons name={item.icon} size={18} color="#055aea"/>
                                </IconWrapper>
                                <Store>
                                    <Item>{item.store}</Item>
                                    <Local>{item.local}</Local>
                                </Store>
                                
                              
                                 <Price>{item.price}</Price>
                               

                            </ListWrapper>
                               

                        </ListItemContainer>

                    );
                })}

            </List>

        </Container>
    );
}

export default Transations;