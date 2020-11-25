import React from 'react';

const LoadingOverlay = () => {
	return (
		<div className="loading-overlay">
			<div>
				<div className="dot-loader"></div>
				<div className="dot-loader dot-loader--2"></div>
				<div className="dot-loader dot-loader--3"></div>
			</div>
		</div>
	)
};

export default LoadingOverlay;