'use client'

import { useState } from 'react';
import { debounce } from 'lodash';

export default function useSearch() {
  const [searchValue, setSearchValue] = useState('');

  const searchHandler = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
  }, 500)

  return {
    searchValue,
    searchHandler
  };
}