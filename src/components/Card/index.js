import React from 'react';
import { Container,CardB,MoneyContainer,Money,Rewards,CardNumberContainer,Number,
    DateContainer,
    Date,
    Flag
} from './styles'
const Card = () =>{
    return(
        <Container>
            <CardB
                source={require('../../assets/card.png')}
                  resizeMode="contain"
                  imageStyle={{ borderRadius: 5}}
                >

                    <MoneyContainer>
                        <Money>R$ 5.673,00</Money>
                        <Rewards>ONLINE REWARDS</Rewards>
                    </MoneyContainer>

                    <CardNumberContainer>
                        <Number>**** **** **** 0316</Number>
                    </CardNumberContainer>

                    <DateContainer>
                        <Date>11/23</Date>
                        <Flag
                         source={require('../../assets/mastercard.png')}
                         resizeMode="contain"
                        ></Flag>
                    </DateContainer>
            </CardB>
        </Container>
    );
}

export default Card;