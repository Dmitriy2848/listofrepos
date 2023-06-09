import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import App from 'app/App';
import 'app/index.css';
import store, { persistor } from 'app/store/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Provider store={store}>
		<PersistGate
			loading={null}
			persistor={persistor}
		>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</PersistGate>
	</Provider>
);
