export default function SEO({ title, description }: PropsType) {
  return (
    <head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </head>
  );
}

interface PropsType {
  title: string;
  description: string;
}