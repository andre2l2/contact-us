import { NextPage } from "next";

import { TextInput } from "@/components/inputs/text-input";
import { Button } from "@/components/inputs/button";
import { Title } from "@/components/texts/title";
import { PageContainer } from "@/components/containers/page-container";
import { LinkTo } from "@/components/texts/link";

const Home: NextPage = () => {
  return (
    <PageContainer>
      <Title />
      <TextInput placeholder="Full Name" />
      <TextInput placeholder="E-mail" />
      <TextInput placeholder="Message" />
      <Button />
      <LinkTo text="hi@green.com" />
    </PageContainer>
  );
};

export default Home;
