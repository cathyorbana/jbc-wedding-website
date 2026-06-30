document.addEventListener("DOMContentLoaded", async () => {

    const app = document.getElementById("app");

    app.innerHTML = renderHero();

    try {

        const guests = await getGuests();

        console.log("Guests Loaded:", guests);

        await sleep(2500);

        // Scene 2 will start here
        console.log("Proceed to Scene 2");

    } catch (error) {

        console.error(error);

    }

});