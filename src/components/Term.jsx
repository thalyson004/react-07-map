import React from "react";

function createTerm(props) {
  return (
    <Term
      key={props.id}
      emoji={props.emoji}
      meaning={props.meaning}
      name={props.name}
    />
  );
}

function Term(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.meaning}</dd>
    </div>
  );
}

export default Term;
export { createTerm };
