export const config = {
  port: process.env.PORT || 3000,
  appName: 'TalenVines',
  author: 'Giri',
  theme: {
    colors: {
      coral: '#FF6B6B',
      peach: '#FFEAA7',
      softPink: '#FD79A8',
      cream: '#FFF5E4',
      warmYellow: '#FDCB6E',
      deepRose: '#E84545',
      blush: '#FFB8B8',
      roseGold: '#B76E79',
      sunset: '#FA8072',
    },
  },
};

export type AppConfig = typeof config;
