import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import AppHolder from '../imports/ui/app';
Meteor.startup(() => {
    render(<AppHolder />, document.getElementById('todo'))
})
