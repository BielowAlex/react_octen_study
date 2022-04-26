import React from 'react';
import {Outlet} from "react-router-dom";

import Posts from "../../сomponents/Posts/Posts";

const PostPage = () => {
    return (
        <div style={{display:"flex"}}>
            <Posts/>
            <Outlet/>
        </div>
    );
};

export default PostPage;
