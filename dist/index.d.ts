import React from 'react';

interface ButtonProps {
    label: string;
}

declare const Button: (props: ButtonProps) => React.JSX.Element;

declare const Test: () => React.JSX.Element;

export { Button, Test };
