import  React from 'react'

import { Container,User,IconBorder} from './styles'

import Icons from 'react-native-vector-icons/Feather'

const Header = ()=>{

    return(

        <Container>
            <IconBorder>
            <Icons name="bar-chart-2" size={18} color="#fff"/>
            </IconBorder>
            <User>Good Morning, Leonardo</User>
            <IconBorder>
            <Icons name="credit-card" size={18} color="#fff"/>
            </IconBorder>
        </Container>
    );


}


export default Header;