import classes from './PostItem.module.css'

const PostItem = (props) => {

    return (
        <div className={classes.post}>
            <div className={classes.postContent}>
                <strong>{props.post.id} {props.post.title}</strong>
                <div>{props.post.body} </div>
            </div>
            <div className={classes.postBtn}>
                <button>Удалить</button>
            </div>
        </div>
    );
};

export default PostItem;