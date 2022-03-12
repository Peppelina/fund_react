import classes from './PostItem.module.css'
import MyButton from "../UI/button/MyButton";

const PostItem = ({post, number, removePost}) => {

    return (
        <div className={classes.post}>
            <div className={classes.postContent}>
                <strong>{number}. {post.title}</strong>
                <div>{post.body} </div>
            </div>
            <div className={classes.postBtn}>
                <MyButton onClick={() => removePost(post)}>Удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;