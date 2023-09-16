import { useMDXComponent } from "next-contentlayer/hooks";

interface PageProps {
  data: string;
}

export default function Mdx({ data }: PageProps) {
  const MdxComponent = useMDXComponent(data);
  return (
    <div className="w-full prose dark:prose">
      <MdxComponent />
    </div>
  );
}