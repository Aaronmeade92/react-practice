 import superagent from 'superagent';

 export const FETCH = '/FETCH';

 const weatherAPI = 'api.openweathermap.org/data/2.5/forecast?q=seattle&APPID=3f611125a232194b5cddcf876dff23ec';

 export const fetch = (name) => ({
     type: FETCH,
     payload: name,
 });


export const fetchWeatherPlz = () => {
    return dispatch => {
        superagent.get(`${weatherAPI}`).then(response => {
            console.log(response.body);
            dispatch(fetch(response.body));
        }).catch((err) => {
            console.log(err);
        });
    };
};