import React, {Component} from 'react'

class TodoItem extends Component {
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this)
    }
    handleDelete(){
        this.props.deleteItem(this.props.index)
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.item !== this.props.item){
            return true
        }else{
            return false
        }
    }
    render() {
        return (
            <li 
            onClick={this.handleDelete}
            dangerouslySetInnerHTML={{__html: this.props.item}}
            >
            </li>
        )
    }
}
export default TodoItem