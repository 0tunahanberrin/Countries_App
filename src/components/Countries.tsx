import { useQuery } from '@apollo/client';
import { GET_COUNTRIES } from '../queries/countriesQueries';
import { Country, CountriesInterface } from '../interface/interface';
import { Link } from 'react-router-dom';

export default function Countries({
  countryFilter,
  continentFilter,
  currencyFilter,
}: CountriesInterface) {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  let countriesDatabase: Country[] = data.countries;

  if (continentFilter) {
    countriesDatabase = data.countries.filter(
      (country: Country) => country.continent!.name === continentFilter
    );
  }

  if (currencyFilter) {
    countriesDatabase = data.countries.filter((country: Country) => {
      if (country.currency) {
        return country.currency
          .toLowerCase()
          .trim()
          .includes(currencyFilter.toLowerCase().trim());
      }
      return false;
    });
  }

  if (currencyFilter && continentFilter) {
    countriesDatabase = data.countries.filter((country: Country) => {
      if (country.currency) {
        return (
          country.currency
            .toLowerCase()
            .trim()
            .includes(currencyFilter.toLowerCase().trim()) &&
          country.continent!.name === continentFilter
        );
      }
      return false;
    });
  }

  if (countryFilter) {
    countriesDatabase = data.countries.filter((country: Country) => {
      return country.name
        .toLowerCase()
        .trim()
        .includes(countryFilter.toLowerCase().trim());
    });
  }

  return (
    <section className='d-flex flex-column mt-2'>
      <h2 className='pt-4 text-light text-center'>List of Countries</h2>
      <div className='countriesList d-flex flex-wrap justify-content-center mt-2'>
        {countriesDatabase.length > 0 ? (
          countriesDatabase.map((country: Country) => (
            <div key={country.code} className='countryCard'>
              <Link
                to={`/details/${country.name}`}
                className='countryName text-center'
              >
                <strong>
                  <em>{country.name}</em>
                </strong>{' '}
                {country.emoji}
              </Link>
              <div className='countryInfo'>
                <p>
                  <span>Alpha2Code:</span> {country.code}
                </p>
                <p>
                  <span>Languages:</span>{' '}
                  {country.languages!.map((language: any) => (
                    <span key={language.name}>{language.name} </span>
                  ))}
                </p>
                <p>
                  <span>Currency:</span> {country.currency}
                </p>
                <p>
                  <span>Continent:</span> {country.continent!.name}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className='text-light'>No country found!</p>
        )}
      </div>
    </section>
  );
}
