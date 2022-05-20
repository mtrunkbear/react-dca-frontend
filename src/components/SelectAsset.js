import React from 'react';
import Select from 'react-select';
import { useState } from 'react';


const assets = [
    { label: 'BTC', value: 'BTC-USD' },
    { label: 'ETH', value: 'ETH-USD' },
    { label: 'USDT', value: 'USDT-USD' },
    { label: 'SOL', value: 'SOL-USD' },
    { label: 'TSLA', value: 'TSLA' },
    { label: 'META', value: 'FB' },
    { label: 'DOT', value: 'DOT-USD' },
  ];
  
  const SelectAsset = (  {setAsset}  ) => {





    const customStyles = {
      menu: (provided, state) => ({
        ...provided,
        width: state.selectProps.width,
        borderBottom: '1px dotted pink',
        color: state.selectProps.menuColor,
        padding: 20,
      }),
    
      control: (_, { selectProps: { width }}) => ({
        width: width
      }),
    
      singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';
    
        return { ...provided, opacity, transition };
      }
    }
    


    return (
     
        <Select
          options={assets}
          onChange={setAsset}
        />
    );
  };
  
  export default SelectAsset;