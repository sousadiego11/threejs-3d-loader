import React from 'react';
import { Cadastro } from './components/Cadastro/Cadastro';
import { NotFound } from './components/NotFound/NotFound';
import { Cliente } from './components/Cliente/Cliente';
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
	{
		path: "/cadastro",
		element: <Cadastro />,
		errorElement: <NotFound />,
	},
	{
		path: "/:cliente",
		element: <Cliente />,
		errorElement: <NotFound />,
	},
	{
		path: "/",
		element: <NotFound />,
		errorElement: <NotFound />,
	},
]);
