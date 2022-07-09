import React from 'react';

import styles from '@/styles/inputs/text-inputs.module.css';

interface TextInputProps {
	placeholder: string;
	name: string;
	type: 'text' | 'email';
}

export const TextInput: React.FC<TextInputProps> = ({ placeholder, type, name }) => {
	return (
		<div className={styles.container}>
			<input type={type} placeholder={placeholder} className={styles.input} name={name} required />
		</div>
	);
};
