import React from 'react';
import Image from 'next/image';

import styles from '@/styles/containers/social-icons.module.css';

interface SocualIconProps {
	facebook: string;
	instagram: string;
	twitter: string;
}

export const SocualIcon: React.FC<SocualIconProps> = ({ facebook, instagram, twitter }) => {
	return (
		<div className={styles.social}>
			<a href={facebook} className={styles.link}>
				<Image src="/images/facebook.svg" alt="facebook" width={48} height={48} />
			</a>
			<a href={instagram} className={styles.link}>
				<Image src="/images/instagram.svg" alt="instagram" width={48} height={48} />
			</a>
			<a href={twitter} className={styles.link}>
				<Image src="/images/twitter.svg" alt="twitter" width={48} height={48} />
			</a>
		</div>
	);
};
