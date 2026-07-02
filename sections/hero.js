function renderHero() {

    return `

    <section class="hero">

        <div class="hero-header">

            <h1>John Bert and Cath</h1>

            <h2>ARE GETTING MARRIED</h2>

            <p>01 . 09 . 27</p>

        </div>

        <div class="hero-card">

            <img
                class="hero-cat"
                src="assets/images/messenger-cat.png"
                alt="Messenger Cat"
            >

            <div class="hero-heart">♡</div>

            <h3>
                Let's find
                <br>
                your invitation.
            </h3>

            <p class="hero-description">
                Enter your name below so we can
                find it in our guest list.
            </p>

            <div class="search-box">

                <input
                    id="guestSearch"
                    type="text"
                    placeholder="Type your full name"
                >

                <button id="findGuestBtn">
                    Find My Invitation →
                </button>

            </div>

            <div class="hero-footer">

                🔒 This invitation is exclusively for our guests.

            </div>

        </div>

        <p class="bottom-text">
            We can't wait to celebrate with you.
        </p>

    </section>

    `;

}