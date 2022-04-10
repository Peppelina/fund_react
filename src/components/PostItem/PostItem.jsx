import classes from './PostItem.module.css'
import MyButton from "../UI/button/MyButton";
import {useNavigate} from "react-router-dom";

const PostItem = ({post, number, removePost}) => {
const navigate = useNavigate()
    return (
        <div className={classes.post}>
            <div className={classes.postContent}>
                <strong>{number}. {post.title}</strong>
                <div>{post.author} </div>
                <div>{post.content} </div>
            </div>
            <div className={classes.postBtn}>
                <MyButton style={ {marginRight: 5 } }
                          onClick={() => navigate(`/posts/${post.id}`)} /*чтоб при нажатии менялся юрл*/
                          >Открыть</MyButton>
                <MyButton onClick={() => removePost(post)}>Удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;