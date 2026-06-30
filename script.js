async function init() {

    const data = await getGuests();

    console.log(data);

}

init();