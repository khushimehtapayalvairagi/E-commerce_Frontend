'use client'

import { useEffect, useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'
import Rating from '@mui/material/Rating'
import ProductReviewCard from './ProductReviewCard'
import { Box, LinearProgress, Grid, Button } from '@mui/material'
import HomeSectionCard from '../HomesectionCard/HomeSectionCard'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { findProducts, findProductsById } from '../../../State/Product/Action'
import { addItemTocart } from '../../../State/Cart/Action'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ratings = [
  { label: 'Excellent', value: 70 },
  { label: 'Good', value: 50 },
  { label: 'Average', value: 30 },
  { label: 'Poor', value: 10 },
]
const singleProduct = {
  images: [
    {
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  sizes: [
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
  ],
}

export default function ProductDetail() {
  const [selectedSize, setSelectedSize] = useState()
  const navigate = useNavigate()
  const { products, product, loading, error } = useSelector((store) => store.customerProduct || {})
  const params = useParams()
  const dispatch = useDispatch()


useEffect(() => {
  if (params.productId) {
    dispatch(findProductsById(params.productId));
   dispatch(findProducts({
  colors: [],
  sizes: [],
  minPrice: 0,
  maxPrice: 10000,
  minDiscount: 0,
  catogery: null,
  stock: true,
  sort: 'price_low',
  pageNumber: 1,
  pageSize: 10,
}));
 // or filtered by category
  }
}, [params.productId]);

const handleAddToCart = () => {
  console.log("Size before adding to cart:", selectedSize);
  if (!selectedSize) {
    alert("Please select a size.");
    return;
  }

  const data = {
    productId: params.productId,
    size: selectedSize,
  };

  dispatch(addItemTocart(data));
  navigate('/cart');
};


  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          {product?.breadcrumbs && (
            <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              {product.breadcrumbs.map((breadcrumb) => (
                <li key={breadcrumb.id}>
                  <div className="flex items-center">
                    <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                      {breadcrumb.name}
                    </a>
                    <svg
                      fill="currentColor"
                      width={16}
                      height={20}
                      viewBox="0 0 16 20"
                      aria-hidden="true"
                      className="h-5 w-4 text-gray-300"
                    >
                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg>
                  </div>
                </li>
              ))}
              <li className="text-sm">
                <a href={product.href} className="font-medium text-gray-500 hover:text-gray-600">
                  {product.name}
                </a>
              </li>
            </ol>
          )}
        </nav>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
            <img 
  alt={product?.title}
  src={product?.imageUrl}
  className="object-cover rounded-lg"
/>

            </div>
           
  <div className="p-4">
    {/* Images */}
    <div className="flex flex-wrap gap-4 mb-6">
      {singleProduct.images.map((img, index) => (
        <div key={index} className="w-20 h-20 rounded overflow-hidden">
          <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>

    {/* Sizes */}
    {/* <div className="flex gap-3">
      {singleProduct.sizes.map((size) => (
        <span
          key={size.name}
          className={`px-4 py-2 rounded-md text-sm font-medium border ${
            size.inStock ? 'border-gray-300 text-black' : 'border-red-300 text-gray-400 line-through'
          }`}
        >
          {size.name}
        </span>
      ))}
    </div> */}
  </div>


          </div>

          <div className="lg:col-span-1 max-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
            <h1 className="text-lg lg:text-xl font-semibold text-gray-900">{product?.brand}</h1>
            <h2 className="text-lg lg:text-xl opacity-60 pt-1 text-gray-900">{product?.title}</h2>

            <div className="mt-4">
              <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6">
                <p className="font-semibold">{product?.discountedPrice}</p>
                <p className="opacity-50 line-through">{product?.price}</p>
                <p className="text-green-600 font-semibold">{product?.discountPresent}%</p>
              </div>

              <div className="mt-6 flex items-center space-x-3">
                <Rating name="read-only" value={5.5} readOnly />
                <p className="opacity-50 text-sm">56540 Ratings</p>
                <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  3879 Reviews
                </p>
              </div>

              <form className="mt-10">
           <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  </div>

                  {singleProduct?.sizes?.length > 0 && (
                    <fieldset className="mt-4">
                   <RadioGroup
  value={selectedSize}
  onChange={setSelectedSize}
  className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
>
  {singleProduct.sizes.map((size) => (
    <Radio
      key={size.name}
      value={size.name}
      disabled={!size.inStock}
      className={classNames(
        size.inStock
          ? 'cursor-pointer bg-white text-gray-900 shadow-xs'
          : 'cursor-not-allowed bg-gray-50 text-gray-200',
        'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-hidden data-focus:ring-2 data-focus:ring-indigo-500 sm:flex-1 sm:py-6',
      )}
    >
      <span>{size.name}</span>
      <span
        aria-hidden="true"
        className={classNames(
          'pointer-events-none absolute -inset-px rounded-md border-2',
          size.inStock ? 'border-transparent group-data-checked:border-indigo-500' : 'border-gray-400',
        )}
      />
    </Radio>
  ))}
</RadioGroup>

                    </fieldset>
                  )}
                </div>

                <Button onClick={handleAddToCart} variant="contained" sx={{ px: '2rem', py: '1rem', bgcolor: '#9155fd' }}>
                  Add To Cart
                </Button>
              </form>
            </div>

            <div className="py-10">
              {product?.description && (
                <div>
                  <h3 className="sr-only">Description</h3>
                  <div className="space-y-6">
                    <p className="text-base text-gray-900">{product.description}</p>
                  </div>
                </div>
              )}

         <div className="mt-10">
  <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
  <ul className="mt-4 list-disc space-y-2 pl-4 text-sm">
    <li className="text-gray-600">Premium cotton fabric</li>
    <li className="text-gray-600">Slim fit tailored design</li>
    <li className="text-gray-600">Durable stitching and finish</li>
    <li className="text-gray-600">Machine washable</li>
    <li className="text-gray-600">Available in multiple colors</li>
  </ul>
</div>


              {product?.details && (
                <div className="mt-10">
                  <h2 className="text-sm font-medium text-gray-900">Details</h2>
                  <p className="mt-4 text-sm text-gray-600">{product.details}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h1 className="font-semibold text-lg pb-4">Recent Review & rating</h1>
          <div className="relative border p-5">
            <Grid container spacing={7}>
              <Grid item xs={12} lg={7}>
                <div className="space-y-5">
                  {[1, 2, 3].map((_, i) => (
                    <ProductReviewCard key={i} />
                  ))}
                </div>
              </Grid>
            </Grid>

            <div className="absolute top-5 right-5 w-full max-w-sm bg-white shadow p-4 rounded-lg">
              <h1 className="text-xl font-semibold pb-2 text-right">Product rating</h1>
              <div className="flex items-center space-x-3 justify-end">
                <Rating name="read-only" value={0.6} precision={0.5} readOnly />
                <p className="opacity-60">594034 ratings</p>
              </div>
              <div className="mt-5 space-y-4">
                {ratings.map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm text-gray-700">
                      <span>{item.label}</span>
                      <span>{item.value}%</span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500 rounded-full"
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pt-10">
          <h1 className="py-5 text-xl font-bold text-left">Similar Products</h1>
          <div className="flex flex-wrap space-y-5">
   {products?.map((item, index) => (
  <HomeSectionCard key={index} product={item} />
))}


          </div>
        </section>
      </div>
    </div>
  )
}
