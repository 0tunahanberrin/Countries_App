import { useQuery } from "@apollo/client";
import { GET_COUNTRIES_WITH_CURRENCY } from "../queries/countriesQueries";
import { Country, CurrencyInterface } from "../interface/interface";
import { useState } from "react";

export default function CurrencyFilter({
  onChange,
  onClick,
}: CurrencyInterface) {
  let listOfCurrencies: string[] = [];
  const [defaultOption, setDefaultOption] = useState("DEFAULT");

  const { loading, error, data } = useQuery(GET_COUNTRIES_WITH_CURRENCY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  data.countries.forEach((country: Country) => {
    let stringSplitted: string[] = country.currency
      ? country.currency.split(",")
      : [];

    stringSplitted.forEach((currency: string) => {
      if (listOfCurrencies.indexOf(currency) === -1 && currency) {
        listOfCurrencies.push(currency);
      }
    });
  });
  listOfCurrencies.sort();

  return (
    <>
      <div className="d-flex flex-column flex-sm-row">
        <select
          title="Currency Names"
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            onChange(event.target.value);
            setDefaultOption(event.target.value);
          }}
          value={defaultOption}
          name="currency-names"
          id="currency-names"
        >
          <option disabled value="DEFAULT">
            Choose one currency
          </option>
          {listOfCurrencies.map((currency: string, idx: number) => (
            <option key={idx}>{currency}</option>
          ))}
        </select>
        <button
          className="btn btn-primary mx-sm-2 world-tone-button"
          onClick={() => {
            onClick();
            setDefaultOption("DEFAULT");
          }}
        >
          <span className="material-icons"></span> Clear Filter
        </button>
      </div>
    </>
  );
}
