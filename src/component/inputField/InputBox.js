import React from "react";
import { AutoComplete } from 'antd';
import 'antd/dist/antd.css';

const options = [
    {value: 'Beijing'},
    {value: 'Shanghai'},
    {value: 'Xian'},
    {value: 'London'}
];

export const InputBox = () => (
<AutoComplete
    style={{
        width: 200,
    }}
    options={options}
    placeholder="try to type Beijing "
    filterOption={(inputValue, option) =>
      option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
  />
);