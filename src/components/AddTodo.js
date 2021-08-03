import React from 'react';
import styled from "styled-components";
import Button from "./styled/Button";

export default class AddTodo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            title: '',
            task: '',
        }
    }

    onAddTodo = (e) => {
        this.setState({id: this.state.id + 1});
        let todo = {id: this.state.id+1,title: this.state.title, task: this.state.task};
        this.props.addTodo(todo);
    };


    render() {
        return (
            <NewTask>
                <NewTaskInput type="text" onChange={e => this.setState({task: e.target.value})}/>
                <Button onClick={e => this.onAddTodo(e)}>
                    Add a new task
                </Button>
            </NewTask>

        )
    };

}

const NewTask = styled.div`
  font-size: 1em;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

const NewTaskInput = styled.input`
    padding: 1em;
    margin-right: 1em;
    background-color: #64B5F6;
    border: solid 2px #0D47A1;
    flex-basis: 75%;
`;
