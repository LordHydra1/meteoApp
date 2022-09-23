import { SingleCityWeatherInterface } from "../../common/interfaces/SingleCityWeatherInterface";
import { WeeklyCityWeatherInterface } from "../../common/interfaces/WeeklyCityWeatherInterface";

export interface HomepageState {
    loading: boolean,
    cities: SingleCityWeatherInterface[], 
    weeklyWeather: WeeklyCityWeatherInterface
  }
  
  export const initialHomepageState: HomepageState = {
    loading: false,
    cities: [], 
    weeklyWeather:{} as WeeklyCityWeatherInterface
  };