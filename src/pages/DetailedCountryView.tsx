import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES_WITH_DETAILS } from "../queries/countriesQueries";
import { IDetailedCountryView, Details, ContinentInDetails } from "../interface/interface";
import "../styles/Details.css";

export default function DetailedCountryView({ selectedCountry }: IDetailedCountryView) {
  const { code: countryCode } = useParams();
  const { loading, error, data } = useQuery(GET_COUNTRIES_WITH_DETAILS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const [dataFiltered] = data.countries.filter((country: Details) => country.name === countryCode);

  if (!dataFiltered) return <p>Country not found</p>;

  const { name, code, currency, continent, languages, capital } = dataFiltered;

  return (
    <section className="detailsContainer p-5">
      <div className="detailsContainer container h3 text-light d-flex flex-column align-items-center">
        <div className="row g-4">
          <h1 className="text-center mb-4">{name} Country Details</h1>

          <ul className="list-group-flush lead">
            <li className="list-group-item">
              <span className="fw-bold">Official name:</span> {name}

            </li>        
            <li className="list-group-item">
              <span className="fw-bold">International code:</span> {code}
            </li>
            <li className="list-group-item">
              <span className="fw-bold">Currency(ies) symbol:</span>{currency}
            </li>
            <li className="list-group-item">
              <span className="fw-bold">Continent:</span> {continent.name}
            </li>
            <li className="list-group-item">
              <span className="fw-bold">Official language(s):</span>{" "}
              {languages.map((language: ContinentInDetails) => language.name).join(" ")}
            </li>
            <li className="list-group-item">
              <span className="fw-bold">Capital city:</span> {capital}
            </li>
          </ul>
        </div>
        <footer className="container d-flex justify-content-center mt-4">
          <Link to="/" className="text-warning">
            Go Back
          </Link>
        </footer>
      </div>
    </section>
  );
}
/*import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES_WITH_DETAILS } from "../queries/countriesQueries";
import { IDetailedCountryView, Details, ContinentInDetails } from "../interface/interface";
import "../styles/Details.css";

export default function DetailedCountryView({ selectedCountry }: IDetailedCountryView) {
  const { code: countryCode } = useParams();
  const { loading, error, data } = useQuery(GET_COUNTRIES_WITH_DETAILS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const [dataFiltered] = data.countries.filter((country: Details) => country.name === countryCode);

  if (!dataFiltered) return <p>Country not found</p>;

  const { name, flag, code, currency, continent, languages, capital } = dataFiltered;

  return (
    <section className="detailsContainer p-5">
      <div className="detailsContainer container h3 text-light d-flex flex-column align-items-center">
        <div className="row g-4">
          <h1 className="text-center mb-4">{name} Country Details</h1>
          <article className="w-1/2 flex-shrink-0">
            <img src={flag} alt={name} />
          </article>
          <ul className="list-group-flush lead">
            <li className="list-group-item">
              <span className="fw-bold">Official name:</span> {name}
            </li>   
            <li><br></br></li>     
            <li className="list-group-item">
              <span className="fw-bold">International code:</span> {code}
            </li>
            <li><br></br></li>     

            <li className="list-group-item">
              <span className="fw-bold">Currency(ies) symbol:</span>{currency}
            </li>
            <li><br></br></li>     

            <li className="list-group-item">
              <span className="fw-bold">Continent:</span> {continent.name}
            </li>
            <li><br></br></li>     

            <li className="list-group-item">
              <span className="fw-bold">Official language(s):</span>{" "}
              {languages.map((language: ContinentInDetails) => language.name).join(" ")}
            </li>
            <li><br></br></li>     

            <li className="list-group-item">
              <span className="fw-bold">Capital city:</span> {capital}
            </li>
            <li><br></br></li>     

          </ul>
        </div>
        <footer className="container d-flex justify-content-center mt-4">
          <Link to="/" className="text-warning">
            Go Back
          </Link>
        </footer>
      </div>
    </section>
  );
}
*/
/*
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES_WITH_DETAILS } from "../queries/countriesQueries";
import { IDetailedCountryView, Details, ContinentInDetails } from "../interface/interface";
import "../styles/Details.css";

export default function DetailedCountryView({ selectedCountry }: IDetailedCountryView) {
  const { code: countryCode } = useParams();
  const { loading, error, data } = useQuery(GET_COUNTRIES_WITH_DETAILS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const [dataFiltered] = data.countries.filter((country: Details) => country.name === countryCode);

  if (!dataFiltered) return <p>Country not found</p>;

  const { name, flag, code, currency, continent, languages, capital } = dataFiltered;

  return (
    <section className="detailsContainer p-5">
      <div className="detailsContainer container h3 text-light d-flex flex-column align-items-center">
        <div className="row g-4">
          <h1 className="text-center mb-4">{name} Country Details</h1>
          <article className="w-1/2 flex-shrink-0">
            <img src={flag} alt={name} />
          </article>
          <ul className="list-group-flush lead">
            <li className="list-group-item">
              <span className="fw-bold">Official name:</span> {name}
            </li>
            <li className="list-group-item">&nbsp;</li>
            <li className="list-group-item">
              <span className="fw-bold">International code:</span> {code}
            </li>
            <li className="list-group-item">&nbsp;</li>
            <li className="list-group-item">
              <span className="fw-bold">Currency(ies) symbol:</span> {currency}
            </li>
            <li className="list-group-item">&nbsp;</li>
            <li className="list-group-item">
              <span className="fw-bold">Continent:</span> {continent.name}
            </li>
            <li className="list-group-item">&nbsp;</li>
            <li className="list-group-item">
              <span className="fw-bold">Official language(s):</span>{" "}
              {languages.map((language: ContinentInDetails) => language.name).join(" ")}
            </li>
            <li className="list-group-item">&nbsp;</li>
            <li className="list-group-item">
              <span className="fw-bold">Capital city:</span> {capital}
            </li>
          </ul>
        </div>
        <footer className="container d-flex justify-content-center mt-4">
          <Link to="/" className="text-warning">
            Go Back
          </Link>
        </footer>
      </div>
    </section>
  );
}
*/