import { expect } from 'chai';
import genUid from './index';

describe('light-uid', () => {
  it(`should generate unique string each time`, () => {
    expect(genUid()).to.not.be.equal(genUid());
  });

  it(`should generate uid with length provided`, () => {
    for (const len of [18, 25, 203]) {
      expect(genUid(len).length).to.be.equal(len);
    }
  });

  it(`should generate uid with 16 length when length isn't provided`, () => {
    expect(genUid().length).to.be.equal(16);
  });
});
