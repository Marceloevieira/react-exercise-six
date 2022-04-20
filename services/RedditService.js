
export class RedditService {

    static async get(tag) {
       
        try {
            const responseJson = await fetch(`https://reddit.com/r/${tag}.json`).then((res) => res.json());

            return responseJson.data.children;
        } catch (error) {
            throw error;
        }
    }
}