// CountryList.js
import React, { useState } from 'react';


const initialCountries = [
    { name: 'United States', flag: 'us' },
    { name: 'Canada', flag: 'ca' },
    { name: 'United Kingdom', flag: 'uk' },
    { name: 'Australia', flag: 'au' },
    { name: 'Germany', flag: 'de' },
    { name: 'France', flag: 'fr' },
    { name: 'Brazil', flag: 'br' },
    { name: 'Japan', flag: 'jp' },
    { name: 'South Africa', flag: 'za' },
    { name: 'Russia', flag: 'ru' }
  // Add more default countries here
];

const allCountries = [
  { name: 'Afghanistan', flag: 'af' },
  { name: 'Albania', flag: 'al' },
  { name: 'Algeria', flag: 'dz' },
  { name: 'Andorra', flag: 'ad' },
  { name: 'Angola', flag: 'ao' },
  { name: 'Antigua and Barbuda', flag: 'ag' },
  { name: 'Argentina', flag: 'ar' },
  { name: 'Armenia', flag: 'am' },
  { name: 'Australia', flag: 'au' },
  { name: 'Austria', flag: 'at' },
  { name: 'Azerbaijan', flag: 'az' },
  { name: 'Bahamas', flag: 'bs' },
  { name: 'Bahrain', flag: 'bh' },
  { name: 'Bangladesh', flag: 'bd' },
  { name: 'Barbados', flag: 'bb' },
  { name: 'Belarus', flag: 'by' },
  { name: 'Belgium', flag: 'be' },
  { name: 'Belize', flag: 'bz' },
  { name: 'Benin', flag: 'bj' },
  { name: 'Bhutan', flag: 'bt' },
  { name: 'Bolivia', flag: 'bo' },
  { name: 'Bosnia and Herzegovina', flag: 'ba' },
  { name: 'Botswana', flag: 'bw' },
  { name: 'Brazil', flag: 'br' },
  { name: 'Brunei', flag: 'bn' },
  { name: 'Bulgaria', flag: 'bg' },
  { name: 'Burkina Faso', flag: 'bf' },
  { name: 'Burundi', flag: 'bi' },
  { name: 'Cambodia', flag: 'kh' },
  { name: 'Cameroon', flag: 'cm' },
  { name: 'Canada', flag: 'ca' },
  { name: 'Cape Verde', flag: 'cv' },
  { name: 'Central African Republic', flag: 'cf' },
  { name: 'Chad', flag: 'td' },
  { name: 'Chile', flag: 'cl' },
  { name: 'China', flag: 'cn' },
  { name: 'Colombia', flag: 'co' },
  { name: 'Comoros', flag: 'km' },
  { name: 'Congo', flag: 'cg' },
  { name: 'Costa Rica', flag: 'cr' },
  { name: 'Croatia', flag: 'hr' },
  { name: 'Cuba', flag: 'cu' },
  { name: 'Cyprus', flag: 'cy' },
  { name: 'Czech Republic', flag: 'cz' },
  { name: 'Democratic Republic of the Congo', flag: 'cd' },
  { name: 'Denmark', flag: 'dk' },
  { name: 'Djibouti', flag: 'dj' },
  { name: 'Dominica', flag: 'dm' },
  { name: 'Dominican Republic', flag: 'do' },
  { name: 'East Timor', flag: 'tl' },
  { name: 'Ecuador', flag: 'ec' },
  { name: 'Egypt', flag: 'eg' },
  { name: 'El Salvador', flag: 'sv' },
  { name: 'Equatorial Guinea', flag: 'gq' },
  { name: 'Eritrea', flag: 'er' },
  { name: 'Estonia', flag: 'ee' },
  { name: 'Eswatini', flag: 'sz' },
  { name: 'Ethiopia', flag: 'et' },
  { name: 'Fiji', flag: 'fj' },
  { name: 'Finland', flag: 'fi' },
  { name: 'France', flag: 'fr' },
  { name: 'Gabon', flag: 'ga' },
  { name: 'Gambia', flag: 'gm' },
  { name: 'Georgia', flag: 'ge' },
  { name: 'Germany', flag: 'de' },
  { name: 'Ghana', flag: 'gh' },
  { name: 'Greece', flag: 'gr' },
  { name: 'Grenada', flag: 'gd' },
  { name: 'Guatemala', flag: 'gt' },
  { name: 'Guinea', flag: 'gn' },
  { name: 'Guinea-Bissau', flag: 'gw' },
  { name: 'Guyana', flag: 'gy' },
  { name: 'Haiti', flag: 'ht' },
  { name: 'Honduras', flag: 'hn' },
  { name: 'Hungary', flag: 'hu' },
  { name: 'Iceland', flag: 'is' },
  { name: 'India', flag: 'in' },
  { name: 'Indonesia', flag: 'id' },
  { name: 'Iran', flag: 'ir' },
  { name: 'Iraq', flag: 'iq' },
  { name: 'Ireland', flag: 'ie' },
  { name: 'Israel', flag: 'il' },
  { name: 'Italy', flag: 'it' },
  { name: 'Ivory Coast', flag: 'ci' },
  { name: 'Jamaica', flag: 'jm' },
  { name: 'Japan', flag: 'jp' },
  { name: 'Jordan', flag: 'jo' },
  { name: 'Kazakhstan', flag: 'kz' },
  { name: 'Kenya', flag: 'ke' },
  { name: 'Kiribati', flag: 'ki' },
  { name: 'Kosovo', flag: 'xk' },
  { name: 'Kuwait', flag: 'kw' },
  { name: 'Kyrgyzstan', flag: 'kg' },
  { name: 'Laos', flag: 'la' },
  { name: 'Latvia', flag: 'lv' },
  { name: 'Lebanon', flag: 'lb' },
  { name: 'Lesotho', flag: 'ls' },
  { name: 'Liberia', flag: 'lr' },
  { name: 'Libya', flag: 'ly' },
  { name: 'Liechtenstein', flag: 'li' },
  { name: 'Lithuania', flag: 'lt' },
  { name: 'Luxembourg', flag: 'lu' },
  { name: 'Madagascar', flag: 'mg' },
  { name: 'Malawi', flag: 'mw' },
  { name: 'Malaysia', flag: 'my' },
  { name: 'Maldives', flag: 'mv' },
  { name: 'Mali', flag: 'ml' },
  { name: 'Malta', flag: 'mt' },
  { name: 'Marshall Islands', flag: 'mh' },
  { name: 'Mauritania', flag: 'mr' },
  { name: 'Mauritius', flag: 'mu' },
  { name: 'Mexico', flag: 'mx' },
  { name: 'Micronesia', flag: 'fm' },
  { name: 'Moldova', flag: 'md' },
  { name: 'Monaco', flag: 'mc' },
  { name: 'Mongolia', flag: 'mn' },
  { name: 'Montenegro', flag: 'me' },
  { name: 'Morocco', flag: 'ma' },
  { name: 'Mozambique', flag: 'mz' },
  { name: 'Myanmar', flag: 'mm' },
  { name: 'Namibia', flag: 'na' },
  { name: 'Nauru', flag: 'nr' },
  { name: 'Nepal', flag: 'np' },
  { name: 'Netherlands', flag: 'nl' },
  { name: 'New Zealand', flag: 'nz' },
  { name: 'Nicaragua', flag: 'ni' },
  { name: 'Niger', flag: 'ne' },
  { name: 'Nigeria', flag: 'ng' },
  { name: 'North Macedonia', flag: 'mk' },
  { name: 'Norway', flag: 'no' },
  { name: 'Oman', flag: 'om' },
  { name: 'Pakistan', flag: 'pk' },
  { name: 'Palau', flag: 'pw' },
  { name: 'Panama', flag: 'pa' },
  { name: 'Papua New Guinea', flag: 'pg' },
  { name: 'Paraguay', flag: 'py' },
  { name: 'Peru', flag: 'pe' },
  { name: 'Philippines', flag: 'ph' },
  { name: 'Poland', flag: 'pl' },
  { name: 'Portugal', flag: 'pt' },
  { name: 'Qatar', flag: 'qa' },
  { name: 'Romania', flag: 'ro' },
  { name: 'Russia', flag: 'ru' },
  { name: 'Rwanda', flag: 'rw' },
  { name: 'Saint Kitts and Nevis', flag: 'kn' },
  { name: 'Saint Lucia', flag: 'lc' },
  { name: 'Saint Vincent and the Grenadines', flag: 'vc' },
  { name: 'Samoa', flag: 'ws' },
  { name: 'San Marino', flag: 'sm' },
  { name: 'Sao Tome and Principe', flag: 'st' },
  { name: 'Saudi Arabia', flag: 'sa' },
  { name: 'Senegal', flag: 'sn' },
  { name: 'Serbia', flag: 'rs' },
  { name: 'Seychelles', flag: 'sc' },
  { name: 'Sierra Leone', flag: 'sl' },
  { name: 'Singapore', flag: 'sg' },
  { name: 'Slovakia', flag: 'sk' },
  { name: 'Slovenia', flag: 'si' },
  { name: 'Solomon Islands', flag: 'sb' },
  { name: 'Somalia', flag: 'so' },
  { name: 'South Africa', flag: 'za' },
  { name: 'South Korea', flag: 'kr' },
  { name: 'South Sudan', flag: 'ss' },
  { name: 'Spain', flag: 'es' },
  { name: 'Sri Lanka', flag: 'lk' },
  { name: 'Sudan', flag: 'sd' },
  { name: 'Suriname', flag: 'sr' },
  { name: 'Sweden', flag: 'se' }
  // Add more countries for all three categories
];

const CountryList = () => {
  const [currentCountries, setCurrentCountries] = useState(initialCountries);

  const handleLinkClick = (category) => {
    let newCountries;

    if (category === 'local') {
      newCountries = allCountries.filter((country) => country.category === 'local');
    } else if (category === 'regional') {
      newCountries = allCountries.filter((country) => country.category === 'regional');
    } else if (category === 'global') {
      newCountries = allCountries.filter((country) => country.category === 'global');
    } else {
      newCountries = allCountries; // Show all countries if no category is selected
    }

    setCurrentCountries(newCountries);
  };

  return (
    <div className="country-list">
      <input type="text" placeholder="Search data packs for 200+ countries and regions" />

      <div className="links">
        <div className="link" onClick={() => handleLinkClick('local')}>Local eSims</div>
        <div className="link" onClick={() => handleLinkClick('regional')}>Regional eSims</div>
        <div className="link" onClick={() => handleLinkClick('global')}>Global eSims</div>
      </div>

      <div className="countries">
        {currentCountries.map((country, index) => (
          <div className="country" key={index}>
            <span className="flag">{country.flag}</span>
            <span className="name">{country.name}</span>
            <span className="arrow">▼</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryList;