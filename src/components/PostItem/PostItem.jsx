import classes from './PostItem.module.css'

const PostItem = ({post, number}) => {

    return (
        <div className={classes.post}>
            <div className={classes.postContent}>
                <strong>{number}. {post.title}</strong>
                <div>{post.body} </div>
            </div>
            <div className={classes.postBtn}>
                <button>Удалить</button>
            </div>
        </div>
    );
};

export default PostItem;