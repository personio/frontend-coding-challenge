import * as React from "react";
import Filters from "./components/Filters";
import Table from "./components/Table";
import useApplications from "./useApplications";

const App: React.FunctionComponent = () => {
  const { data, isLoading } = useApplications();

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Filters />
      <Table data={data} />
    </div>
  );
};

export default App;
