import React, { useEffect, useState } from 'react';
import Card from '../Card/Card.jsx';
import './FeaturedProducts.scss';
import useFetch from '../../hooks/useFetch.js';

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filter][type][$eq]=${type}`
  );

  console.log(data);
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type}Products</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
      <div className="bottom">
        {error
          ? 'Some thing went wrong!'
          : loading
          ? 'loading'
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
