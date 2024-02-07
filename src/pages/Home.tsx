
import React, { useState } from "react";
import Search from "../components/Search";
import ContinentFilter from "../components/ContinentFilter";
import CurrencyFilter from "../components/CurrencyFilter";
import Countries from "../components/Countries";

const Home: React.FC = () => {
  const [countryFilter, setCountryFilter] = useState("");
  const [continentFilter, setContinentFilter] = useState("");
  const [currencyFilter, setCurrencyFilter] = useState("");

  const handleSearchChange = (value: string) => setCountryFilter(value);
  const handleContinentChange = (value: string) => setContinentFilter(value);
  const handleCurrencyChange = (value: string) => setCurrencyFilter(value);

  const removeContinentFilter = () => setContinentFilter("");
  const removeCurrencyFilter = () => setCurrencyFilter("");

  return (
    <div className="generalContainer container my-3 mx-9">
      <div className="componentsContainer d-flex flex-column g-5">
        <h1 className="text-center my-3">World Explorer</h1>
        <div className="d-flex flex-wrap justify-content-between">
          <Search
            onChange={(value) => handleSearchChange(value)}
            countryFilter={countryFilter}
          />
          <ContinentFilter
            onChange={handleContinentChange}
            onClick={removeContinentFilter}
          />
          <CurrencyFilter
            onChange={handleCurrencyChange}
            onClick={removeCurrencyFilter}
          />
        </div>
        <Countries
          countryFilter={countryFilter}
          continentFilter={continentFilter}
          currencyFilter={currencyFilter}
        />
      </div>
    </div>
  );
};

export default Home;
