import React, { useEffect, useContext } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

import AuthContext from "../contexts/auth/Auth.context.js";
import ProtectedRoute from "./ProtectedRoute.js";

// different routes
import Home from "../screens/Home.js";
import Login from "../screens/Login.js";
import Signup from "../screens/Signup.js";
import CreatePost from "../screens/CreatePost.js";
import Profile from "../screens/Profile.js";
import UserProfile from "../screens/UserProfile.js";
import SubscribePost from "../screens/SubscribePosts.js";
import Reset from "../screens/ResetPassword.js";
import NewPass from "../screens/NewPassword.js";

const Routing = () => {
	const { state } = useContext(AuthContext);

	// check if we are already authenticated
	useEffect(() => {
		state.isAuthenticated ? <Redirect to="/" /> : <Redirect to="/login" />;
	});

	return (
		<BrowserRouter>
			<Switch>
				{/* Public routes */}
				<Route exact path="/login" component={Login} />
				<Route exact path="/signup" component={Signup} />
				<Route exact path="/reset" component={Reset} />
				<Route exact path="/reset/:token" component={NewPass} />

				{/* Separate the protected routes from public ones */}
				<ProtectedRoute exact path="/" component={SubscribePost} />
				<ProtectedRoute exact path="/explore" component={Home} />
				<ProtectedRoute exact path="/create" component={CreatePost} />
				<ProtectedRoute exact path="/profile" component={Profile} />
				<ProtectedRoute exact path="/profile/:userid" component={UserProfile} />

				{/* in case we want to handle the 404 page not found */}
				{/* <Route component={NotFound} /> */}
			</Switch>
		</BrowserRouter>
	);
};

export default Routing;
