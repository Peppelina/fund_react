import {useMemo} from "react";

export const useSortedPosts = (posts, sortBy) => {
    const sortedPosts = useMemo(() => {
        if (sortBy) {
            const newPosts = [...posts].sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
            return newPosts
        } else return posts
    },
        [sortBy, posts])  // вызовет функцию когда что то изменится в deps

    return sortedPosts
}

export const usePosts = (posts, sortBy, search) => {
    const sortedPosts = useSortedPosts(posts, sortBy)
    const sortedAndFilteredPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(search.toLowerCase())) // вернет те посты которые содержат то что в поисковой строке(инпут)
    }, [search, sortedPosts]) // регаирует на пооисковую строку и на сортированные посты
    return sortedAndFilteredPosts
}