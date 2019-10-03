import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);


global.fetch = require('node-fetch');

import { converterFormatoNumeroBrasileiroParaAmericano, converterFormatoNumeroAmericanoParaBrasileiro, search } from '../src/util/Util'
import { isRegExp } from 'util';
import { Context } from 'mocha';

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

  describe('Generic Search', () => {

    let fetchedStub;
    let promise;

    beforeEach(() => {

      fetchedStub = sinon.stub(global, 'fetch');
      fetchedStub.resolves({ json: () => { } });

    });

    afterEach(() => {
      fetchedStub.restore();
    })

    it('should call fetch function', () => {
      const artists = search();
      expect(fetchedStub).to.have.been.calledOnce;
    });


    /*
        it('should call fetch with correct URL', () => {
          context('passing one type', () => {
            const artists = search('Incubus', 'artist');
            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

            const albuns = search('Incubus', 'album');
            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');

          });

          context('passing more than one type', () => {
            const artistsAndAlbums = search('Incubus', ['artist', 'album']);
            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist,album');
          });
        });

    */

  });
});
