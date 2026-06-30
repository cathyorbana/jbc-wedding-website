document.addEventListener("DOMContentLoaded", async () => {

    const app = document.getElementById("app");

    app.innerHTML = renderHero();

    try {

        await getGuests();

        await sleep(2000);

        app.innerHTML = renderScene2();

    } catch (error) {

        console.error(error);

    }

});