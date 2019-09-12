import { expect } from 'chai';
import { converterFormatoNumeroBrasileiroParaAmericano, converterFormatoNumeroAmericanoParaBrasileiro } from '../src/util/Util'

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

    });

    describe('converterFormatoNumeroAmericanoParaBrasileiro', () => {
        it('should return `10,00` when converterFormatoNumeroAmericanoParaBrasileiro(10.00)', () => {
            expect(converterFormatoNumeroAmericanoParaBrasileiro(10.00)).to.be.equal('10,00');
        });
        it('should return `16,35` when converterFormatoNumeroAmericanoParaBrasileiro(16.35)', () => {
            expect(converterFormatoNumeroAmericanoParaBrasileiro(16.35)).to.be.equal('16,35');
        });
    });

    describe('converterFormatoNumeroBrasileiroParaAmericano', () => {
        it('should return `10.00` when converterFormatoNumeroBrasileiroParaAmericano(10,00)', () => {
            expect(converterFormatoNumeroBrasileiroParaAmericano('10,00')).to.be.equal(10.00);
        });
        it('should return `16.35` when converterFormatoNumeroBrasileiroParaAmericano(16,35)', () => {
            expect(converterFormatoNumeroBrasileiroParaAmericano('16,35')).to.be.equal(16.35);
        });
    });

});
