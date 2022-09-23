import { AnyAction, bindActionCreators, Dispatch } from '@reduxjs/toolkit';
import moment from 'moment';
import React, { useCallback, useEffect } from 'react';
import { View, Text, Image, StyleSheet, StatusBar, FlatList, ListRenderItemInfo } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { RootState } from '../../redux/store.config';
import HeaderComponent from './components/header.component';
import { GetWeeklyInfo } from '../../redux/actions/homepage.actions';
import { Weather } from '../homepage/components/ItemListComponents';
import { List } from '../../common/interfaces/WeeklyCityWeatherInterface';
import CardComponent from './components/card.component';




interface DettaglioProps {

}

const Dettaglio: React.FC<Props> = (props: Props) => {

    console.log('propspropspropspropspropspropspropspropspropspropspropsprops', props)

    const fetchData = useCallback(async () => {
        await props.GetWeeklyInfo(props.route.params.item.name);
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData]);



    const localeHour = (value: number) => {
        let date = new Date(props.route.params.item.dt! * 1000 - (props.route.params.item.timezone! * 1000));
        let datesplit = moment(date).locale("it").format('LLLL').split(' ', value);
        if (value == 2) {
            console.log('provaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',date, datesplit)
            return datesplit.join(' ');
        } else {
            return datesplit[2];
        }
    }

    const imageBackGround = () => {
        const weather = props.route.params.item.weather?.map(v => v.main);
        if (String(weather) == Weather.CLOUDS) {
            return require('../../assets/images/Cloudy.png')
        } else if (String(weather) == Weather.CLEAR) {
            return require('../../assets/images/Sunny.png')
        } else {
            return require('../../assets/images/ModRainSwrsDay.png')
        }
    }

    const centerWeatherCondition = () => {
        const weather = props.route.params.item.weather?.map(v => v.main);
        if (String(weather) == Weather.CLOUDS) {
            return "Cloudy"
        } else if (String(weather) == Weather.CLEAR) {
            return "Sunny"
        } else {
            return "Rainy"
        }
    }

    const temperature = () => {
        const temp = props.route.params.item.main?.temp?.toString().split('.')
        return temp![0]
    }


    return (
        <LinearGradient style={{ flex: 1 }} colors={['#77B9F5', '#5374E7']}>
            <HeaderComponent cityName={props.route.params.item.name} />
            <View style={styles.centeredView}>
                <Text style={styles.cityText}>{localeHour(2)}, {localeHour(3)}</Text>
            </View>
            <View style={styles.centeredView}>
                <Text style={styles.weatherText}>{centerWeatherCondition()}</Text>
            </View>
            <View style={styles.centeredViewRow}>
                <View style={{ flexDirection: 'column', marginRight: 20 }}>
                    <Image source={imageBackGround()} />
                </View>
                <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                    <Text style={styles.temperatureText}>{temperature()}°</Text>
                </View>
            </View>
            <View style={{marginTop:100}}>
                <FlatList data={props.homepage?.weeklyWeather?.list!}
                              renderItem={({ item }: ListRenderItemInfo<List>) => (
                                <CardComponent item={item} timezone={props.route.params.item.timezone!}/>
                            )}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                />
            </View>
        </LinearGradient>
    )

}

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
    cityText: { fontFamily: 'Poppins-Medium', fontSize: 20, color: "#FFFFFF", marginTop: 10 },
    weatherText: { fontFamily: 'Poppins-Light', fontSize: 18, color: "#FFFFFF", marginTop: 5, textTransform: 'capitalize' },
    firstView: {
        flexDirection: 'column',
        width: '33%'
    },
    centeredView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    centeredViewRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    temperatureText: { fontFamily: 'Poppins-Bold', color: '#FFFFFF', fontSize: 70, marginTop: 15 }
});

const mapStateToProps = (state: RootState) => ({
    homepage: state.homepage,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
    bindActionCreators(
        {
            GetWeeklyInfo
        },
        dispatch
    );
export type Props = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps> &
    DettaglioProps;

export default connect(mapStateToProps, mapDispatchToProps)(Dettaglio);


