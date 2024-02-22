import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useStoresContext } from "src/context/rootStoreContext";
import postsStore from "src/mobx/stores/postsStore";

const PostsList = observer(() => {
  // const { getPosts3, posts } = postsStore;

  const {
    post: { getPosts3, posts },
  } = useStoresContext();

  useEffect(() => {
    // getPosts1();
    // getPosts2();
    getPosts3();
  }, []);

  // if (posts?.state === "pending") {
  //   return <div>Loading...</div>;
  // }

  // if (posts?.state === "rejected") {
  //   return <div>Error</div>;
  // }

  return posts
    ? posts.case({
        pending: () => <div>Loading...</div>,
        rejected: () => <div>Error</div>,
        fulfilled: (value) => <div>{value[0].body}</div>,
      })
    : null;
  // <div>{[posts?.value[0].body]}</div>;
});

export default PostsList;
