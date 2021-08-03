import React from 'react';
import BlogContent from '../component/BlogContent';
import Header from '../component/Header';

function Blog() {
    return (
        <>
            <Header route="blogs"/>
            <BlogContent />
        </>
    )
}

export default Blog
