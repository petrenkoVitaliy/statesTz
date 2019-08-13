const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District Of Columbia',
  'Federated States Of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Islands',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming'
].map(item => item.split(' ').join('_'));

var moment = require('moment-timezone');

var timeZones = moment.tz.names();
var offsetTmz = [];

for (var i in timeZones) {
  offsetTmz.push(`(GMT${moment.tz(timeZones[i]).format('Z')}) ${timeZones[i]}`);
}
timeZoneNames = offsetTmz.sort();

const filteredTzNames = timeZoneNames.filter(item => {
  for (const state of states) {
    const parts = state.split(' ');
    for (const statePart of parts) {
      if (item.includes(statePart)) {
        return true;
      }
    }
  }
  return false;
});

console.log(filteredTzNames);

/*
 '(GMT+09:00) Pacific/Palau',
  '(GMT+10:00) Pacific/Guam',
  '(GMT-02:00) Atlantic/South_Georgia',
  '(GMT-04:00) America/Indiana/Indianapolis',
  '(GMT-04:00) America/Indiana/Marengo',
  '(GMT-04:00) America/Indiana/Petersburg',
  '(GMT-04:00) America/Indiana/Vevay',
  '(GMT-04:00) America/Indiana/Vincennes',
  '(GMT-04:00) America/Indiana/Winamac',
  '(GMT-04:00) America/Indianapolis',
  '(GMT-04:00) America/Kentucky/Louisville',
  '(GMT-04:00) America/Kentucky/Monticello',
  '(GMT-04:00) America/New_York',
  '(GMT-04:00) America/Puerto_Rico',
  '(GMT-04:00) US/East-Indiana',
  '(GMT-04:00) US/Michigan',
  '(GMT-05:00) America/Indiana/Knox',
  '(GMT-05:00) America/Indiana/Tell_City',
  '(GMT-05:00) America/North_Dakota/Beulah',
  '(GMT-05:00) America/North_Dakota/Center',
  '(GMT-05:00) America/North_Dakota/New_Salem',
  '(GMT-05:00) US/Indiana-Starke',
  '(GMT-07:00) US/Arizona',
  '(GMT-08:00) US/Alaska',
  '(GMT-10:00) US/Hawaii'
  */
