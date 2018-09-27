var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
    it('should exist', () => {
        expect(Timer).toExist();
    });

    it('should start timer on started status', (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer/>);
        timer.handleSetCountdown(5);

        expect(timer.state.count).toBe(5);
        expect(timer.state.countdownStatus).toBe('started');

        // make a new assertion after 1 second
            // setTimeout only fires once, unlike setInterval
            // setTimeout is asynchronous, by default mocha tests do not support async
            // specify a done argument, pass it to 'it'
            // tells mocha that you are planning on using async
            // waits for done to be called to stop test
        setTimeout(() => {
            expect(timer.state.count).toBe(6);
            done();
        },1001);
    });

    it('should pause timer on paused status', (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer/>);
        timer.handleSetCountdown(5);
        timer.handleStatusChange('paused');

        // make a new assertion after 1 second
            // setTimeout only fires once, unlike setInterval
            // setTimeout is asynchronous, by default mocha tests do not support async
            // specify a done argument, pass it to 'it'
            // tells mocha that you are planning on using async
            // waits for done to be called to stop test
        setTimeout(() => {
            expect(timer.state.count).toBe(5);
            expect(timer.state.countdownStatus).toBe('paused');
            done();
        },1001);
    });

    it('should clear timer on stopped status', (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer/>);
        timer.handleSetCountdown(5);
        timer.handleStatusChange('stopped');

        // make a new assertion after 1 second
            // setTimeout only fires once, unlike setInterval
            // setTimeout is asynchronous, by default mocha tests do not support async
            // specify a done argument, pass it to 'it'
            // tells mocha that you are planning on using async
            // waits for done to be called to stop test
        setTimeout(() => {
            expect(timer.state.count).toBe(0);
            expect(timer.state.countdownStatus).toBe('stopped');
            done();
        },1001);
    });




});