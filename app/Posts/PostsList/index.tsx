import React from 'react';
import { PostProps, Props } from '..';

export const PostsList = ({ posts }: PostProps) => (
  <ul className='flex flex-col h-[calc(100vh-80px)] overflow-y-scroll space-y-5 p-4'>
    {posts.map(({ id, title, body }: Props) => (
      <li key={id}>
        #{id} {title}
        <p>{body}</p>
      </li>
    ))}
  </ul>
);
