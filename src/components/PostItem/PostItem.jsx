import classes from './PostItem.module.css'
const PostItem = () => {

    return (
        <div className={classes.post}>
            <div className={classes.postContent}>
                <strong>Заголовок</strong>
                <div>Описание </div>
            </div>
            <div className={classes.postBtn}>
                <button>Удалить</button>
            </div>
        </div>
    );
};

export default PostItem;