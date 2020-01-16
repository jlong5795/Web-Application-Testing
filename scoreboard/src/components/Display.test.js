import React from 'react';
import * as rtl from '@testing-library/react';
import Display from './Display';

test('both balls and strikes are rendered', () => {
    const { getByText } = rtl.render(<Display />);

    getByText(/balls/i);
    getByText(/strikes/i);
})