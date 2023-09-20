export default function Tag({
  children,
  className
}: React.ComponentProps<'span'>) {
  return (
    <span
      className={`rounded-lg px-2 py-0.5 bg-gray-200 transition-colors hover:bg-gray-300 dark:bg-neutral-800 dark:text-[#dddddd] ${className}`}>
      {children}
    </span>
  );
}