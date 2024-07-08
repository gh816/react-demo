import React,{ Component } from "react";
//import 'antd/dist/antd.css'
import { Input,Button,List } from 'antd';
import store from './store'



class TodoList1 extends Component {

  constructor(props){
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handSubmit = this.handSubmit.bind(this)
    store.subscribe(this.handleStoreChange);
  }
  handleInputChange(e){
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    store.dispatch(action)
  }
  handSubmit(){
    const action = {
      type: 'add_todo_item',
      value: this.state.inputValue
    }
    store.dispatch(action)
  }
  handleStoreChange(){
    this.setState(store.getState())
  }
  handClickDelete(index){
    const action = {
      type: 'delete_todo_item',
      index
    }
    store.dispatch(action)
  }
  render(){
    return (
        <div style={{marginLeft: 10, marginTop: 10}}>
            <Input 
              value={this.state.inputValue} 
              placeholder="Basic usage" 
              style={{width: 300}}
              onChange={this.handleInputChange}
              ></Input>
            <Button type="primary" style={{marginLeft: 10}} onClick={this.handSubmit}>提交</Button>
            <List
              style={{width: '300px', marginTop: '10px'}}
              bordered
              dataSource={this.state.list}
              renderItem={(item, index) => <List.Item onClick={this.handClickDelete.bind(this, index)}>{item}</List.Item>}
            >
            </List>
        </div>
    )
  }
}

export default TodoList1