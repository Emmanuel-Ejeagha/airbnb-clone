"use client";

import Image from "next/image";
import Modal from "./Modal";
import Categories from "../addproperty/Categories";
import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";
import CustomButton from "../forms/CustomButton";
import { useState } from "react";

const AddPropertyModal = () => {
  //
  //States
  const [currentStep, setCurrentStep] = useState(1);
  const [dataCategory, setDataCategory] = useState("");
  //
  //
  const addPropertyModal = useAddPropertyModal();
  //
  // Set datas
  const setCategory = (category: string) => {
    setDataCategory(category);
  };
  //
  //
  //

  const content = (
    <>
      {currentStep == 1 ? (
        <>
          <h2 className="mb-6 text-2xl">Choose category</h2>
          <Categories
            dataCategory={dataCategory}
            setCategory={(category) => setCategory(category)}
          />
          <CustomButton label="Next" onClick={() => setCurrentStep(2)} />
        </>
      ) : (
        <p>step 2</p>
      )}
    </>
  );

  return (
    <>
      <Modal
        isOpen={addPropertyModal.isOpen}
        close={addPropertyModal.close}
        label="Add property"
        content={content}
      />
    </>
  );
};

export default AddPropertyModal;
