import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { render } from "@testing-library/react";
import Navbar from "../NavBar";

describe('Jest test' , ()=> {
    it('Match Snapshot' , ()=> {
        const { container } = render(
            <BrowserRouter>
            <Navbar />
            </BrowserRouter>,
        );
        expect(container.firstChild).toMatchSnapshot();

    })
})