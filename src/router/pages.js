import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import {Init} from "../Components/initialize";
import {Form} from "../Components/Form";

const Pages = () => {
    return (
        <Routes>
            <Route path={routes.initGame} element={<Init />} />
            <Route path={routes.checkGame} element={<Form />} />
        </Routes>
    );
};

export default Pages

