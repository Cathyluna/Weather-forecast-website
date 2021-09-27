import React from "react";
import 'antd/dist/antd.css';
import { Input, Button } from 'antd';

export class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'London'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('City Name Submitted：' + this.state.value);
  }

  render() {
    return (
      <div className="inputbox">
        <p>Please search your City's weather here.</p>
        <Input
          id="input-city-name"
          placeholder="Please type in your City's name."
          defaultValue="London"
          allowClear
          onChange={this.handleChange}
          onPressEnter={this.handleSubmit}
        />
        <Button 
          type="primary"
          htmlType="submit"
          onClick={this.handleSubmit}
        >Check Weather</Button>
      </div>
    );
  }
};