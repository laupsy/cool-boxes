/* eslint-disable import/prefer-default-export, react/jsx-filename-extension */
import React from "react";
import Provider from "./src/provider";

export const wrapRootElement = ({ element }) => <Provider>{element}</Provider>;
