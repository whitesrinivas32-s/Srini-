/* General Settings */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: 80px;
}

body {
    font-family: Arial, sans-serif;
    background: #0b1120;
    color: #ffffff;
    line-height: 1.7;
}

a {
    color: inherit;
    text-decoration: none;
}

/* Navigation */

header {
    background: #111a2e;
    border-bottom: 1px solid #26354f;
    position: sticky;
    top: 0;
    z-index: 100;
}

.navbar {
    max-width: 1150px;
    margin: auto;
    min-height: 75px;
    padding: 15px 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    color: #42e8c5;
    font-size: 25px;
    font-weight: bold;
}

#navLinks {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 24px;
}

#navLinks a {
    color: #d5deee;
    transition: 0.3s;
}

#navLinks a:hover,
#navLinks a.active {
    color: #42e8c5;
}

#menuToggle {
    display: none;
    background: none;
    color: white;
    border: none;
    font-size: 28px;
    cursor: pointer;
}

/* Home Section */

.hero {
    min-height: 570px;
    display: flex;
    align-items: center;
    padding: 80px 8%;
    background:
        radial-gradient(
            circle at top right,
            #1b3550,
            #0b1120 60%
        );
}

.hero-content {
    max-width: 850px;
}

.welcome {
    color: #42e8c5;
    font-weight: bold;
    letter-spacing: 3px;
    margin-bottom: 20px;
}

.hero h1 {
    font-size: clamp(35px, 6vw, 60px);
    line-height: 1.2;
    margin-bottom: 20px;
}

.hero h1 span {
    color: #42e8c5;
}

.hero h2 {
    color: #8ba9ff;
    font-size: clamp(20px, 3vw, 28px);
    margin-bottom: 20px;
}

.hero-content > p:not(.welcome) {
    color: #bdc9dc;
    max-width: 680px;
    margin-bottom: 30px;
}

/* Buttons */

.btn {
    display: inline-block;
    background: #42e8c5;
    color: #07131b;
    padding: 12px 22px;
    border-radius: 7px;
    font-weight: bold;
    margin: 5px 8px 5px 0;
    transition: 0.3s;
}

.btn:hover {
    transform: translateY(-3px);
    background: #ffffff;
}

.btn-outline {
    background: transparent;
    border: 1px solid #42e8c5;
    color: #42e8c5;
}

/* General Sections */

.section {
    padding: 80px 8%;
    text-align: center;
}

.section-title {
    font-size: clamp(28px, 4vw, 40px);
    margin-bottom: 40px;
}

.section-title::after {
    content: "";
    display: block;
    width: 65px;
    height: 4px;
    background: #42e8c5;
    margin: 12px auto 0;
    border-radius: 5px;
}

/* About */

.about-content {
    max-width: 850px;
    margin: auto;
    color: #c0cbe0;
    text-align: left;
}

.about-content p {
    margin-bottom: 18px;
}

/* Skills and Projects */

.skills-section {
    background: #101a2e;
}

.card-container {
    max-width: 1150px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 22px;
}

.card {
    text-align: left;
    padding: 25px;
    background: #15223a;
    border: 1px solid #293c59;
    border-radius: 12px;
    transition: 0.3s;
}

.card:hover {
    transform: translateY(-6px);
    border-color: #42e8c5;
}

.card h3 {
    color: #42e8c5;
    font-size: 20px;
    margin-bottom: 15px;
}

.card p {
    color: #c0cbe0;
    font-size: 15px;
    margin-bottom: 10px;
}

.technology {
    color: #8ba9ff !important;
    font-weight: bold;
    margin-top: 18px;
}

/* Contact */

.contact-section {
    background: #101a2e;
}

.contact-description {
    color: #c0cbe0;
    max-width: 650px;
    margin: 0 auto 25px;
}

.contact-details {
    max-width: 650px;
    margin: auto;
    text-align: left;
    background: #15223a;
    border: 1px solid #293c59;
    border-radius: 12px;
    padding: 25px;
}

.contact-details p {
    margin: 12px 0;
    overflow-wrap: anywhere;
}

.contact-details a {
    color: #42e8c5;
}

.contact-details a:hover {
    text-decoration: underline;
}

/* Footer */

footer {
    background: #070c17;
    color: #aebbd0;
    text-align: center;
    padding: 22px 15px;
    border-top: 1px solid #26354f;
}

/* Tablet */

@media (max-width: 900px) {
    .card-container {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    #navLinks {
        gap: 13px;
        font-size: 14px;
    }
}

/* Mobile */

@media (max-width: 650px) {
    .navbar {
        padding: 12px 20px;
    }

    #menuToggle {
        display: block;
    }

    #navLinks {
        display: none;
        position: absolute;
        top: 70px;
        left: 0;
        width: 100%;
        background: #111a2e;
        padding: 20px;
        flex-direction: column;
        align-items: stretch;
        gap: 15px;
    }

    #navLinks.open {
        display: flex;
    }

    .hero {
        min-height: 500px;
        padding: 70px 7%;
    }

    .section {
        padding: 60px 7%;
    }

    .card-container {
        grid-template-columns: 1fr;
    }

    .btn {
        margin-bottom: 10px;
    }

    .contact-details {
        padding: 18px;
    }
}
