export default function Title({ children, className, ...props }: React.ComponentProps<'h1'>) {
  return (
    <h1
      {...props}
      className={`mb-4 text-5xl font-extrabold dark:text-[#dddddd] leading-snug ${className}`}
    >{ children }</h1>
  );
}