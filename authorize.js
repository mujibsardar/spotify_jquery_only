$( document ).ready(function() {
  console.log( "authorize.js ready!" );
  console.log('version 7');
  let client_id = 'df6968c34f4b4494ac206c7628d2afc7';
  let redirect_uri = 'https%3A%2F%2Fmujibsardar.github.io%2Fspotify_jquery_only';
  const redirect = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}`;
  console.log(`redirect url: ${redirect}`);
  window.location.replace(redirect);
});
