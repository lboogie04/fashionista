import mixpanel from 'mixpanel-browser';

mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN);
console.log(`Mixpanel: ${process.env.REACT_APP_MIXPANEL_TOKEN}`);

let env_check = process.env.NODE_ENV === 'production';
console.log(`Mixpanel ENV: ${env_check}`);

export let Mixpanel = {
  identify: (id) => {
    if (env_check) 
      mixpanel.identify(id);
  },
  alias: (id) => {
    if (env_check) 
      mixpanel.alias(id);
  },
  track: (name, props) => {
    if (env_check) 
      mixpanel.track(name, props);
  }
};
