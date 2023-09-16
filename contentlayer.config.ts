import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import GithubSlugger from "github-slugger"

/** @type {import ('contentlayer/source-files').ComputedFields} */
const computedFields: any = {
  slug: {
    type: 'string',
    resolve: (post: any) => `/${post._raw.flattenedPath}`
  },
  slugAsParams: {
    type: 'string',
    resolve: (post: any) => post._raw.flattenedPath.split('/').slice(1).join('/')
  },
  wordCount: {
    type: 'number',
    resolve: (post: any) => post.body.raw.split(/\s+/gu).length,
  },
  headings: {
    type: "json",
    resolve: async (doc: any) => {
      const regXHeader = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
      const slugger = new GithubSlugger()
      const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
          ({ groups }: any) => {
            const flag = groups?.flag;
            const content = groups?.content;
            return {
              level: flag.length,
              text: content,
              slug: content ? slugger.slug(content) : undefined
            };
          }
        );
        return headings;
      },
  }
};

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string',
      required: true
    },
    date: {
      type: 'date',
      required: true
    },
    tags: {
      type: 'list',
      required: false,
      of: {type: 'string'}
    }
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'github-dark',
          onVisitLine(node: any) {
            if (node.children.length === 0) {
              node.children = [{type: 'text', value: ''}]
            }
          },
          onVisitHighlightedLine(node: any) {
            node.properties.className.push('line-highlighted')
          },
          onVisitHighlightedWord(node: any) {
            node.properties.className = ['word-highlighted']
          }
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section'
          }
        }
      ]
    ]
  }
})