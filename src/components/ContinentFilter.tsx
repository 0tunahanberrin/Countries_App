import { useQuery } from "@apollo/client";
import { GET_COUNTRIES_BY_CONTINENT } from "../queries/countriesQueries";
import { Continent, ContinentInterface } from "../interface/interface";
import { useState } from "react";

export default function ContinentFilter({
  onChange,
  onClick,
}: ContinentInterface) {
  const { loading, error, data } = useQuery(GET_COUNTRIES_BY_CONTINENT);

  const [defaultOption, setDefaultOption] = useState("DEFAULT");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <>
      <div className="d-flex flex-column flex-sm-row">
        <select
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            onChange(event.target.value);
            setDefaultOption(event.target.value);
          }}
          name="continentFilter"
          id="continent-names"
          value={defaultOption}
          title="Choose a continent to filter"
        >
          <option value={"DEFAULT"} disabled>
            Choose one continent
          </option>
          {data.continents.map((continent: Continent, idx: number) => (
            <option key={idx} value={continent.name}>
              {continent.name}
            </option>
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
