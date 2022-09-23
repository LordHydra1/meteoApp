import { AnyAction, bindActionCreators, Dispatch } from '@reduxjs/toolkit';
import React, { useCallback, useEffect } from 'react';
import {
    ActivityIndicator,
    FlatList,
    ListRenderItemInfo,
    SafeAreaView, StatusBar,
    StyleSheet, View
} from 'react-native';
import { connect } from 'react-redux';
import { SingleCityWeatherInterface } from '../../common/interfaces/SingleCityWeatherInterface';
import { GetWeatherInfo } from '../../redux/actions/homepage.actions';
import { RootState } from '../../redux/store.config';
import ItemComponent from './components/ItemListComponents';


interface HompageViewProps {
    name: String;
}


const Home: React.FC<Props> = (props: Props) => {


    const fetchData = useCallback(async () => {
        const London = "London"
        const Turin = "Turin"
        const Lecce = "Lecce"
        await props.GetWeatherInfo(London);
        await props.GetWeatherInfo(Turin);
        await props.GetWeatherInfo(Lecce);
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData]);


    
    return (
        <SafeAreaView style={styles.container}>
            <View>
                {
                    props.homepage?.loading!
                        ?
                        <>
                            <ActivityIndicator></ActivityIndicator>
                        </>
                        :
                        <>
                            <FlatList
                                data={props.homepage?.cities!}
                                renderItem={({ item }: ListRenderItemInfo<SingleCityWeatherInterface>) => (
                                    <ItemComponent item={item} />
                                )}
                                       
                            />
                        </>
                }
            </View>
        </SafeAreaView>


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
        height: 140,
        flexDirection: 'row',
        backgroundColor: '#494B53'
    },
});

const mapStateToProps = (state: RootState) => ({
    homepage: state.homepage,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
    bindActionCreators(
        {
            GetWeatherInfo
        },
        dispatch
    );
export type Props = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps> &
    HompageViewProps;

export default connect(mapStateToProps, mapDispatchToProps)(Home);
