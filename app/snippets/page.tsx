import Layout from "../conponents/layouts/Layout";
import Title from "../conponents/common/Title";
import { AllSnippets, AllSnippetsName } from "../libs/dataset";
import SnippetListItem from "../conponents/common/SnippetListItem";
import SnippetTag from "../conponents/common/SnippetTag";

interface PageProps {
  params: {},
  searchParams: { [key: string]: string | undefined}
}

async function filteredSnippets(key: string ='all') {
  if (key === 'all') {
    return AllSnippets;
  }

  return AllSnippets.filter((post) => post.slugAsParams.split('/')[0] === key);
}

export default async function Snippets(props: PageProps) {
  const filteredSnippetsList = await filteredSnippets(props.searchParams.key);

  return (
    <Layout>
      <Title>Snippets</Title>
      <div>
        <div className="text-gray-500">개발하며 사용된 실제 코드 조각들입니다.</div>
        <div className="text-gray-500">태그별로 각종 꿀팁들이 들어있을 수 있습니다. 😎</div>
        
        <div className="flex gap-2 py-4 mt-4">
          {['all', ...AllSnippetsName].map((name) => (
            <SnippetTag name={name} key={name} />
          ))}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          {filteredSnippetsList.map((post, idx) => (
            <SnippetListItem post={post} key={idx} />
          ))}
        </div>
      </div>
    </Layout>
  );
}