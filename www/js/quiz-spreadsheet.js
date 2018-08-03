// Client ID and API key from the Developer Console
      var CLIENT_ID = '607367220939-dp0u7mbuba521bth20am5moqenrd7k3n.apps.googleusercontent.com';
      var API_KEY = 'AIzaSyBx2kIQQJOGj9LxZeuN04nQLTL9grrAaHg ';

      // Array of API discovery doc URLs for APIs used by the quickstart
      var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

      // Authorization scopes required by the API; multiple scopes can be
      // included, separated by spaces.
      var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

      /**
       *  On load, called to load the auth2 library and API client library.
       */
      function handleClientLoad() {
        gapi.load(initClient);
      }

      /**
       *  Initializes the API client library and sets up sign-in state
       *  listeners.
       */
      function initClient() {
        gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES
        }).then(function () {
              //See if calling API directly will work. Google documentation seems to always suggest using sign in
              listMajors();
        });
      }

      /**
       * APPENDPRE IS A FUNCTION USED TO PRINT TO DOCUMENT
       *
       * @param {string} message Text to be placed in pre element.
       */
      function appendPre(message) {
        var pre = document.getElementById('content');
        var textContent = document.createTextNode(message + '\n');
        pre.appendChild(textContent);
      }

      /**
       * Print the names and majors of students in a sample spreadsheet:
       * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
       */
      function listMajors() {
        gapi.client.sheets.spreadsheets.values.get({
          spreadsheetId: '1bJvqu2n2Tfsf91vRqMsrwYdyh31wBCyJ9qU-usbWeOk',
          range: 'A1:M30',
        }).then(function(response) {
          var range = response.result;
          if (range.values.length > 0) {
            appendPre('Name, Major:');
            for (i = 0; i < range.values.length; i++) {
              var row = range.values[i];
              for (i = 0; i < row.length; i++){
                    
              }
              // Print columns A and E, which correspond to indices 0 and 4.
              appendPre(row[0] + ', ' + row[4]);
            }
          } else {
            appendPre('No data found.');
          }
        }, function(response) {
          appendPre('Error: ' + response.result.error.message);
        });
      }

      function htmlToElements(html) {
            var template = document.createElement('template');
            template.innerHTML = html;
            return template.content.childNodes;
      }

      var rows = htmlToElements('<button class="adminbtn" onclick="window.location.href= 'quizadmin.html'">Admins</button>.');

      function printquizlabel(){
            
      }
      
      

