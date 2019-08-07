import styled from 'styled-components/native';

export const Container = styled.View`
  flex:3;
  backgroundColor:#fff;
`;


export const CantactList = styled.View`
paddingLeft:15;
paddingBottom:10;
height:100;
width:100%;
backgroundColor:#EFF7FE;
justifyContent:center;
alignItems:center;
flexDirection:row;
`;

export const AddContact = styled.View`

height:50;
width:50;
marginTop:15;
marginRight:15;
marginBottom:15;
borderRadius:30;
backgroundColor:#055aea;
justifyContent:center;
alignItems:center;

`;
export const Cantact = styled.ScrollView.attrs({
  horizontal:true,
  contentContainerStyle:{paddingLeft:10,paddingRight:20},
  showsHorizontalScrollIndicator:false,

})
`
`;
export const UserContainer = styled.View`
justifyContent:center;
alignItems:center;

`;

export const UserImg = styled.Image`
  height:50;
  width:50;
backgroundColor:#021241;
  borderRadius:25;
  borderColor:#eee;
  borderWidth:3;
  marginTop:15;
  marginLeft:5;
  marginRight:5;
`;


export const Name = styled.Text`
font-size:12;
font-weight:bold;
color:#055aea;
marginLeft:5;
marginRight:5;
`;

export const List = styled.ScrollView.attrs({
  showsVerticalScrollIndicator:false,
})`
`;

export const ListItemContainer = styled.View``;

export const ListWrapper = styled.TouchableOpacity`
justifyContent:space-around;
alignItems:center;
flexDirection:row;
height:60;

`;

export const Item = styled.Text`

font-size:14;
font-weight:bold;
color:#021241;
`;

export const Store = styled.View`

width:50%;
`;

export const Price = styled.Text`
font-size:13;
font-weight:bold;
color:#021241;

`;

export const Local = styled.Text`

font-size:11;
font-weight:bold;
color:#ccc;

`;

export const IconWrapper = styled.View`

width:40;
height:60;
justifyContent:center;
alignItems:center;
`;


