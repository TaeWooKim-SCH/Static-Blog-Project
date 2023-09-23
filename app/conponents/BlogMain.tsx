import { AllBlogPost, filteredSeriesBook } from "../libs/dataset";
import SubTitle from "./common/SubTitle";
import SearchBarInput from "./common/SearchBarInput";
import PostListItem from "./common/PostListItem";

export default function BlogMain() {
  // const { searchValue, searchHandler } = useSearch();
  
  // const filteredBlogPost = AllBlogPost.filter((post) => post.title.includes(searchValue));
  // console.log(filteredBlogPost);

  return (
    <div>
        <div className="text-[#555555] dark:text-[#dddddd]">개발하며 알게된 것들을 기록하는 공간입니다.</div>

        <div className="mt-5">
          <SearchBarInput />
        </div>

        <div className="flex items-center space-x-6 py-12 overflow-scroll scrollbar-hide">
          {filteredSeriesBook.map((post, idx) => (
            <div key={idx}>
              <a href={post.slug}>
                <div className="relative h-56 w-40 select-none rounded-lg bg-neutral-200 px-8 pt-8 pb-12 shadow-lg transition-all hover:scale-[1.01] hover:shadow-xl dark:bg-neutral-800">
                  <div className="absolute inset-y-0 left-2.5 w-[1px] bg-neutral-100 dark:bg-neutral-700"></div>
                  <div className="flex h-full break-keep bg-white px-2 py-3 text-sm font-medium dark:bg-neutral-700 dark:text-[#dddddd]">{post.title}</div>
                </div>
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex">
          <SubTitle>{'All Posts'}</SubTitle>
          <span className="pt-3 ml-2 text-lg font-bold dark:text-[#dddddd]">{'('}{AllBlogPost.length}{')'}</span>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 mt-12">
          {AllBlogPost.map((post, idx) => (
            <PostListItem post={post} key={idx} />
          ))}
        </div>
      </div>
  );
}