import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const Link = styled.a`
	cursor: pointer;
`;

const Container = styled.div`
	width: 300px;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

interface SocualIconProps {
	facebook: string;
	instagram: string;
	twitter: string;
}

export const SocualIcon: React.FC<SocualIconProps> = ({ facebook, instagram, twitter }) => {
	return (
		<Container>
			<Link href={facebook}>
				<Image src="/images/facebook.svg" alt="facebook" width={48} height={48} />
			</Link>
			<Link href={instagram}>
				<Image src="/images/instagram.svg" alt="instagram" width={48} height={48} />
			</Link>
			<Link href={twitter}>
				<Image src="/images/twitter.svg" alt="twitter" width={48} height={48} />
			</Link>
		</Container>
	);
};
