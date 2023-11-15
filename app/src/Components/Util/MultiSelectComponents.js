import React, { useEffect, useState } from 'react';
import Multiselect from 'multiselect-react-dropdown';

const MultiSelectComponents = ({ options, onSelect, onRemove, selectedValues, defaultSelectedValues }) => {
    return (<div>
        <h1 className="pb-2">التصنيف الفرعي</h1>
        <Multiselect 
            options={options}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="name"
            placeholder='بحث او اختيار'
            emptyRecordMsg='لا توجد تصنيفات اخرى'
            selectedValues={selectedValues}            
            value={selectedValues}
            defaultValue={selectedValues}
         />
      </div>);
}

export default MultiSelectComponents
