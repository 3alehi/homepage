import React from 'react';
interface PostProps{
    Attachedfile : number ,
    Opinion : number ,
    Like : number ,
    Profile : string,
    Name:string,
    title:string,
    desc: string
}
const Post: React.FC<PostProps> = () => {
    return (
        <div>
            
        </div>
    );
};

export default Post;