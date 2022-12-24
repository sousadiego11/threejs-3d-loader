import React from 'react'
import ReactDOMClient from 'react-dom/client';
import { animate, resizer } from './utils/functions';
import './style.css'
import { router } from './router';
import {
  RouterProvider,
} from "react-router-dom";

window.onresize = resizer
animate()

ReactDOMClient.createRoot(document.getElementById("app") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
