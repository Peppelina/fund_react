import React from 'react';
import MyButton from "../button/MyButton";
import {getPagesArray} from "../../../utils/pages";

const Pagination = ({totalPages,changePage, page }) => {
    let pagesArray = getPagesArray(totalPages)
    return (
        <div className={'pageWrapper'}>
            {pagesArray.map(p =>
                <MyButton
                    onClick={() => changePage(p)}
                    key={p}
                    active={page === p ? true : false}> {p}</MyButton>)}
        </div>
    );
};

export default Pagination;