/* describe, it */

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import App from '../app';

describe('app.js', function () {

  it('should render itelf', function () {
    const instance = TestUtils.renderIntoDocument(
      <App />
    );
    expect(instance).to.not.be.undefined;
  });

});
