import React from 'react';

import styles from '@/styles/texts/contact.module.css';

export const Contact: React.FC = () => {
	return (
		<div className={styles.container}>
			<div>
				<h2>Contact</h2>
				<p>hi@green.com</p>
			</div>
			<div className={styles.space}>
				<h2>Based in</h2>
				<p>
					Los Angeles, <br /> California
				</p>
			</div>
		</div>
	);
};
