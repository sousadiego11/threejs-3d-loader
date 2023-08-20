import React from 'react';
import { Cadastro } from './components/Cadastro/Cadastro';
import { NotFound } from './components/NotFound/NotFound';
import { Cliente } from './components/Cliente/Cliente';
import { createBrowserRouter } from "react-router-dom";
import { BaseRoute } from './components/BaseRoute/BaseRoute';

export const router = createBrowserRouter([
	{
		path: "/",
		element: <BaseRoute><Cadastro /></BaseRoute>,
		errorElement: <NotFound />,
	},
	{
		path: "/:cliente",
		element: <BaseRoute><Cliente /></BaseRoute>,
		errorElement: <NotFound />,
	}
]);
