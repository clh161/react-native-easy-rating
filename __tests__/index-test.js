// __tests__/Intro-test.js
import React from 'react';
import renderer from 'react-test-renderer';
import Rating from '../index';

test('Render', () => {
  const tree = renderer.create(
    <Rating
      max={5}
      iconWidth={24}
      iconHeight={24}
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render Rating 3', () => {
  const tree = renderer.create(
    <Rating
      rating={3}
      max={5}
      iconWidth={24}
      iconHeight={24}
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render Max 10', () => {
  const tree = renderer.create(
    <Rating
      max={10}
      iconWidth={24}
      iconHeight={24}
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render Icon Size 64', () => {
  const tree = renderer.create(
    <Rating
      max={5}
      iconWidth={64}
      iconHeight={64}
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
