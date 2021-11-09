import React from "react";

import "./CategoryFilter.css";

// import MultiRangeSlider from "multi-range-slider-react";

import MultiRangeSlider from "../MultiRangeSlider/MultiRangeSlider";

import CategoryMenu from "../CategoryMenu/CategoryMenu";
import CheckBox from "../CheckBox/CheckBox";

const CategoryFilter = ({
  minPrice,
  maxPrice,
  handleRangeInput,
  activeBrandsHandler,
  activeRatingsHandler,
}) => {
  return (
    <div className="category-filter">
      <CategoryMenu
        label="Best from Farmers"
        items={[
          "Bakery",
          "Fruits and Vegetables",
          "Meat and Fish",
          "Drinks",
          "Kitchen",
        ]}
        footerlabel="More products"
      />
      <div>
        <h4>Brands</h4>
        <CheckBox
          activeBrandsHandler={activeBrandsHandler}
          brandname="farmbest"
          label="farmbest"
        />
        <CheckBox
          activeBrandsHandler={activeBrandsHandler}
          brandname="terafarm"
          label="terafarm"
        />
        <CheckBox
          activeBrandsHandler={activeBrandsHandler}
          brandname="agro-allied"
          label="agro-allied"
        />
        <CheckBox
          activeBrandsHandler={activeBrandsHandler}
          brandname="e-grow"
          label="e-grow"
        />
        <CheckBox
          activeBrandsHandler={activeBrandsHandler}
          brandname="emperor farms"
          label="emperor farms"
        />
      </div>
      <div>
        <h4>Rating</h4>
        <CheckBox
          activeRatingsHandler={activeRatingsHandler}
          brandname="five star"
          label="five star"
          rating={5}
        />
        <CheckBox
          activeRatingsHandler={activeRatingsHandler}
          brandname="four star"
          label="four-star"
          rating={4}
        />
        <CheckBox
          activeRatingsHandler={activeRatingsHandler}
          brandname="three star"
          label="three star"
          rating={3}
        />
        <CheckBox
          activeRatingsHandler={activeRatingsHandler}
          brandname="two-star"
          label="two-star"
          rating={2}
        />
        <CheckBox
          activeRatingsHandler={activeRatingsHandler}
          brandname="one-star"
          label="one-star"
          rating={1}
        />
      </div>
      <div className="prices-filter">
        <h4>Pricing</h4>
        <MultiRangeSlider
          ruler={false}
          min={0}
          max={10000000}
          minValue={minPrice}
          maxValue={maxPrice}
          onInput={(e) => {
            handleRangeInput(e);
          }}
        />
        <div className="prices-filter_inputs">
          <div className="prices-filter_formgroup">
            <label className="prices-filter_formlabel" htmlFor="minprice">
              Min
            </label>
            <input
              className="prices-filter_forminput"
              type="number"
              name="minprice"
              placeholder="0"
              id="minprice"
            />
          </div>
          <div className="prices-filter_formgroup">
            <label className="prices-filter_formlabel" htmlFor="maxprice">
              Max
            </label>
            <input
              className="prices-filter_forminput"
              type="number"
              name="maxprice"
              placeholder="0000000"
              id="maxprice"
            />
          </div>
        </div>
      </div>
      <div className="apply-filters">
        {" "}
        <button className="btn btn-dark btn-small"> Apply</button>
        <button className="btn btn-grey btn-small"> Reset</button>
      </div>
    </div>
  );
};

export default CategoryFilter;
