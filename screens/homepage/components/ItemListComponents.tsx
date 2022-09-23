import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import 'moment/locale/it';
import React from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SingleCityWeatherInterface } from '../../../common/interfaces/SingleCityWeatherInterface';

interface Props {
    item: SingleCityWeatherInterface;
}
export enum Weather {
    CLOUDS = 'Clouds',
    CLEAR = 'Clear',
    RAIN = 'Rain'
}

const ItemComponent: React.FC<Props> = ({ item }) => {
    const navigation = useNavigation();
    const weather = item?.weather?.map(v => v.main);

    const localHour = () => {
        let date = new Date(item?.dt! * 1000 - (item?.timezone! * 1000));
        return moment(date).locale("it").format('LLLL')
    }
    const backgroundGradientColor = () => {
        if (String(weather) == Weather.CLOUDS) {
            return ['#464C64', '#99A9B9'];
        } else if (String(weather) == Weather.CLEAR) {
            return ['#5374E7', '#77B9F5'];
        } else {
            return ['#011354', '#5B9FE3'];
        }
    }

    const imageBackGround = () => {

        if (String(weather) == Weather.CLOUDS) {
            return require('../../../assets/images/Cloudy.png')
        } else if (String(weather) == Weather.CLEAR) {
            return require('../../../assets/images/Sunny.png')
        } else {
            return require('../../../assets/images/ModRainSwrsDay.png')
        }
    }

    const goToDetails = (item: SingleCityWeatherInterface) => {
        navigation.navigate("Dettaglio", { item })
    }

    const temperature = () => {
        const temp = item.main?.temp?.toString().split('.')
        return temp![0]
    }

    return (
        <TouchableOpacity onPress={() => { goToDetails(item) }}>
            <LinearGradient colors={backgroundGradientColor()}
                style={styles.cardView}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                locations={[0, 0.7, 0.9]}>
                <View style={styles.firstView}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.cityText}>
                            {item.name}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.dateText}>
                            {localHour()}
                        </Text>
                    </View>
                </View>
                <View style={styles.centeredView}>
                    <Image source={imageBackGround()} />
                </View>
                <View style={styles.centeredView}>
                    <Text style={styles.temperatureText}>{temperature()}°</Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    cardView: {
        flex: 1,
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 25,
        height: 125,
        flexDirection: 'row',
        backgroundColor: '#494B53'
    },
    cityText: { fontFamily: 'Poppins-SemiBold', marginHorizontal: 15, fontSize: 20, color: "#FFFFFF", marginTop: 20 },
    dateText: { fontFamily: 'Poppins-Medium', marginHorizontal: 15, fontSize: 12, color: "#FFFFFF", marginTop: 2, textTransform: 'capitalize' },
    firstView: {
        flexDirection: 'column',
        width: '33%'
    },
    centeredView: {
        flexDirection: 'column',
        width: '33%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    temperatureText: { fontFamily: 'Poppins-Bold', color: '#FFFFFF', fontSize: 50 }
});

export default ItemComponent;