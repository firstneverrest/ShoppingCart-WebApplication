/* 
React.FC defines that this component is a functional component
(FC) or React component. That means we can use props.children
because TypeScript knows that this is React component.
*/

import React from "react";
import Input from "./Input";

interface Person {
    firstName: string;
    lastName: string; 
}

// interface Props {
//   text?: string;
//   verified?: boolean;
//   amount?: number;
//   addItem?: (item: string) => string; // or void
//   Item?: {
//     name: string;
//     price: number;
//   };
//   person: Person;
// }

interface Props {
    name: string;
    item: string[];
    price: number;
    description?: string;
    person: Person;
}

const ShoppingCart: React.FC<Props> = ({person, description}) => {
  return (
    <div>
      <h2>Welcome {person.firstName} {person.lastName}</h2>
      <p>{description}</p>
      {/* <Input /> */}
    </div>
  );
};

export default ShoppingCart;
