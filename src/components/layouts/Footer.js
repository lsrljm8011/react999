import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){
    return (
        <footer id="footer">
                <div>
                    <h4>email</h4>
                    <p><Link to="mailto:lsrljm98@gmail.com">lsrljm98@gmail.com</Link></p>
                </div>
                <div>
                    <h4>Kakao</h4>
                    <p><Link to="/">@serin8011</Link></p>
                </div>
                <div>
                    <h4>social</h4>
                    <ul>
                        <li><a href="https://www.instagram.com/rnnsernn/">Instargram</a></li>
                        <li><a href="https://lsrljm8011.github.io/dothome21/">Github</a></li>
                        <li><a href="http://lsrljm8011.dothome.co.kr/portfolio/index.html">Portfolio</a></li>
                    </ul>
                </div>
            </footer>
    )
}

export default Footer;