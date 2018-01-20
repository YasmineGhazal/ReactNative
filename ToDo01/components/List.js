import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import { Card } from './Card';

SQLite.DEBUG(true);
SQLite.enablePromise(false);

class List extends Component {
  constructor(props) {
    super(props);
    this.state = { TODOs: [] };
  }

  componentDidMount() {
    const temp = [];
    const db = SQLite.openDatabase('test.sqlite');
    db.transaction((tx) => {
    tx.executeSql('SELECT * from TODOs', [], (tx, results) => {
          const len = results.rows.length;
          for (let i = 0; i < len; i++) {
            const row = results.rows.item(i);
            temp.push(row);
          }
          this.setState({ TODOs: temp });
});
});
}
  renderList() {
    return this.state.TODOs.map((t, index) => <Card key={index} todo={t} />);
  }
  render() {
    return (<ScrollView >
      {this.renderList()}
      </ScrollView>);
  }
}

export { List };
