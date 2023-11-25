import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import React, { useContext, useMemo, useState } from "react";
import ImportantDates from "./Tab/ImportantDates";
import { userDetailsContext } from "./Home/DataShare";

import ConferenceCommittee from "./Tab/ConferenceCommittee";
import CallForPaper from "./Tab/CallForPaper";

function App() {
  const [shareData, setshareData] = useState(null);
  const valuProvider = useMemo(
    () => ({ shareData, setshareData }),
    [shareData, setshareData]
  );
  return (
    <BrowserRouter>
      <userDetailsContext.Provider value={valuProvider}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/ImpDate" element={<ImportantDates />} />
          <Route path="/ConCommit" element={<ConferenceCommittee />} />
          <Route path="/CallPaper" element={<CallForPaper />} />
        </Routes>
      </userDetailsContext.Provider>
    </BrowserRouter>
  );
}

export default App;
