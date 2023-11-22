import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import './index.css';
import Root, {
	loader as rootLoader,
	action as rootAction
} from './routes/root';
import ErrorPage from './error-page';
import task, {
	loader as taskLoader
} from './routes/task';
import Edittask, {
	action as edittaskAction
} from './routes/edit';
import { action as destroytaskAction } from './routes/destroy';
import Index from './routes';

const container = document.getElementById('root');

if (container === null) throw new Error('You don\'t have root element');

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		loader: rootLoader,
		action: rootAction,
		children : [
			{
				errorElement: <div>Oops! There was an error.</div>,
				children: [
					{
						index: true,
						element: <Index />
					},
					{
						path: "tasks/:taskId",
						element: <task />,
						loader: taskLoader,
					},
					{
						path: "tasks/:taskId/edit",
						element: <Edittask />,
						loader: taskLoader,
						action: edittaskAction,
					},
					{
						path: "tasks/:taskId/destroy",
						action: destroytaskAction,
					}
				],
			}
		]
		
	},
]);

const root = ReactDOM.createRoot(container);

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
