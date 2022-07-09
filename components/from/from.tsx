import React from 'react';

import { Button } from '../inputs/button';
import { TextInput } from '../inputs/text-input';
import style from '@/styles/from/from.module.css';

export const From: React.FC = () => {
	return (
		<form action="" className={style.from}>
			<TextInput placeholder="Full Name" type="text" name="name" />
			<TextInput placeholder="E-mail" type="email" name="email" />
			<TextInput placeholder="Message" type="text" name="message" />
			<Button />
		</form>
	);
};
