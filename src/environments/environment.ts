// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  passport: {
    login: 'https://api.fitgum.ru/login',
    register: 'https://api.fitgum.ru/register',
    profile: 'https://api.fitgum.ru/cabinet'
  },
  clubs: 'http://api.gym.earth/clubs',
  news: 'https://api.fitgum.ru/news',
  trainers: 'https://api.fitgum.ru/trainers',
  vacancies: 'https://api.fitgum.ru/vacancies',
  videos: 'https://api.fitgum.ru/videos',
  programs: 'https://api.fitgum.ru/programs',
  messages: {
    send: 'https://api.fitgum.ru/messages/send',
    get: 'https://api.fitgum.ru/messages/get',
    chats: 'https://api.fitgum.ru/messages/chats'
  },
  cabinet: {
    avatar: 'https://api.fitgum.ru/cabinet/avatar'
  },
  users: {
    trainers: 'https://api.fitgum.ru/users/trainers'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
