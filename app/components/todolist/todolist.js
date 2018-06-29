import React, { Component } from "react";
import { View } from "react-native";
import { styles } from "./styles";

import { TodolistInput } from "./todolistInput";
import { TodoListItems } from "./todolistItems";

export class TodoList extends React.Component {
  onAddTodo = text => this.props.onAdd(text);

  onRemoveTodo = index => this.props.onRemove(index);

  render() {
    const { todos } = this.props;

    return (
      <View style={styles.container}>
        <TodolistInput
          placeholder={"Type a to do, what you will learn?"}
          onSubmitEditing={this.onAddTodo}
        />
        <TodoListItems list={todos} onPressItem={this.onRemoveTodo} />
      </View>
    );
  }
}
