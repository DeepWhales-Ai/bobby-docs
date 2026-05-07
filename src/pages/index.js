import React from 'react';
import Layout from '@theme/Layout';
import HomeContent from '@site/src/components/Home/HomeContent';

export default function Home() {
  return (
    <Layout
      title="Bobby"
      description="The intelligence layer crypto Telegram runs on."
      noFooter={true}>
      <HomeContent />
    </Layout>
  );
}
