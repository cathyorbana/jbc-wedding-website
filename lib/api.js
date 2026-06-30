async function getGuests() {

    const response = await fetch(CONFIG.API_URL);

    return await response.json();

}