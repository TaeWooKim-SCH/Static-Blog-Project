export default function SubTitle({ children, className, ...props }: React.ComponentProps<'h3'>) {
  return (
    <h2 {...props} className={`text-4xl font-bold ${className} dark:text-[#dddddd]`}>{ children }</h2>
  );
}