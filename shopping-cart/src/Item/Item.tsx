import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import React from "react";

import { CartItemType } from "../App";
import { Wrapper } from "./Item.styles";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <div className="description">
        <div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
        <h1>${item.price}</h1>
      </div>
      <Button
        className="button-add"
        onClick={() => handleAddToCart(item)}
        startIcon={<AddIcon />}
      >
        Add to cart
      </Button>
    </Wrapper>
  );
};

export default Item;
