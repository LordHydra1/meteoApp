import axios from "axios";
import { Dispatch } from "react";
import { SingleCityWeatherInterface } from "../../common/interfaces/SingleCityWeatherInterface";
import { WeeklyCityWeatherInterface } from "../../common/interfaces/WeeklyCityWeatherInterface";
import { HomepageActionTypes, ITEM_FAIL_WEATHER, ITEM_FAIL_WEEKLY_WEATHERS, ITEM_LOADING_WEATHER, ITEM_LOADING_WEEKLY_WEATHERS, ITEM_SUCCESS_WEATHER, ITEM_SUCCESS_WEEKLY_WEATHERS } from "./homePage.actionsTypes";

export const apikey: String = "5a1d60a93edcf00c5a67e2a9482b4908";

export const GetWeatherInfo = (city: String) => async (
    dispatch: Dispatch<HomepageActionTypes>
  ) => {
    try {
      dispatch({
        type: ITEM_LOADING_WEATHER,
        payload: true
      });
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&lang=it&units=metric`);
      return dispatch({
        type: ITEM_SUCCESS_WEATHER,
        payload: response.data as SingleCityWeatherInterface,
      });
    } catch (e) {
      dispatch({
        type: ITEM_FAIL_WEATHER,
      });
    }
  };


  export const GetWeeklyInfo = (city: String) => async (
    dispatch: Dispatch<HomepageActionTypes>
  ) => {
    try {
      dispatch({
        type: ITEM_LOADING_WEEKLY_WEATHERS,
        payload: true
      });
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}&lang=it&units=metric&cnt=20`);
      return dispatch({
        type: ITEM_SUCCESS_WEEKLY_WEATHERS,
        payload: response.data as WeeklyCityWeatherInterface,
      });
    } catch (e) {
      dispatch({
        type: ITEM_FAIL_WEEKLY_WEATHERS,
      });
    }
  };