import React from 'react';
import { PostProps } from '..';

export const PostsList = ({ posts }: PostProps) => (
  <ul className='flex flex-col h-[calc(100vh-80px)] overflow-y-scroll space-y-5 p-4'>
    {posts.map(({ id, title, body }: any) => (
      <li key={id}>
        #{id} {title}
        <p>{body}</p>
      </li>
    ))}
  </ul>
);
