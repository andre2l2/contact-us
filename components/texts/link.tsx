import React from 'react';

import styles from '@/styles/texts/link.module.css';

interface LinkToProps {
	text: string;
}

export const LinkTo: React.FC<LinkToProps> = ({ text }) => {
	return (
		<a href="#" className={styles.link}>
			{text}
		</a>
	);
};
