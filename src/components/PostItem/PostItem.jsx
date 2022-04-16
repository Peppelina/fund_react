import classes from './PostItem.module.css'
import MyButton from "../UI/button/MyButton";
import {useNavigate} from "react-router-dom";

const PostItem = ({post, number, removePost, update}) => {

const navigate = useNavigate()
    return (
        <div className={classes.post}>
            <div className={classes.postContent}>
                <strong>{number}. {post.title}</strong>
                <h3>{post.author} </h3>
                <div>{post.content} </div>
            </div>
            <div className={classes.postBtn}>
                <MyButton style={ {marginRight: 5 } }
                          onClick={() => navigate(`/posts/${post._id}`)} /*чтоб при нажатии менялся юрл*/
                          >Открыть</MyButton>

                <MyButton  style={ {marginRight: 5 } }
                           onClick={() => removePost(post._id)}>Удалить</MyButton>
                <MyButton onClick={() => update(post)}>Редактировать</MyButton>
            </div>
        </div>
    );
};

export default PostItem;