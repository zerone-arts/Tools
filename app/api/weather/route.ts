export const getWeather = async (
  lat: number = 33.4996213,
  lon: number = 126.5311884
) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API}&units=metric`
    );
    const data = res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};
export const getForecast = async (
  lat: number = 33.4996213,
  lon: number = 126.5311884
) => {
  try {
    const res: any = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API}&units=metric`
    );
    const data = res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};
