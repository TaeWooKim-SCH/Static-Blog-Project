import Link from 'next/link';
import { SiGithub, SiNotion, SiVelog, SiInstagram } from 'react-icons/si';

export default function AuthorContacts() {
  return (
    <div className='flex space-x-2'>
      <Link href="https://github.com/TaeWooKim-SCH" target='_blank'>
        <SiGithub className="dark:fill-white" />
      </Link>
      <Link href="https://tae-woo.notion.site/Front-End-cae878950d69425c97dfc6a80abbf5c5?pvs=4" target='_blank'>
        <SiNotion className="dark:fill-white" />
      </Link>
      <Link href="https://velog.io/@zop1234" target='_blank'>
        <SiVelog className="dark:fill-white" />
      </Link>
      <Link href="https://www.instagram.com/w_oovely_" target='_blank'>
        <SiInstagram className="dark:fill-white" />
      </Link>
    </div>
  );
}