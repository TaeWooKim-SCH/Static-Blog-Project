export default function SubTitle({ children, className, ...props }: React.ComponentProps<'h3'>) {
  return (
    <h2 {...props} className={`text-3xl font-bold lg:text-4xl ${className} dark:text-[#dddddd]`}>{ children }</h2>
  );
}