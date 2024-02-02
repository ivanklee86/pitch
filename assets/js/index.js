// JavaScript files are compiled and minified during the build process to the assets/built folder. See available scripts in the package.json file.

// Import CSS
import '../css/index.css';

// Import JS
import { toggleDarkMode } from './darkMode';
import { initSliders } from './initSliders';
import { loadMore } from './loadMore';
import { hideHeader, changeHeaderTransparency, showSubNav } from './header';
import { scrollTop, scrollTopAlign } from './scrollTop';
import { insertWidget } from './widget';
import { copyToClipboard } from './copyToClipBoard';
import { togglePlan } from './membershipToggle';
import { calcHeight } from './membershipCard';
import { initMobileMenu } from './mobileMenu';
import { changeTwitterCardTheme } from './twitterTheme';

showSubNav();
toggleDarkMode(changeTwitterCardTheme);
initSliders();
loadMore();
hideHeader();
changeHeaderTransparency();
scrollTop();
insertWidget();
copyToClipboard();
togglePlan();
calcHeight();
initMobileMenu();

window.addEventListener('load', changeTwitterCardTheme);
window.addEventListener('load', scrollTopAlign);
