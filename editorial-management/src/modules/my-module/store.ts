
import { AxiosInstance, AxiosResponse } from 'axios';
import http from '../../services/http'
import { WeatherForecast } from './types';

export async function getWeather (){
    let res: AxiosResponse<WeatherForecast[]> = await http.get('/WeatherForecast');
    return res.data;
}