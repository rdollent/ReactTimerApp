var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');


var Controls = require('Controls');

describe('Controls', () => {
    it('should exist', () => {
        expect(Controls).toExist();
    });

    describe('render', () => {
        it('should render pause when started', () => {
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
            var $el = $(React.findDOMNode(controls));

            var $pauseButton = $el.find('button:contains(Pause)');

            expect($pauseButton.length).toBe(1);
            // length property is # of items it found
        });

        it('should render start when paused', () => {
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
            var $el = $(React.findDOMNode(controls));

            var $startButton = $el.find('button:contains(Start)');

            expect($startButton.length).toBe(1);
            // length property is # of items it found
        });


    })
});