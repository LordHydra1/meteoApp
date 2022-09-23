import { SingleCityWeatherInterface } from "../../common/interfaces/SingleCityWeatherInterface";
import { WeeklyCityWeatherInterface } from "../../common/interfaces/WeeklyCityWeatherInterface";


export const ITEM_FAIL_WEATHER = "ItemFailWeather";
export const ITEM_LOADING_WEATHER = "ItemLoadingWeather";
export const ITEM_SUCCESS_WEATHER = "ItemSuccessWeather";
export const ITEM_FAIL_WEEKLY_WEATHERS = "ItemFailWeeklyWeathers";
export const ITEM_LOADING_WEEKLY_WEATHERS = "ItemLoadingWeeklyWeathers";
export const ITEM_SUCCESS_WEEKLY_WEATHERS = "ItemSuccessWeeklyWeathers";

export interface ItemFailWeather {
  type: typeof ITEM_FAIL_WEATHER;
}
export interface ItemLoadingWeather {
  type: typeof ITEM_LOADING_WEATHER;
  payload: boolean
}
export interface ItemSuccessWeather {
  type: typeof ITEM_SUCCESS_WEATHER;
  payload: SingleCityWeatherInterface;
}

export interface ItemFailWeeklyWeathers {
  type: typeof ITEM_FAIL_WEEKLY_WEATHERS;
}
export interface ItemLoadingWeeklyWeathers{
  type: typeof ITEM_LOADING_WEEKLY_WEATHERS;
  payload: boolean
}
export interface ItemSuccessWeeklyWeathers {
  type: typeof ITEM_SUCCESS_WEEKLY_WEATHERS;
  payload: WeeklyCityWeatherInterface;
}

export type HomepageActionTypes =
  | ItemFailWeather
  | ItemLoadingWeather
  | ItemSuccessWeather
  | ItemFailWeeklyWeathers
  | ItemLoadingWeeklyWeathers
  | ItemSuccessWeeklyWeathers;