'use client'

import { useState } from 'react';

export default function useSearch() {
  const [searchValue, setSearchValue] = useState('');

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
  }

  return {
    searchValue,
    searchHandler
  };
}