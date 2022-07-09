import { NextPage } from 'next';

import { From } from '@/components/from/from';
import { Title } from '@/components/texts/title';
import { PageContainer } from '@/components/containers/page-container';
import { LinkTo } from '@/components/texts/link';
import { SocualIcon } from '@/components/containers/social-icons';

const Home: NextPage = () => {
	return (
		<PageContainer>
			<Title />
			<From />
			<SocualIcon facebook="#" instagram="#" twitter="#" />
			<LinkTo text="hi@green.com" />
		</PageContainer>
	);
};

export default Home;
