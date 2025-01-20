import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App from '../app/index';

test('renders button and shows message on press', () => {
    const { getByText } = render(<App />);
    const button = getByText('Press me!');
    fireEvent.press(button);
    expect(getByText('Hello, World!')).toBeTruthy();
});
