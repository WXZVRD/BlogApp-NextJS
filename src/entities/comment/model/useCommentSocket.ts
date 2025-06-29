'use client';

import { useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

export const useCommentSocket = (postId: number, onNewComment: (comment: any) => void) => {
    useEffect(() => {
        if (!postId) return;

        socket.emit('joinPostRoom', postId);

        socket.on('newComment', onNewComment);

        return () => {
            socket.emit('leavePostRoom', postId);
            socket.off('newComment', onNewComment);
        };
    }, [postId, onNewComment]);
};
