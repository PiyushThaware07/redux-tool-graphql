import React from "react";
import { useFetchLaunchesQuery } from "./store/apiSlice";

const App: React.FC = () => {
  const { data, isLoading, isError, isSuccess } = useFetchLaunchesQuery();

  console.log(data);
  if (isLoading) return <h1>Loading</h1>
  if (isError) return <h1>Error</h1>
  if (isSuccess)
    return (
      <div className="">APP</div>
    )
}

export default App;









/*

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/store";
import { fetchCities, fetchCountries } from "./store/data.reducer";

const App = () => {
  const dispatch = useAppDispatch();
  const { countries, cities,loading, error } = useAppSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchCountries());
    dispatch(fetchCities());
  }, [dispatch])

  console.log(countries);
  console.log(cities);
  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>Error</h1>;
  return (
    <main>
      App
    </main>
  )
}
export default App;

*/