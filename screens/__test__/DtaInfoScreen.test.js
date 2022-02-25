import React from "react";
import { render, fireEvent, act, cleanup } from "@testing-library/react-native";

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ReduxThunk from 'redux-thunk';

import DtaInfoScreen from "../DtaInfoScreen";

afterEach(cleanup);

it("renders default elements", () => {
    const initialState = { bannerData: { data: '' } };

    const middlewares = [ReduxThunk]
    const mockStore = configureStore(middlewares);

    let store, wrapper;

    store = mockStore(initialState)

    const { getAllByText, getByPlaceholderText } = render(<Provider store={store}><DtaInfoScreen /></Provider>);

    expect(getAllByText("Login").length).toBe(1);
    // expect(getAllByText("DTA Information").length).toBe(1);
    // getByPlaceholderText("SOCIAL SECURITY #");
    // getByPlaceholderText("YEAR OF BIRTH (YYYY)");
});