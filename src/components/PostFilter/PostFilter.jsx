import React from 'react';
import MyInput from "../UI/input/MyInput";
import MySelect from "../UI/MySelect/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.search}
                onChange={(event) => setFilter({...filter, search:event.target.value})}
                placeholder={'Поиск'}
            />
            <MySelect
                defaultValue='Сортировка'
                value={filter.sortBy}
                onChange={sort => setFilter({...filter, sortBy:sort})}
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'content', name: 'По описанию'}
                ]}
            />
        </div>
    );
};

export default PostFilter;