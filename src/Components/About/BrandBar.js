import React from 'react';

const BrandBar = () => {
    return (
        <div id="brandBar">
            <p>Follow me on:</p>
            <span id="twitterIcon">
                <a href="https://twitter.com/dhintz89"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter" width="30" height="30" viewBox="0 0 24 24" stroke-width="1" stroke="#F5F8FA" fill="#1DA1F2" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" />
                </svg></a>
            </span>
            <span id="linkedInIcon">
                <a href="https://www.linkedin.com/in/dan-hintz/"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" stroke="#F5F8FA" fill="#0072b1"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
            </span>
            <span id="devIcon">
                <a href="https://dev.to/dhintz89"><img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Daniel Hintz's DEV Profile" height="30" width="30"/></a>
            </span>
        </div>
    )
}

export default BrandBar;