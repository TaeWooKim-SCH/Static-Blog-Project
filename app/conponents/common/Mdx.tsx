import { useMDXComponent } from "next-contentlayer/hooks";
// import '../../styles/prose.css';

interface PageProps {
  data: string;
}

export default function Mdx({ data }: PageProps) {
  const MdxComponent = useMDXComponent(data);

  return (
    <div className="w-full prose dark:prose-dark">
      <MdxComponent />
    </div>
  );
}