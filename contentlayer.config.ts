import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

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
    tag: {
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
          theme: {
            light: 'github-light',
            dark: 'github-dark'
          },
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