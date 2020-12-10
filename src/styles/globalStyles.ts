import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
    ${normalize};

*,
*::before,
*::after {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
    }

    /* Remove default margin and padding */
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
    	margin: 0;
    	padding: 0;
    	border: 0;
    	font-size: 100%;
    	font: inherit;
    	vertical-align: baseline;
    }

    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
    	display: block;
    }


        /* apply custom styles */

    html {
        font-size: ${({ theme }) => theme.fonts.size.base};
    }
    /* Set core body defaults */
    body {
    	min-height: 100vh;
    	scroll-behavior: smooth;
    	text-rendering: optimizeSpeed;
	    background-image: url('../assets//bg.png');
	    background-size: cover;
        font-family: ${({ theme }) => theme.fonts.family.openSans};
        
    }

    /* Remove list styles on ul, ol elements with a class   attribute */
    ul,
    ol, li {
    	list-style-type: none;
    }

    /* A elements that don't have a class get default styles */
    a {
    	text-decoration:none
    }

    /* Make images easier to work with */
    img {
    	max-width: 100%;
    	display: block;
    }

    /* Natural flow and rhythm in articles by default */
    article > * + * {
    	margin-top: 1em;
    }

    /* Inherit fonts for inputs and buttons */
    input,
    button,
    textarea,
    select {
    	font: inherit;
    }

    table {
    	border-collapse: collapse;
    	border-spacing: 0;
    }

    /* Remove all animations and transitions for people that    prefer not to see them */
    @media (prefers-reduced-motion: reduce) {
    	* {
    		animation-duration: 0.01ms !important;
    		animation-iteration-count: 1 !important;
    		transition-duration: 0.01ms !important;
    		scroll-behavior: auto !important;
    	}
    }


    .wrapper {
        width: 1170px;
        max-width: 100%;
        margin: 0 auto;
        padding-left: 1em;
        padding-right: 1em;
/* 
        @media (min-width: 1170px) {
            max-width: 1170px
        } */
    }

    .dashboard {
        padding: 0 3em;
    }

    .row {
        display: flex;
        justify-content: space-between;
        gap: 3em;
    }

    .col {
        flex-direction: column;
    }

    .layout {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        height: calc(100vh - 81px);

        @media screen and (min-width: 800px) {
            grid-template-columns: 250px auto;
            grid-template-rows: 1fr;
        }
    }



`;
