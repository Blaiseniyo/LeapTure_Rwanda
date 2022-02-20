import * as types from './type'

export const initialState = {
  city:"LONDON",
  data:null,
  error:null,
  pending:false
}

const WeatherReducer = (state = initialState, action) =>{
    switch (action.type) {
      case types.GET_WEATHER_SUCCESS:
        return {
            ...state,
            data:action.data
        }
    case types.GET_WEATHER_FAILURE:
        return{
            ...state,
            error:action.error
        }
      

    //   case 'splash_back':
    //     return initialState
      default:
        return state
    }
  }

export default WeatherReducer
