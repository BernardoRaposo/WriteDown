// lib/ga.js
import ReactGA from 'react-ga4';

const GA_TRACKING_ID = 'G-RX952BWNC2'; // Replace with your tracking ID

export const initGA = () => {
  ReactGA.initialize(GA_TRACKING_ID);
};

export const logPageView = (url) => {
  ReactGA.send({ hitType: 'pageview', page: url });
};
