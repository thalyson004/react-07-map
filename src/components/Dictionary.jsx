import React from "react";
import Term, { createTerm } from "./Term";
import emojipedia from "../emojipedia";

function Dictionary() {
  return <dl className="dictionary">{emojipedia.map(createTerm)}</dl>;
}

export default Dictionary;
