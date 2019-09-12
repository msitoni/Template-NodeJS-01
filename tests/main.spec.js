import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/util/calc.js';

describe('Calc', () => {

    // Smoke Tests
    describe('Smoke Tests', () => {

        it('should exist method sum', () => {
            expect(sum).to.exist;
            expect(sum).to.be.a('function');
        });

        it('should exist method sub', () => {
            expect(sub).to.exist;
            expect(sub).to.be.a('function');
        });

        it('should exist method mult', () => {
            expect(mult).to.exist;
            expect(mult).to.be.a('function');
        });

        it('should exist method div', () => {
            expect(div).to.exist;
            expect(div).to.be.a('function');
        });

    });

    describe('Sum', () => {
        it('should return 4 when sum(2,2)', () => {
            expect(sum(2, 2)).to.be.equal(4);
        });
    });

    describe('Sub', () => {
        it('should return 2 when sum(4,2)', () => {
            expect(sub(4, 2)).to.be.equal(2);
        })
    });

    describe('Mult', () => {
        it('should return 4 when mult(2,2)', () => {
            expect(mult(2, 2)).to.be.equal(4);
        });
    });

    describe('Div', () => {
        it('should return 3 when div(6,2)', () => {
            expect(div(6, 2)).to.be.equal(3);
        });

        it('should return "Não é possivel dividir por zero" when div(4,0)', () => {
            expect(div(4, 0)).to.be.equal('Não é possivel dividir por zero');
        });
    });
});
