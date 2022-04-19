import React, { useState } from "react";
import DisplayEntries from "./Components/DisplayEntries/DisplayEntries";
import AddEntryForm from "./Components/AddEntry/AddEntryForm";
import EntriesChartTracker from "./Components/EntriesChartTracker/EntriesChartTracker";

function App() {
  const [entries, setEntries] = useState([{ weight: 175, date: "11-23-2021" }]);

  function addNewEntry(entry){
    let tempEntries = [...entries, entry];
    setEntries(tempEntries);
  }
  return (
    <div>
      {/* {passing down the information to the child component} */}
      <DisplayEntries parentEntries={entries} /> 
      {/* {//passing up the information to the child component} */}
      <AddEntryForm addNewEntryProperty={addNewEntry}/>
      <EntriesChartTracker parentEntries={entries}  />
    </div>
  );
}

export default App;
