import React, { useState, useEffect } from 'react';
import { AiFillHeart, AiOutlineComment } from 'react-icons/ai';

function BlogContent() {
    const [data, setData] = useState({})

    useEffect(() => {
        fetch('https://dev.to/api/articles?username=tsaxena4k')
            .then((res) => res.json())
            .then((json) => setData(json))
    }, []);

    function blogCard(blog) {
        return (
            <div className="col-sm-12">
                <div class="card mb-3 shadow" data-aos='zoom-in'>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={blog.cover_image} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <a href={blog.url} target="_blank" className="blog-url"><h5 class="card-title">{blog.title}</h5></a>
                                <p class="card-text">{blog.description}</p>
                                <div className="d-flex public-reaction">
                                    <p style={{ marginRight: '10px' }}><AiFillHeart /> {blog.public_reactions_count}</p>
                                    <p><AiOutlineComment /> {blog.comments_count}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="blog-container">
            <div className="container pt-5 pb-5">
                <div className='row'>
                    <div className='col-sm-12 text-center mb-3 daily-dev p-3'><a href="https://app.daily.dev/tsaxena4k"><img src="https://api.daily.dev/devcards/6945bec76d7e4b9c8add1f960029b275.png?r=e43" data-aos='flip-down' width="300" alt="Tushar saxena's Dev Card" /></a></div>
                    {
                        (Object.keys(data).length === 0 && data.constructor === Object) ?
                            null :
                            data.map((value) => {
                                return blogCard(value);
                            })
                    }
                </div>
            </div>
        </div>
    )
}

export default BlogContent
