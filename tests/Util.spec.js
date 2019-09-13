import { expect } from 'chai';
import { converterFormatoNumeroBrasileiroParaAmericano, converterFormatoNumeroAmericanoParaBrasileiro, converterDataFormatoAmericano } from '../src/util/Util'

describe('Util', () => {


    describe('Smoke Tests', () => {
        it('should exist method converterFormatoNumeroAmericanoParaBrasileiro', () => {
            expect(converterFormatoNumeroAmericanoParaBrasileiro).to.exist;
            expect(converterFormatoNumeroAmericanoParaBrasileiro).to.be.a('function');
        });

        it('should exist method converterFormatoNumeroBrasileiroParaAmericano', () => {
            expect(converterFormatoNumeroBrasileiroParaAmericano).to.exist;
            expect(converterFormatoNumeroBrasileiroParaAmericano).to.be.a('function');
        });

        it('should exist method converterDataFormatoAmericano', () => {
            expect(converterDataFormatoAmericano).to.exist;
            expect(converterDataFormatoAmericano).to.be.a('function');
        });
    });

    describe('converterFormatoNumeroAmericanoParaBrasileiro', () => {
        it('should return `10,00` when converterFormatoNumeroAmericanoParaBrasileiro(10.00)', () => {
            expect(converterFormatoNumeroAmericanoParaBrasileiro(10.00)).to.be.equal('10,00');
        });
        it('should return `16,35` when converterFormatoNumeroAmericanoParaBrasileiro(16.35)', () => {
            expect(converterFormatoNumeroAmericanoParaBrasileiro(16.35)).to.be.equal('16,35');
        });
        it('should return `0,00` when converterFormatoNumeroAmericanoParaBrasileiro()', () => {
            expect(converterFormatoNumeroAmericanoParaBrasileiro('')).to.be.equal('0,00');
        });
        it('should return `10,00` when converterFormatoNumeroAmericanoParaBrasileiro(10)', () => {
            expect(converterFormatoNumeroAmericanoParaBrasileiro(10)).to.be.equal('10,00');
        });
    });

    describe('converterFormatoNumeroBrasileiroParaAmericano', () => {
        it('should return `10.00` when converterFormatoNumeroBrasileiroParaAmericano(10,00)', () => {
            expect(converterFormatoNumeroBrasileiroParaAmericano('10,00')).to.be.equal(10.00);
        });
        it('should return `16.35` when converterFormatoNumeroBrasileiroParaAmericano(16,35)', () => {
            expect(converterFormatoNumeroBrasileiroParaAmericano('16,35')).to.be.equal(16.35);
        });
        it('should return `0.00` when converterFormatoNumeroBrasileiroParaAmericano()', () => {
            expect(converterFormatoNumeroBrasileiroParaAmericano('')).to.be.equal('0.00');
        });
        it('should return `10` when converterFormatoNumeroBrasileiroParaAmericano(10)', () => {
            expect(converterFormatoNumeroBrasileiroParaAmericano('10')).to.be.equal(10);
        });
    });

    describe('converterDataFormatoAmericano', () => {
        it('compares dates regardless of their associated times', () => {
            var actual = new Date(2013, 4, 30, 16, 6),
                expected = new Date(2013, 4, 30, 16, 6);

            expect(actual).to.be.equal(expected);
        });

    });


});
