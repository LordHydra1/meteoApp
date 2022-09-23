import {
  HomepageActionTypes,
  ITEM_FAIL_WEATHER,
  ITEM_FAIL_WEEKLY_WEATHERS,
  ITEM_LOADING_WEATHER,
  ITEM_LOADING_WEEKLY_WEATHERS,
  ITEM_SUCCESS_WEATHER,
  ITEM_SUCCESS_WEEKLY_WEATHERS
} from "../actions/homePage.actionsTypes";
import { HomepageState, initialHomepageState } from "../states/homepage.state";

const homepageReducer = (
  state: HomepageState = initialHomepageState,
  action: HomepageActionTypes
): HomepageState => {
  switch (action.type) {
    case ITEM_FAIL_WEATHER:
      return { ...state, loading: false };
    case ITEM_LOADING_WEATHER:
      return { ...state, loading: true };
    case ITEM_SUCCESS_WEATHER:
      const cities = [...state.cities, action.payload]
      let reducedArray = Array.from(cities.reduce((accumulator, obj) => accumulator.set(obj.id, obj), new Map()).values());
      return { ...state, loading: false, cities: reducedArray };
    case ITEM_FAIL_WEEKLY_WEATHERS:
      return { ...state, loading: false };
    case ITEM_LOADING_WEEKLY_WEATHERS:
      return { ...state, loading: true };
    case ITEM_SUCCESS_WEEKLY_WEATHERS:
      return { ...state, loading: false, weeklyWeather:  action.payload};
    default:
      return state;
  }
};

export default homepageReducer;


