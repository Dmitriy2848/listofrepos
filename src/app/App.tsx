import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import 'app/App.css';

import Search from 'pages/Search';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Search />
	},
	{
		path: '/:id',
		element: <div>ids</div>
	}
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
