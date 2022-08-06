import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

// Smoke test
it('renders without crashing', () => {
    render(<Card />);
})

// snapshot test
it('it matches snapshot', () => {
    const {asFragment} = render(<Card />);
    expect(asFragment).toMatchSnapshot()
})
