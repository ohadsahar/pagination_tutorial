'use client';

import { Pagination } from './Pagination';
import { PostsList } from './PostsList';
import { usePagination } from './hooks/usePagination';

export interface PostProps {
  posts: Props[];
}

export interface Props {
  id: number;
  title: string;
  body: string;
}

export const Posts = ({ posts }: PostProps) => {
  const { pageNumbers, currentPosts, currentPage, handleCurrentPage } =
    usePagination(posts);

  return (
    <>
      <PostsList posts={currentPosts} />
      <Pagination
        currentPage={currentPage}
        pageNumbers={pageNumbers}
        handleCurrentPage={handleCurrentPage}
      />
    </>
  );
};
