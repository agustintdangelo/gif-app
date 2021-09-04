import React, { useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

export const AddCategory = ({
  setCategories,
  setLimit,
}) => {

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    setCategories(data.category);
    // setCategories((categories) => [data.category, ...categories]);
    setLimit( data.limit);
  };

  return (
    <form
      className="w-full md:w-80 flex justify-self-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        {...register("category")}
        className="font-mono dark:text-white dark:bg-gray-900 transition duration-500 bg-opacity-40 border-2 border-gray-600 p-2 rounded-lg  w-full "
        type="text"
      />
      <select type="number" {...register("limit")}>
        <option type="number" value={10}>
          10
        </option>
        <option type="number" value={20}>
          20
        </option>
        <option type="number" value={50}>
          50
        </option>
      </select>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
