

function getWeatherForecast(callback) {
    console.log("ამინდის მონაცემები იტვირთება...");

    setTimeout(() => {
        const conditions = ["sunny", "rainy", "snowy", "windy", "cloudy"];
        const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
        const randomTemperature = Math.floor(Math.random() * 35) - 5; 

        const weatherData = {
            temperature: randomTemperature,
            condition: randomCondition
        };

        callback(weatherData);
    }, 1500);
}


function showWeatherAdvice(weatherData) {
    const { temperature, condition } = weatherData;

    console.log(`ტემპერატურა: ${temperature}°C, მდგომარეობა: ${condition}`);

    switch (condition) {
        case "rainy":
            console.log("აიღე ქოლგა, გარეთ წვიმს!");
            break;
        case "snowy":
            console.log("ჩაიცვი თბილად, თოვს!");
            break;
        case "windy":
            console.log("ქარია, ფრთხილად!");
            break;
        case "sunny":
            console.log("მზეა, არ დაგავიწყდეს სათვალე!");
            break;
        default:
            console.log("ღრუბლიანი დღეა, ჩაიცვი მოსაცმელი.");
    }

    if (temperature <= 0) {
        console.log("ცივა ჩაიცვი მოსაცმელი და ხელთათმანები.");
    } else if (temperature >= 28) {
        console.log("ცხელა დალიე საკმარისი წყალი.");
    }
}


getWeatherForecast(showWeatherAdvice);