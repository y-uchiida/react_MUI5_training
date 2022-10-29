import React, { memo } from 'react'
import { Outlet } from 'react-router-dom';
import SearchAppBar from '../../organisms/AppBar'

export const Layout = memo(() => {
	return (
		<>
			<SearchAppBar />
			<Outlet />
		</>
	)
});
