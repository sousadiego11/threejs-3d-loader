import React from 'react'
import ReactDOMClient from 'react-dom/client';
import { Cadastro } from './components/Cadastro/Cadastro';
import { NotFound } from './components/NotFound/NotFound';
import { animate, resizer } from './utils/functions';
import { Cliente } from './components/Cliente/Cliente';
import './style.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

window.onresize = resizer
animate()

const router = createBrowserRouter([
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
  
const root = ReactDOMClient.createRoot(document.getElementById("app") as HTMLElement)
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
