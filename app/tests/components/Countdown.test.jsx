var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
    it('should exist', () => {
        expect(Countdown).toExist();
    });
   
    describe('handleSetCountdown', () => {
        it('should set state to started and countdown', (done) => {
            // must render component to test methods that reside inside it
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe('started');

            // make a new assertion after 1 second
            // setTimeout only fires once, unlike setInterval
            // setTimeout is asynchronous, by default mocha tests do not support async
            // specify a done argument, pass it to 'it'
            // tells mocha that you are planning on using async
            // waits for done to be called to stop test
            setTimeout(() => {
                expect(countdown.state.count).toBe(9);
                done();
            }, 1001);
        });

        it('should stay at zero', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(1);

            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                done();
            }, 3001);
        })
    });
});