const log = require('./../index');

var chai = require('chai'),
    expect = chai.expect,
    sinonChai = require('sinon-chai'),
    sinon = require('sinon');

chai.use(sinonChai);
const MESSAGE = 'Hello this is a text of example of test';

describe('Test of the functions', () => {
    beforeEach(() => {
        sinon.spy(console, 'log');
    });
    it('function ok', () => {
        log.ok(MESSAGE);
        expect(console.log).to.be.called;
    });
    it('function info', () => {
        log.info(MESSAGE);
        expect(console.log).to.be.called;
    });
    it('function error', () => {
        log.error(MESSAGE);
        expect(console.log).to.be.called;
    });
    it('function notice', () => {
        log.notice(MESSAGE);
        expect(console.log).to.be.called;
    });
    it('Not call to console.log', () => {
        log.greet();
        expect(console.log).to.not.be.called;
    });
    afterEach(() => {
        console.log.restore();
    });
});