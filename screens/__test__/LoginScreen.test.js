import React from "react";
import { render, fireEvent, act, cleanup, waitFor } from "@testing-library/react-native";

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ReduxThunk from 'redux-thunk';

import LoginScreen from "../LoginScreen";

afterEach(cleanup);

it("renders default elements", () => {
    const initialState = { bannerData: { data: '' } };

    const middlewares = [ReduxThunk]
    const mockStore = configureStore(middlewares);

    let store, wrapper;

    store = mockStore(initialState)

    const { getAllByTitle } = render(<Provider store={store}><LoginScreen /></Provider>);

    waitFor(() => expect(getAllByTitle("Login").length).toBe(1));
});