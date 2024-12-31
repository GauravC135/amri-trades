// Resources.js

import React from 'react';
import './Resources.css';

const Resources = () => {
    return (
        <div className="resources-container">
            <header className="resources-header">
                <h1>Resources for Stock Market Trading</h1>
                <p>Choose the right broker and start your trading journey today.</p>
            </header>

            <section className="broker-section">
                <div className="broker-card">
                    <h2>Dhan</h2>
                    <p>Dhan is a modern trading platform known for its intuitive interface and powerful features designed for active traders and investors.</p>
                    <ul>
                        <li><strong>User-friendly Design:</strong> Simple and efficient navigation for both beginners and experts.</li>
                        <li><strong>Advanced Trading Tools:</strong> Real-time data, charting options, and analysis tools.</li>
                        <li><strong>Low Brokerage Fees:</strong> Transparent and competitive pricing.</li>
                        <li><strong>Mobile & Web Platforms:</strong> Access your portfolio anytime, anywhere.</li>
                    </ul>
                    <a href="#" className="cta-button">Open a DEMAT Account with Dhan</a>
                </div>

                <div className="broker-card">
                    <h2>Fyers</h2>
                    <p>Fyers is ideal for traders looking for an innovative trading experience with cutting-edge technology.</p>
                    <ul>
                        <li><strong>Charting Excellence:</strong> Over 65 technical indicators and customizable charts.</li>
                        <li><strong>Free Investment Options:</strong> Zero brokerage on equity delivery trades.</li>
                        <li><strong>Robust Platforms:</strong> Desktop, web, and mobile versions tailored to various trading needs.</li>
                        <li><strong>API for Developers:</strong> Build custom trading strategies with Fyers\u2019 API.</li>
                    </ul>
                    <a href="#" className="cta-button">Open a DEMAT Account with Fyers</a>
                </div>

                <div className="broker-card">
                    <h2>Kotak Neo</h2>
                    <p>Kotak Neo, from the reputed Kotak Group, is a comprehensive platform catering to all types of investors.</p>
                    <ul>
                        <li><strong>Trusted Brand:</strong> Backed by Kotak Group\u2019s legacy of financial excellence.</li>
                        <li><strong>Wide Range of Offerings:</strong> Stocks, mutual funds, IPOs, and more.</li>
                        <li><strong>Competitive Pricing:</strong> Attractive brokerage plans.</li>
                        <li><strong>All-in-One App:</strong> Seamlessly manage your investments with a single app.</li>
                    </ul>
                    <a href="#" className="cta-button">Open a DEMAT Account with Kotak Neo</a>
                </div>
            </section>

            <section className="why-DEMAT-section">
                <h2>Why Open a DEMAT Account?</h2>
                <p>A DEMAT (Dematerialized) account is essential for storing your investments in electronic form. It offers:</p>
                <ul>
                    <li><strong>Secure Transactions:</strong> Safe storage for shares and securities.</li>
                    <li><strong>Easy Access:</strong> Manage your portfolio online or via apps.</li>
                    <li><strong>Seamless Trading:</strong> Buy and sell stocks effortlessly.</li>
                </ul>
                <p>Take the first step towards building your portfolio by opening a DEMAT account with one of these trusted brokers today!</p>
            </section>
        </div>
    );
};

export default Resources;
