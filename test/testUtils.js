/**
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or
 * https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * /test/testUtils.js
 */
const fs = require('fs');
const conf = require('../src/config/config');
const constants = require('../src/constants');
conf.clearConfig();
conf.setRegistry('./test/config/testRegistry.json');

const config = conf.getConfig();

function makeRegistryFile() {
  const expectedResult = {
    collectorName1: {
      url: 'http://www.xyz.com',
      token: 'ewuifiekhfewfhsfhshjfjhfgewuih',
    },
  };
  fs.writeFile(constants.registryLocation,
    JSON.stringify(expectedResult), 'utf8');
}

function removeRegistryFile() {
  fs.unlinkSync(constants.registryLocation);
}

module.exports = {
  makeRegistryFile,
  removeRegistryFile,
  config,
};