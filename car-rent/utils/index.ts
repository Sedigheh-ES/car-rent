export async function fetchCars() {
    const headers = {
        'x-rapidapi-key': 'fc1584a21dmsh925737ce34dd977p146504jsn8bfc3b7a5db3',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });

    const result = await response.json();
    return result;
}