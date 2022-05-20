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

    return (
      <div className="SelectAsset" style={{
        color: 'hsl(0, 0%, 40%)',
        display: 'inline-block',
        fontSize: 12,
        fontStyle: 'italic',
        marginTop: '1em',
      }}>
        <Select
          options={assets}
          onChange={setAsset}
        />
      </div>
    );
  };
  
  export default SelectAsset;