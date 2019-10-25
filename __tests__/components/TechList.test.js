import React from 'react';

import { render, fireEvent } from '@testing-library/react-native';
import TechList from '~/components/TechList';

describe('TechList', () => {
  beforeAll(() => {
    jest.mock('@react-native-community/async-storage');
  });
  it('should be able to add new tech', () => {
    const { getByText, getByTestId } = render(<TechList />);

    fireEvent.changeText(getByTestId('tech-input'), 'NodeJs');
    fireEvent.press(getByText('Adicionar'));


    expect(getByText('NodeJs')).toBeTruthy();
    expect(getByTestId('tech-input')).toHaveProp('value', '');
  });
});
