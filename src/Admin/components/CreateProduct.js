import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from "@mui/material";
import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../../State/Product/Action";
import { findProducts } from "../../State/Product/Action";
const initialSizes = [
  { name: "S", quantity: 0 },
  { name: "M", quantity: 0 },
  { name: "L", quantity: 0 }
];

const CreateProduct = () => {
  const [productData, setProductData] = useState({
    imageUrl: "",
    brand: "",
    title: "",
    color: "",
    discountedPresent: "",
    price: "",
    discountedPrice: "",
    size: initialSizes,
    quantity: "",
    topLevelCatogery: "",
    secondLevelCatogery: "",
    thirdLevelCatogery: "",
    description: ""
  });

  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSizeChange = (e, index) => {
    let { name, value } = e.target;
    if (name === "size_quantity") name = "quantity";
    const sizes = [...productData.size];
    sizes[index][name] = value;
    setProductData((prevState) => ({
      ...prevState,
      size: sizes
    }));
  };



const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(createProduct(productData)).then(() => {
    // refetch products
    dispatch(findProducts({
      catogery: null,
      colors: [],
      sizes: [],
      minPrice: null,
      maxPrice: null,
      minDiscount: 0,
      sort: "price_low",
      pageNumber: 1,
      pageSize: 10,
      stock: "",
    }));
  });
};


  return (
    <Fragment className="createProductContainer p-10">
      <Typography variant="h3" sx={{ textAlign: "center", py: 3 }}>
        Add New Product
      </Typography>

      <form onSubmit={handleSubmit} className="createProductContainer min-h-screen">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Image URL"
              name="imageUrl"
              value={productData.imageUrl}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Brand"
              name="brand"
              value={productData.brand}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={productData.title}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Color"
              name="color"
              value={productData.color}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Quantity"
              name="quantity"
              value={productData.quantity}
              onChange={handleChange}
              type="number"
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Price"
              name="price"
              value={productData.price}
              onChange={handleChange}
              type="number"
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discounted Price"
              name="discountedPrice"
              value={productData.discountedPrice}
              onChange={handleChange}
              type="number"
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discount %"
              name="discountedPresent"
              value={productData.discountedPresent}
              onChange={handleChange}
              type="number"
            />
          </Grid>

       <Grid item xs={12} sm={4}>
  <FormControl fullWidth sx={{ height: 70 }}>
    <InputLabel sx={{ fontSize: "1rem" }}>Top Level Category</InputLabel>
    <Select
      name="topLevelCatogery"
      value={productData.topLevelCatogery}
      onChange={handleChange}
      label="Top Level Category"
      sx={{ height: 56, fontSize: "1rem" }}
    >
      <MenuItem value="men">Men</MenuItem>
      <MenuItem value="women">Women</MenuItem>
      <MenuItem value="kids">Kids</MenuItem>
    </Select>
  </FormControl>
</Grid>

<Grid item xs={12} sm={4}>
  <FormControl fullWidth sx={{ height: 70 }}>
    <InputLabel sx={{ fontSize: "1rem" }}>Second Level Category</InputLabel>
    <Select
      name="secondLevelCatogery"
      value={productData.secondLevelCatogery}
      onChange={handleChange}
      label="Second Level Category"
      sx={{ height: 56, fontSize: "1rem" }}
    >
      <MenuItem value="clothing">Clothing</MenuItem>
      <MenuItem value="accessories">Accessories</MenuItem>
      <MenuItem value="brand">Brand</MenuItem>
    </Select>
  </FormControl>
</Grid>

<Grid item xs={12} sm={4}>
  <FormControl fullWidth sx={{ height: 70 }}>
    <InputLabel sx={{ fontSize: "1rem" }}>Third Level Category</InputLabel>
    <Select
      name="thirdLevelCatogery"
      value={productData.thirdLevelCatogery}
      onChange={handleChange}
      label="Third Level Category"
      sx={{ height: 56, fontSize: "1rem" }}
    >
      <MenuItem value="menskurta">MensKurta</MenuItem>
      <MenuItem value="womens_dress">Dresses</MenuItem>
      <MenuItem value="t_shirts">T-shirts</MenuItem>
      <MenuItem value="saree">Saree</MenuItem>
      <MenuItem value="lehnga_choli">Lehanga Choli</MenuItem>
    </Select>
  </FormControl>
</Grid>


          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={3}
              label="Description"
              name="description"
              value={productData.description}
              onChange={handleChange}
            />
          </Grid>

          {/* Sizes */}
          {productData.size.map((size, index) => (
            <Grid container item spacing={2} key={index}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Size Name"
                  name="name"
                  value={size.name}
                  onChange={(e) => handleSizeChange(e, index)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Quantity"
                  name="size_quantity"
                  type="number"
                  value={size.quantity}
                  onChange={(e) => handleSizeChange(e, index)}
                  fullWidth
                />
              </Grid>
            </Grid>
          ))}

          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={{ p: 2, mt: 2 }}
              fullWidth
              size="large"
              type="submit"
            >
              Add New Product
            </Button>
          </Grid>
        </Grid>
      </form>
    </Fragment>
  );
};

export default CreateProduct;
