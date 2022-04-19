import React, { useState } from "react";
import DisplayEntries from "./Components/DisplayEntries/DisplayEntries";
import AddEntryForm from "./Components/AddEntry/AddEntryForm";
import EntriesChartTracker from "./Components/EntriesChartTracker/EntriesChartTracker";
import "./App.css";

function App() {
  const [entries, setEntries] = useState([{ weight: 175, date: "11-23-2021" }, { weight: 120, date: "01/23/2022" }]);

  function addNewEntry(entry) {
    let tempEntries = [...entries, entry];
    setEntries(tempEntries);
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <h3 style={{margin: '1em'}}>Weight
        <small className='text-muted'>Tracket</small></h3>
        <div className="col-md-6">
          <div className="border-box">
            {/* {passing down the information to the child component} */}
            <DisplayEntries parentEntries={entries} />
          </div>
          <div className="border-box">
            {/* {//passing up the information to the child component & referencing the function} */}
            <AddEntryForm addNewEntryProperty={addNewEntry} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="border-box">
            <EntriesChartTracker parentEntries={entries} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
