import './App.css'

import StateIndex from '@/views/state/StateIndex'
import { BrowserRouter, Outlet } from 'react-router-dom'

function App() {
	const username = 100
	console.log(username)

	return (
		<div>
			<h1>hello</h1>
			<BrowserRouter>
				<StateIndex />
				<Outlet />
			</BrowserRouter>
		</div>
	)
}

export default App
