
const packageManifest = require('../../package.json');

describe(packageManifest.name, () => {
  it('test 1 to be 1', () => {
    expect(1).toEqual(1);
  });
});
