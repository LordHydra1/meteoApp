import moment from 'moment';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { List } from '../../../common/interfaces/WeeklyCityWeatherInterface';
import { Weather } from '../../homepage/components/ItemListComponents';

interface Props {
    item: List;
    timezone: number
}


const CardComponent = (props: Props) => {
    const weather = props.item.weather?.map(v => v.main);

    const imageBackGround = () => {
        if (String(weather) == Weather.CLOUDS) {
            return require('../../../assets/images/Cloudy.png')
        } else if (String(weather) == Weather.CLEAR) {
            return require('../../../assets/images/Sunny.png')
        } else {
            return require('../../../assets/images/ModRainSwrsDay.png')
        }
    }
    const temperature = () => {
        const temp = props.item.main?.temp?.toString().split('.')
        return temp![0]
    }

    const localeHour = (value:number) => {
        let date = new Date(props.item.dt! * 1000 - (props.timezone! * 1000));
        let datesplit = moment(date).locale("it").format('LLLL').split(' ', value);
        if(value ==1){
            return datesplit;
        } else {
            return datesplit[4];
        }

        
    }
    return (
        <View style={styles.cardView}>
            <Text style={styles.cityText}>{localeHour(1)}</Text>
            <Text style={styles.temperatureText}>{temperature()}°</Text>
            <View style={styles.imageCentered}>
                <Image source={imageBackGround()} />
            </View>
            <Text style={styles.textHour}>{localeHour(5)}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    cardView: {
        flex: 1, flexDirection: 'column',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
        height: 230,
        width: 150,
        borderRadius: 20,
        marginHorizontal: 10,
        backgroundColor: 'rgba(255,255,255,0.1)'
    },
    imageCentered: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        height: 90
    },
    cityText: { fontFamily: 'Poppins-Medium', fontSize: 20, color: "#FFFFFF", textAlign: 'center', textTransform: 'capitalize', marginTop: 10 },
    temperatureText: { fontFamily: 'Poppins-Bold', color: '#FFFFFF', fontSize: 30, textAlign: 'center' },
    textHour: {fontFamily: 'Poppins-Medium', fontSize: 20, color: "#FFFFFF", textAlign: 'center', textTransform: 'capitalize', marginBottom: 10, marginTop:5 }
})

export default CardComponent;