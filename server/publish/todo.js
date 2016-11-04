import {Meteor} from 'meteor/meteor';
import {Todos} from '../../imports/api/todo';

Meteor.publish('todos', function({selector, limit}){
    console.log(selector, limit);
    return Todos.find(selector, {limit: limit, sort: {text: 1}})
});