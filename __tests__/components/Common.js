import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { Title } from '../../components/Common';

it('Title.render', () => {
    const tree = renderer.create(
        <Title />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
