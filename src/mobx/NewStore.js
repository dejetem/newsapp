import { observable, runInAction, action, makeObservable } from 'mobx';
import NewService from './NewService'

class NewStore {
  newData = []
  newsData = []
  commentData = {
    model: []
   };
   status = "initial";

  constructor(){
    makeObservable(this, {
    commentData: observable,
    status: observable,
    newData: observable,
    newsData: observable,
    getNewsAsync: action,
    createCommentAsync: action,
    getCommentAsync: action,
    createCommentAsync: action,
    deleteCommentAsync: action,
    });
    this.newService = new NewService();
  }
 getNewsAsync = async () => {
     try {
         const response = await this.newService.get()
         console.log(response.data)
         /*if (response.status === 200) {*/
             runInAction(() => {
                this.status = "success";
                this.newData = response.data
            })
        /* } */
     } catch (error) {
         runInAction(() => {
            this.status = "error";
         });
     }
 };
 createCommentAsync = async (model) => {
     try {
         const response = await this.newService.post(model);
        /* if (response.status === 201) {*/
             runInAction(() => {
                this.status = "success";
                this.commentData = response.data;
             })
        /* } */
     } catch (error) {
         runInAction(() => {
             this.status = "error";
         });
     }

 };
 
  getCommentAsync = async () => {
     try {
         const response = await this.newService.getPost()
         /*if (response.status === 200) {*/
             runInAction(() => {
                this.status = "success";
                this.newsData = response.data
            })
         /*} */
     } catch (error) {
         runInAction(() => {
             this.status = "error";
         });
     }
 };

    deleteCommentAsync = async (id) => {
     try {
         const response = await this.newService.delete(id);
         /*if (response.status === 204) {*/
             runInAction(() => {
                this.status = "success";
                this.commentData = response.data;
             })
        /* } */
     } catch (error) {
         runInAction(() => {
             this.status = "error";
         });
     }
    }
}



export default new NewStore();

