import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  
  @font-face {
    font-family: 'GowunBatang-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunBatang-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'NPSfontBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2310@1.0/NPSfontBold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}


@font-face {
    font-family: 'TTHakgyoansimSamulhamR';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2402_keris@1.0/TTHakgyoansimSamulhamR.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}



@font-face {
    font-family: 'SOGANGUNIVERSITYTTF';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2312-1@1.1/SOGANGUNIVERSITYTTF.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}


  
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

// 47번줄까지가 reset css입니다. 


*{
  box-sizing: border-box;
}

#root{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}



button{
  cursor: pointer;
}

textarea{
  resize: none;
}

body {
  box-sizing: border-box;
  background-color: #f2f6e7;
}


`;
