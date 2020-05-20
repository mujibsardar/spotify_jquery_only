$( document ).ready(function() {
    console.log( "script.js ready!" );

    /////https://stackoverflow.com/questions/2988050/html5-audio-player-jquery-toggle-click-play-pause
    const getUrlParameter = (sParam) => {
      let sPageURL = window.location.search.substring(1),////substring will take everything after the https link and split the #/&
          sURLVariables = sPageURL.split('#'),
          sParameterName,
          i;
      let split_str = window.location.href.split('#');
      sURLVariables = split_str[1].split('&');
      for (i = 0; i < sURLVariables.length; i++) {
          sParameterName = sURLVariables[i].split('=');
          if (sParameterName[0] === sParam) {
              return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
          }
      }
  };

  const accessToken = getUrlParameter('access_token');
  console.log(`accessToken ${accessToken}`);

  $.ajax ({
      url: 'https://api.spotify.com/v1/search?q=kevin&type=track',
      type: 'GET',
      headers: {
          'Authorization' : 'Bearer ' + accessToken
      },
      success: function(data) {
        console.log(' ');
        console.log(' ');
        console.log('Success');
        // Let's console what gets returned for our search
        console.log(JSON.stringify(data));
        // Example: Extract the id of the song from the data object
        let id = data.tracks.items[0].id;
        console.log(' ');
        console.log(`id ${id}`); ////id 1TEL6MlSSVLSdhOSddidlJ
      }
  });

});
