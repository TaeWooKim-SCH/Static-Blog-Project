import Link from 'next/link';
import { SiGithub, SiNotion, SiVelog } from 'react-icons/si';

export default function AuthorContacts() {
  return (
    <div className='flex space-x-2'>
      <Link href="https://github.com/TaeWooKim-SCH" target='_blank'>
        <SiGithub />
      </Link>
      <Link href="https://tae-woo.notion.site/Front-End-cae878950d69425c97dfc6a80abbf5c5?pvs=4" target='_blank'>
        <SiNotion />
      </Link>
      <Link href="https://velog.io/@zop1234" target='_blank'>
        <SiVelog />
      </Link>
    </div>
  );
}