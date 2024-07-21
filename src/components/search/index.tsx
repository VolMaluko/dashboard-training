"use client";

import { MdSearch } from "react-icons/md";
import * as S from "./styles";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

interface ISearch {
  placeholder: string;
}

export default function Search({ placeholder }: ISearch) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const { replace } = useRouter();

  const handleSearch = (e: React.ChangeEvent<any>) => {
    const params = new URLSearchParams(searchParams);

    if (e.target.value) {
      params.set(e.target.name, e.target.value);
    } else {
      params.delete(e.target.name);
    }
    replace(`${pathname}?${params}`);
  };

  return (
    <S.Container>
      <MdSearch />
      <S.StyledInput
        placeholder={placeholder}
        onChange={handleSearch}
        name="name"></S.StyledInput>
    </S.Container>
  );
}
