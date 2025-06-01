import { IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../../State/Cart/Action";

const CartItem = ({ item }) => {
    const dispatch = useDispatch();
      if (!item || !item.product) return null;
  const { product, size, price, discountedPrice, discountPresent } = item;
const handleUpdateCartItem = (num) => {
  const updatedData = {
    cartItemId: item._id,
    quantity: item.quantity + num
  };
dispatch(updateCartItem( updatedData));
};

const handleRemoveCartItem = () => {
  dispatch(removeCartItem(item._id));
};

  return (
    <div className="p-4 shadow-lg border rounded-md mb-4">
      <div className="flex items-center">
        <div className="w-[7rem] h-[9rem] lg:w-[10rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top rounded-md"
            src={product?.imageUrl}
            alt={product?.title}
          />
        </div>

        <div className="ml-4 space-y-2 flex-1">
          <p className="font-semibold text-lg">{product?.title}</p>
          <p className="opacity-70 text-sm">Size: {size}, White</p>
          <p className="opacity-70 text-sm">{product?.brand}</p>

          <div className="flex space-x-3 items-center text-gray-900 pt-2">
            <p className="font-semibold text-xl">Rs {price}</p>
            <p className="opacity-70 line-through text-lg">Rs {discountedPrice}</p>
            <p className="text-green-600 font-semibold text-lg">{discountPresent}% off</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4">
        <div className="flex items-center space-x-2">
          <IconButton onClick={()=>handleUpdateCartItem(-1)}
          disabled={item.quantity<=1}>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-6 border rounded text-sm">{item.quantity}</span>
          <IconButton onClick={()=>handleUpdateCartItem(1)} sx={{ color: "rgb(145, 85, 253)" }}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <Button onClick={handleRemoveCartItem}  className="text-purple-600 hover:underline">Remove</Button>
      </div>
    </div>
  );
};

export default CartItem;
