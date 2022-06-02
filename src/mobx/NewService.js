import { addDoc, collection , deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";


const NewsApiUrl = `http://api.mediastack.com/v1/news?access_key=${process.env.REACT_APP_NEWS_API_KEY}&categories=health,sports,entertainment,business`

const postsCollectionRef = collection(db, "comment");

class NewService {
    
    get = async () => {
        const options = {
            method: "GET",
        }
     const request = new Request(NewsApiUrl,options);
     const response = await fetch(request);
     //console.log(response.json(), 'Get')
     return response.json();
    }
    post = async (model) => {
        await addDoc(postsCollectionRef, {
          model
       });
    }
    getPost = async () => {
        const data = await getDocs(postsCollectionRef);
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    }
    delete = async (id) => {
        const postDoc = doc(db, "comment", id);
        await deleteDoc(postDoc);
    }
}

export default NewService;