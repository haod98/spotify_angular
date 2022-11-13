// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  CLIENT_ID: 'a8359e73b0664931bc195c90df87d0d1',
  BASE_URL: 'localhost:4200/',
  SPOTIFY_BASE_URL: 'https://api.spotify.com/',
  authorizationEndpoint: `https://accounts.spotify.com/authorize?client_id=a8359e73b0664931bc195c90df87d0d1&response_type=token&redirect_uri=${encodeURIComponent(
    'http://localhost:4200/logged-redirect'
  )}&scope=${encodeURIComponent(
    'user-follow-read user-read-currently-playing user-library-modify playlist-modify-private playlist-modify-public user-library-read user-top-read'
  )}`,
  LOCAL_STORAGE_DATA_NAME: 'responseData'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
