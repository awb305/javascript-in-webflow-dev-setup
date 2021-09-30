//Example here ->  https://github.com/smartystreets/smartystreets-javascript-sdk/blob/master/examples/us_autocomplete_pro.js

const SmartyStreetsSDK = require('smartystreets-javascript-sdk');
const SmartyStreetsCore = SmartyStreetsSDK.core;
const Lookup = SmartyStreetsSDK.usAutocompletePro.Lookup;

export const runSmartyStreets = async (address: string) => {
  try {
    let key = '108823135805140061';
    const credentials = new SmartyStreetsCore.SharedCredentials(key);

    // The appropriate license values to be used for your subscriptions
    // can be found on the Subscription page of the account dashboard.
    // https://www.smartystreets.com/docs/cloud/licensing

    let clientBuilder = new SmartyStreetsCore.ClientBuilder(
      credentials
    ).withLicenses(['us-autocomplete-pro-cloud']);
    // .withBaseUrl("");
    let client = clientBuilder.buildUsAutocompleteProClient();

    // Documentation for input fields can be found at:
    // https://smartystreets.com/docs/cloud/us-autocomplete-api#pro-http-request-input-fields

    // *** Simple Lookup ***
    let lookup = new Lookup(address);

    const suggestionData = await client.send(lookup);

    console.log('suggestionData', suggestionData);

    // // *** Using Filter and Prefer ***
    // lookup = new Lookup(address);

    // lookup.maxResults = 10;
    // lookup.includeOnlyCities = ['Chicago,La Grange,IL', 'Blaine,WA'];
    // lookup.preferStates = ['IL'];
    // lookup.preferRatio = 33;
    // lookup.source = 'all';

    // client
    //   .send(lookup)
    //   .then(function (results) {
    //     logSuggestions(results, 'Using Filter and Prefer');
    //   })
    //   .catch(console.log);

    // // *** Using 'selected' to Expand Secondaries ***
    // lookup = new Lookup(address);

    // lookup.selected = address;

    // client
    //   .send(lookup)
    //   .then(function (results) {
    //     logSuggestions(results, "Using 'selected' to Expand Secondaries");
    //   })
    //   .catch(console.log);

    // // ************************************************

    return suggestionData.result;
  } catch (err) {
    throw err;
  }
};
