import { useState } from 'react';
import { Props } from '..';

export const usePagination = (posts: Props[]) => {
    const pageNumbers: number[] = [];
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const totalPosts = posts.length;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const handleCurrentPage = (value: number) => {
        setCurrentPage(value);
    };

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return { pageNumbers, currentPosts, currentPage, handleCurrentPage };
};
