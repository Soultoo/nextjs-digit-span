import React, { useState } from "react";

const initialState = {
  testStoreVar: "OOOKK",
  inputtedNumber: 0,
  inputNumberString: "",
  generatedString: "00000000",
  stringLength: 8,
  currentView: "preTestSettingsView",
  currentTestStage: "seeing",
  pointsSum: 0,
  firstOrSecond: 1,
  clearedLocalTrials: 0,
  nextSpanClicked: false,
  pos1Sum0: 0,
  pos2Sum0: 0,
  pos3Sum0: 0,
  pos4Sum0: 0,
  pos5Sum0: 0,
  pos6Sum0: 0,
  pos7Sum0: 0,
  pos8Sum0: 0,

  pos1Sum1: 0,
  pos2Sum1: 0,
  pos3Sum1: 0,
  pos4Sum1: 0,
  pos5Sum1: 0,
  pos6Sum1: 0,
  pos7Sum1: 0,
  pos8Sum1: 0,

  pos1Sum2: 0,
  pos2Sum2: 0,
  pos3Sum2: 0,
  pos4Sum2: 0,
  pos5Sum2: 0,
  pos6Sum2: 0,
  pos7Sum2: 0,
  pos8Sum2: 0,

  pos1Sum3: 0,
  pos2Sum3: 0,
  pos3Sum3: 0,
  pos4Sum3: 0,
  pos5Sum3: 0,
  pos6Sum3: 0,
  pos7Sum3: 0,
  pos8Sum3: 0,

  pos1Sum4: 0,
  pos2Sum4: 0,
  pos3Sum4: 0,
  pos4Sum4: 0,
  pos5Sum4: 0,
  pos6Sum4: 0,
  pos7Sum4: 0,
  pos8Sum4: 0,

  oldCountingMode: false,
  oldStringRegenMode: false,
  trialNumber: 1,
  settingNumber: 0,
  testString01: "54721836",
  testString02: "49312658",
  testString03: "14632857",
  testString11: "79615823",
  testString12: "94125387",
  testString13: "56438219",
  testString14: "62159837",
  testString15: "97263854",
  testString16: "43968172",
  testString17: "24367195",
  testString18: "89374526",
  testString21: "25347618",
  testString22: "69712435",
  testString23: "32684197",
  testString24: "67254138",
  testString25: "86457193",
  testString26: "94231675",
  testString27: "39584176",
  testString28: "49856172",
  testString31: "36951482",
  testString32: "83179546",
  testString33: "56928341",
  testString34: "23916875",
  testString35: "39587146",
  testString36: "79358216",
  testString37: "63245187",
  testString38: "46395871",
  testString41: "79856213",
  testString42: "96348512",
  testString43: "27694538",
  testString44: "13654972",
  testString45: "71635248",
  testString46: "25487931",
  testString47: "63275481",
  testString48: "46397285",

  testingOrder: "1234",
  testingOrderIndex: 0,
};

export const Context = React.createContext();

const Store = ({ children }) => {
  const [state, setState] = useState(initialState);
  //const kakakaka = 2;
  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
};

export default Store;
