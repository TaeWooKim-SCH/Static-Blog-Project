import Layout from "../conponents/layouts/Layout";
import Title from "../conponents/common/Title";
import SnippetTag from "../conponents/common/SnippetTag";
import SnippetListItem from "../conponents/common/SnippetListItem";
import { AllSnippetsName } from "../libs/dataset";
import { filteredSnippets } from "../libs/module";

interface PageProps {
  params: {},
  searchParams: { [key: string]: string | undefined}
}

export default async function Snippets(props: PageProps) {
  const filteredSnippetsList = await filteredSnippets(props.searchParams.key);

  return (
    <Layout>
      <Title>Snippets</Title>
        <div>
          <div className="text-[#555555] dark:text-[#dddddd]">개발하며 사용된 실제 코드 조각들입니다.</div>
          <div className="text-[#555555] dark:text-[#dddddd]">태그별로 각종 꿀팁들이 들어있을 수 있습니다. 😎</div>
          
          <div className="flex gap-2 py-4 mt-4 overflow-scroll scrollbar-hide">
            {['all', ...AllSnippetsName].map((name) => (
              <SnippetTag searchParams={props.searchParams.key} name={name} key={name} />
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
