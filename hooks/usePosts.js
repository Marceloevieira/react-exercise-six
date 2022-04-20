import { useState, useEffect } from "react"
import { RedditService } from "../services/RedditService";

export const usePosts = () => {

    const [posts, setPosts] = useState([]);

    const requestPosts = async () => {

        const results = await RedditService.get("javascript");
        
        setPosts(results);
    }

    useEffect(() => {
        requestPosts();
    }, []);

    return posts;
}