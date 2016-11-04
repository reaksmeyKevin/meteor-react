import { Meteor } from 'meteor/meteor'
import {Todos} from '../imports/api/todo'
Meteor.startup(() => {
  // code to run on server at startup
  if (Todos.find().count() <= 0) {
    for (let i = 0; i < 10; i++) {
      Todos.insert({text: `Todos ${i}`});
    }
  }
})
