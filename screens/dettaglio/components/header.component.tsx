import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
type Props = {
    cityName?: String
}

const HeaderComponent = (props: Props) => {

    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    }

    return (
        <View style={{ flexDirection: 'row', marginTop: 20, }}>
            <TouchableOpacity onPress={() => goBack()} style={{
                    flexDirection: 'column',
                    width: '33.3%', justifyContent: 'center',
                    alignItems: 'flex-start',
                }}>
                <View >
                    <Image source={require('../../../assets/images/arrowBack.png')} style={{
                        height: 15,
                        width: 20,
                        marginLeft: 15
                    }} />
                </View>
            </TouchableOpacity>
            <View style={{
                flexDirection: 'column', width: '33.3%',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 20, color:'#FFFFFF'}}>{props.cityName}</Text>
            </View>
            <View style={{
                flexDirection: 'column', width: '33.3%',
                justifyContent: 'center',
                alignItems: 'flex-end',
            }}>
                <Image source={require('../../../assets/images/plus.png')} style={{
                    height: 15,
                    width: 20,
                    marginRight: 15
                }} />

            </View>
        </View>
    )
}

export default HeaderComponent