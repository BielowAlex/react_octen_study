import React, {useEffect, useState} from 'react';
import css from "../UserDetails/UserDetails.module.css";
import {useParams} from "react-router-dom";
import {postServices} from "../../Services/post_services";

const PostDetails = () => {
    const [post, setPost] = useState(null);

    const {id} = useParams()

    useEffect(() => {
        postServices.getByID(id).then(({data})=>setPost(data));
    }, [id]);



    return (
        <div>
            {post &&
                <div >
                    <h2>POST-ID:{post.id}</h2>
                    <h2>Title:{post.title}</h2>
                    <p>{post.body}</p>

                </div>
            }

        </div>
    );
};

export default PostDetails;
