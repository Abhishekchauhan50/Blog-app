import {initializeApp} from 'firebase/app'
import { createContext, useContext, useEffect, useState } from 'react'
import {getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import {getFirestore , addDoc, getDocs,doc, deleteDoc, collection} from 'firebase/firestore'
import { getStorage, uploadBytes, ref, getDownloadURL } from 'firebase/storage'


const FirebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY ,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MASSAGEINGSENDER,
    appId:import.meta.env.VITE_APIID
  };

const firebaseContext = createContext()

const firebaseapp = initializeApp(FirebaseConfig)



export const usefirebase  = ()=> useContext(firebaseContext)

const firebaseAuth = getAuth(firebaseapp)
const firebaseDB = getFirestore(firebaseapp)
const firebaseStorage = getStorage()
const googleAuth = new GoogleAuthProvider()


export const FirebaseProvider = (props)=>{
    const [currentUser, setCurrentUser] = useState(null)
    

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
          setCurrentUser(user);
        });
        return () => unsubscribe();
      }, []);
    

    const createUser = async(email, password, displayName )=>{
        try {
            const  userCredential = await createUserWithEmailAndPassword(firebaseAuth,  email, password)
            await updateProfile(userCredential.user, {
                displayName: displayName
            })
        } catch (error) {
            alert('Signup failed');
            throw error;
        }
    }

   
    const loginUser = async(email, password)=>{
        try {
            await signInWithEmailAndPassword(firebaseAuth, email, password)
            alert('Login success');
        } catch (error) {
            alert(' Login failed');
            throw error;
        }
    }

    const googleLogin = async()=>{
        try {
            return await signInWithPopup(firebaseAuth, googleAuth)
            
        } catch (error) {
            alert('Gettting error whilr login google',  error);
            throw error
        }
    }

    const AddBlog = async(title, blogImage , blogText)=>{
        try {
            const imageref =  ref(firebaseStorage, `uploads/image/${Date.now()}-${blogImage.name}`)
            const uploadResult = await uploadBytes(imageref, blogImage)
            const date = new Date()
            return await addDoc(collection(firebaseDB, 'blogList'),{
                title,
                imageUrl: uploadResult.ref.fullPath,
                blogText,
                userEmail: currentUser.email,
                userId : currentUser.uid,
                userName: currentUser.displayName,
                userPhoto: currentUser.photoURL,
                createdData:  date.toDateString()
                
            });

            
            
        } catch (error) {
            alert('Getting error while adding doc ');
            throw error
        }
    }
    
    const getData = async()=>{
        try {
            return await getDocs(collection(firebaseDB, "blogList"));
            
        } catch (error) {
            alert('Getting error while getting doc');
            throw error
        }
    }

    const getImageUrl = async(path)=>{
        try {
          return await getDownloadURL(ref(firebaseStorage , path))  
        } catch (error) {
            alert('Getting error while  loading imageURL');
            throw error
        }
    }

    const deleteBlogPost = async ( userId, docId)=>{
        try {
            if(currentUser.uid == userId){
                await deleteDoc(doc(firebaseDB, 'blogList', docId))
                alert('deleted successfuly')
            }else{
                alert('Not autheried for  deletion')
            }
        } catch (error) {
           alert('Getting errror while deleting Blogpost'); 
           throw error
        }
    }

    const logOutUser = async ()=>{
        try {
            await signOut(firebaseAuth)
            alert('log out successfuly')
        } catch (error) {
            alert('etting error while logout');
            throw error
        }
    }
    

    

    return(
        <firebaseContext.Provider value={{createUser , googleLogin ,currentUser, getData, loginUser , AddBlog , getImageUrl, deleteBlogPost , logOutUser}} >
            {props.children}
        </firebaseContext.Provider>
    )
}