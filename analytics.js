
async function ae() {
    const ipInfoUrl = "https://ipapi.co/json"
    const aApiUrl = "https://api.grattachecca.net/analytics/registerevent";

    fetch(ipInfoUrl)
    .then(res => res.json())
    .then(ipInfo => {

        dataToSend = {
            country: ipInfo.country_name,
            latitude: ipInfo.latitude,
            longitude: ipInfo.longitude,
            screen_width: window.innerWidth,
            screen_height: window.innerHeight,
        }

        urlObj = new URL(aApiUrl);
        for(const key in dataToSend) {
            urlObj.searchParams.append(key, dataToSend[key]);
        }
        return fetch(urlObj);
    });
}