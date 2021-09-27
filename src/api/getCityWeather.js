//请在本地文件夹下创建config.js保存自己的apikey，比如：export const myAPIkey = "123";
import { myAPIkey } from "./config";

//关于api的更多信息请参考：https://openweathermap.org/api 
export const getCityWeather = async (city) => {
    try {
        const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?appid=${myAPIkey}&units=metric&q=${city}`);
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        }
        throw new Error('Request Failed!');
    } catch (error) {
        console.log(error);
    }
};