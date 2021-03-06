import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
	if (isAuthenticated) {
		return <Redirect to='/posts' />;
	}
	return (
		<section className='landing'>
			<div className='dark-overlay'>
				<div className='landing-inner'>
					<h1 className='x-large'>TechConnect</h1>
					<p className='lead'>Social network for developers</p>
					<div className='buttons'>
						<Link to='/register' className='btn btn-primary'>
							Register
						</Link>
						<Link to='signin' className='btn btn-light'>
							Sign in
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated
});

Landing.propTypes = {
	isAuthenticated: PropTypes.bool
};

export default connect(mapStateToProps, null)(Landing);
