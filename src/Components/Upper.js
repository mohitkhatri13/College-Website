import React from "react";
import "./style.css"
const Upper = () => {
    return (
        <div>
            <header>
                <a class="logo" href="/"><img src="/images/logo.png" alt="logo"/></a>
                <nav>
                    <ul class="nav__links">
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </nav>
                <a class="cta" href="#">Contact</a>
                <p class="menu cta">Menu</p>
            </header>
            <div class="overlay">
                <a class="close">&times;</a>
                <div class="overlay__content">
                    <a href="#">Services</a>
                    <a href="#">Projects</a>
                    <a href="#">About</a>
                </div>
            </div>
            <div class="main">
                <div class="page1">
                    <h1>Elevate your student experinece <br/> Join the community !</h1>
                    <button id="button"><a href="">Explore now</a></button>
                </div>
                <div class="page2">
                    <h1>Our community Partner</h1>
                    <div class="states">
                        <div class="box">popular</div>
                        <div class="box">delhi</div>
                        <div class="box">uttrakhand</div>
                        <div class="box">uttar pradesh</div>
                        <div class="box">punjab</div>
                        <div class="box">chennai</div>
                        <div class="box">kerela</div>
                    </div>
                    <div class="images">
                        <div class="stateimg"><img src="" alt="img"/></div>
                        <div class="stateimg"><img src="" alt="img"/></div>
                        <div class="stateimg"><img src="" alt="img"/></div>
                        <div class="stateimg"><img src="" alt="img"/></div>
                        <div class="stateimg"><img src="" alt="img"/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Upper