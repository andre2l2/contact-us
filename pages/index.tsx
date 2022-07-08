import { NextPage } from 'next';

import { TextInput } from '@/components/inputs/text-input';
import { Button } from '@/components/inputs/button';
import { Title } from '@/components/texts/title';
import { PageContainer } from '@/components/containers/page-container';
import { LinkTo } from '@/components/texts/link';
import { SocualIcon } from '@/components/containers/social-icons';

const Home: NextPage = () => {
	return (
		<PageContainer>
			<Title />
			<TextInput placeholder="Full Name" type="text" />
			<TextInput placeholder="E-mail" type="email" />
			<TextInput placeholder="Message" type="text" />
			<Button />
			<SocualIcon facebook="#" instagram="#" twitter="#" />
			<LinkTo text="hi@green.com" />
		</PageContainer>
	);
};

export default Home;
