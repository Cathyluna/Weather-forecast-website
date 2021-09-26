import { myAPIkey } from "./config";

//关于api的更多信息请参考：https://openweathermap.org/api 
export const getLocationWeather =  async (lat, lon) => {
    try{
        const response = await fetch (`https://api.openweathermap.org/data/2.5/onecall?appid=${myAPIkey}&units=metric&exclude=minutely&lat=${lat}$lon=${lon}`);
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        }
        throw new Error('Request Failed!');
    } catch (error) {
        console.log(error);
    }
};