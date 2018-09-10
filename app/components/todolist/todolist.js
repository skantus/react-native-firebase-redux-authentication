import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { styles } from './styles';
import { Add, Remove } from '../../actions/todolist/actions';

import { TodolistInput } from './todolistInput';
import { TodoListItems } from './todolistItems';

class TodoList extends React.Component {
  onAddTodo = text => this.props.onAdd(text);

  onRemoveTodo = index => this.props.onRemove(index);

  render() {
    const { todos } = this.props;

    return (
      <View style={styles.container}>
        <TodolistInput placeholder={'Type a to do, what you will learn?'} onSubmitEditing={this.onAddTodo} />
        <TodoListItems list={todos} onPressItem={this.onRemoveTodo} />
      </View>
    );
  }
}

const mapStateToProps = ({ todolistReducer: { todos } }) => ({
  todos: todos
});

const mapDispatchToProps = {
  onAdd: Add,
  onRemove: Remove
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
