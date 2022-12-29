import React from 'react';
import { PostProps, Props } from '..';

export const PostsList = ({ posts }: PostProps) => (
    <ul className="flex flex-col h-[calc(100vh-80px)] overflow-y-scroll space-y-5 p-4">
        {posts.map(({ id, title, body }: Props) => (
            <li key={id} className="shadow-lg p-4 hover:scale-95 transition-all">
                # <span className="font-medium">{id}</span> {title}
                <p className="font-semibold">{body}</p>
            </li>
        ))}
    </ul>
);
