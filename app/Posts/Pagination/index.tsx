import Link from 'next/link';

interface Props {
  pageNumbers: number[];
  currentPage: number;
  handleCurrentPage: (value: number) => void;
}

export const Pagination = ({
  pageNumbers,
  handleCurrentPage,
  currentPage,
}: Props) => (
    <nav className='flex justify-center fixed mx-auto inset-x-0 bottom-0 h-[64px] w-fit mb-2 border-solid border-2 border-cyan-100'>
      <ul className='flex list-none w-fit'>
        {pageNumbers.map((number: number) => (
          <li
            key={number}
            onClick={() => handleCurrentPage(number)}
            className={`flex items-center mt-0 mb-0 p-8 no-underline  hover:bg-cyan-100  ${
              currentPage === number ? 'bg-cyan-100' : 'bg-transparent'
            }`}
          >
            <Link href='#'>{number}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );

