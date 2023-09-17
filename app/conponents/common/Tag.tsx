export default function Tag({ tag }: { tag: string; }) {
  return (
    <span
      className="rounded-lg px-2 py-0.5 bg-gray-200 font-normal">
      {tag}
    </span>
  );
}