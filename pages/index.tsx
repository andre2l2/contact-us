import { NextPage } from 'next';
import Image from 'next/image';

import { From } from '@/components/from/from';
import { Title } from '@/components/texts/title';
import { PageContainer } from '@/components/containers/page-container';
import { LinkTo } from '@/components/texts/link';
import { SocualIcon } from '@/components/containers/social-icons';
import { Contact } from '@/components/texts/contact';
import styles from '@/styles/index.module.css';

const Home: NextPage = () => {
	return (
		<PageContainer>
			<div className={styles.container}>
				<div className={styles.image}>
					<Image src="/images/photo.png" alt="photo" width={450} height={740} />
				</div>
				<div className={styles.from}>
					<Title />
					<From />
				</div>
				<div className={styles.contact}>
					<Contact />
					<SocualIcon facebook="#" instagram="#" twitter="#" />
					<LinkTo text="hi@green.com" />
				</div>
			</div>
		</PageContainer>
	);
};

export default Home;
