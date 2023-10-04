export default function Title({ children, className, ...props }: React.ComponentProps<'h1'>) {
  return (
    <h1
      {...props}
      className={`mb-4 text-3xl font-extrabold dark:text-[#dddddd] lg:text-5xl lg:leading-snug ${className}`}
    >{ children }</h1>
  );
}