import { flow, makeAutoObservable, runInAction } from "mobx";
import { PostsList } from "../types";
import API from "../api/index";
import { AxiosResponse } from "axios";
import { IPromiseBasedObservable, fromPromise } from "mobx-utils";

class PostsStore {
  // posts: PostsList = [];
  posts?: IPromiseBasedObservable<PostsList>;
  // isLoading = false;

  constructor() {
    makeAutoObservable(this, {
      // getPosts1: flow.bound,
    });
  }

  getPosts3 = () => {
    this.posts = fromPromise(API.getPostsRequest());
  };

  // *getPosts1() {
  //   try {
  //     this.isLoading = true;
  //     const { data }: AxiosResponse<PostsList> = yield API.getPostsRequest();
  //     this.posts = data;
  //   } catch (error) {
  //     console.warn(error);
  //   } finally {
  //     this.isLoading = false;
  //   }
  // }

  // getPosts2 = async () => {
  //   try {
  //     this.isLoading = true;
  //     const res = await API.getPostsRequest();

  //     runInAction(() => {
  //       this.posts = res;
  //       this.isLoading = false;
  //     });
  //   } catch (error) {
  //     this.isLoading = false;
  //     console.warn(error);
  //   }
  // };
}

export default new PostsStore();
