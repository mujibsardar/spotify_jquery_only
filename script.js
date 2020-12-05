$( document ).ready(function() {
     // Helper Function to Extract Access Token for URL
    const getUrlParameter = (sParam) => {
      let sPageURL = window.location.search.substring(1),////substring will take everything after the https link and split the #/&
          sURLVariables = sPageURL != undefined && sPageURL.length > 0 ? sPageURL.split('#') : [],
          sParameterName,
          i;
      let split_str = window.location.href.length > 0 ? window.location.href.split('#') : [];
      sURLVariables = split_str != undefined && split_str.length > 1 && split_str[1].length > 0 ? split_str[1].split('&') : [];
      for (i = 0; i < sURLVariables.length; i++) {
          sParameterName = sURLVariables[i].split('=');
          if (sParameterName[0] === sParam) {
              return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
          }
      }
  };

    // Get Access Token
    const accessToken = getUrlParameter('access_token');

    // AUTHORIZE with Spotify (if needed)
    // *************** REPLACE THESE VALUES! *************************
    let client_id = 'df6968c34f4b4494ac206c7628d2afc7';
    // Use the following site to convert your regular url to the encoded version:
    // https://www.url-encode-decode.com/
    let redirect_uri = 'https%3A%2F%2Fmujibsardar.github.io%2Fspotify_jquery_only'; // GitHub Pages URL or whatever your public url to this app is
    // *************** END *************************
    const redirect = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}`;
    // Don't authorize if we have an access token already
    console.log("Access Token: " + accessToken);
    if(accessToken == null || accessToken == "" || accessToken == undefined){
      window.location.replace(redirect);
    }

    // Search button has been clicked
    $( "#search_button" ).click(function() {
      // Make Spotify API call
      $.ajax({
        url: 'https://api.spotify.com/v1/search?q=dance+off&type=track',
        type: 'GET',
        headers: {
            'Authorization' : 'Bearer ' + accessToken
        },
        success: function(data) {
          // Extract the id of the FIRST song from the data object
          let id = data.tracks.items[0].id;
          // Constructing two different iframes to embed the song
          let src_str = `https://open.spotify.com/embed/track/${id}`;
          // Option 2
          let iframe = `<iframe src=${src_str} frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
          let parent_div = $('#content');
          parent_div.append(iframe);
        }
      }); // End of Spotify ajax call
    }); // End of search button

  }); // End of document.ready
