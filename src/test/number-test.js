const Number = require('../model/number')
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../app');
const should = chai.should();

chai.use(chaiHttp);

describe('Numbers', () => {
  describe('/GET number/:number', () => {
    it('Should return a converted number into words', (done) => {
      chai.request(server)
        .get('/number/12312')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('extenso').eql('doze mil e trezentos e doze');
          done();
        });
    });
    it('Should return an error when number is not an interger beetween -99999 and 99999', (done) => {
      chai.request(server)
        .get('/number/fghfghfghf')
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('Inform a integer number between -99999 and 99999');
          done();
        });
    });
  });
  describe('Number model', () => {
    it('Should convert number to words', () => {
      let number = new Number(25);
      number.toWords().should.eql('vinte e cinco');
      number = new Number(99999);
      number.toWords().should.eql('noventa e nove mil e novecentos e noventa e nove');
      number = new Number('-99999');
      number.toWords().should.eql('menos noventa e nove mil e novecentos e noventa e nove');
      number = new Number(0000000000000000);
      number.toWords().should.eql('zero');
    });
  });
});