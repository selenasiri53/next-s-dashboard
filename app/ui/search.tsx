'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation'; // 2. update URL with search params - usePathname, useRouter
import { useDebouncedCallback } from 'use-debounce'; // wait until the user stops typing to call the server (search)

export default function Search({ placeholder }: { placeholder: string }) { // 1. capture user's input
  const searchParams = useSearchParams();
  const pathname = usePathname(); // update URL ...
  const { replace } = useRouter(); // update URL ...

  // before use run: npm i use-debounce
  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`); // update URL ...
  }, 300);

  // function handleSearch(term: string) {
  //   console.log(`Searching... ${term}`);
  //   const params = new URLSearchParams(searchParams)
  //   if (term) {
  //     params.set('query', term);
  //   } else {
  //     params.delete('query');
  //   }
  //   replace(`${pathname}?${params.toString()}`); // update URL ...
  // }

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange = {(e) => {
          handleSearch(e.target.value); // 1. capture user's input -- onChange function
        }}
        defaultValue={searchParams.get('query')?.toString()} // 3. keeping URL and input value in sync
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
