import React,{ Component } from "react";
import TodoItem from './TodoItem'
import './style.css'
import axios from "axios";
class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
      list: [],
    }
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleChange(e) {
    const value = e.target.value
    this.setState(() => {
      return {
        inputValue: value
      }
    })
  }
  handleBtnClick(){
    this.setState((prevState) => {
      return {
        list: [...prevState.list,prevState.inputValue],
        inputValue: ''
      }
    })
  }
  handleDelete(index){
    console.log(index);
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1)
      return {
        list
      }
    })
  }

  componentDidMount(){
    axios.get('/todolist.json').then((res) => {
      this.setState({
        list: res.data
      })
    }).catch(() => {
      alert("error")
    })
  }

  getTodoItem(){
   return this.state.list.map((item,index) => {
    return (
                <TodoItem
                    item={item}
                    index={index}
                    key={index}
                    deleteItem={this.handleDelete}
                />
            )
        })
  }

  render(){
      return (
      <>
          <div>
            <label htmlFor="insertArea">输入内容</label>
              <input className="input" id="insertArea" value={this.state.inputValue} onChange={this.handleChange.bind(this)}></input>
              <button onClick={this.handleBtnClick.bind(this)}>提交</button>
          </div>
            <ul>
              { this.getTodoItem() }
            </ul>
      </>
    );
  }
}

export default TodoList;
