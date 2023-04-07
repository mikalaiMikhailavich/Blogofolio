import { useEffect, useState } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  deleteMyPostAsyncAction,
  editMyPostAsyncAction,
} from "../../reduxTools/reducers/getMyPosts/actions";
import { getPostById } from "../../services/API/dataApi";
import { IPostAPI } from "../../services/types/APIinterface";
import styles from "./EditPost.module.scss";

const EditPost = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [images, setImages] = useState<ImageListType>([]);
  const [post, setPost] = useState({} as IPostAPI);

  const id = location.state;
  useEffect(() => {
    getPostById(id).then((post: IPostAPI) => {
      setPost(post);
    });
  }, [id]);
  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    formData.append("title", e.currentTarget.titleText.value);
    formData.append("image", images[0].file || "emptyFile");
    console.log(JSON.stringify(formData));
    console.log(id);

    dispatch(editMyPostAsyncAction(formData, id));
  };
  // const goHome = () => navigate("/");
  const handleDelete = (e: any) => {
    e.preventDefault();
    dispatch(deleteMyPostAsyncAction(id));
  };
  return (
    <>
      <form className={styles.formwrapper} onSubmit={handleSubmit}>
        <p>
          Title
          <input type={"text"} name={"titleText"} />
        </p>

        <p>
          Text
          <input type={"text"} name={"text"} />
        </p>
        <ImageUploading value={images} onChange={onChange}>
          {({ imageList, onImageUpload, onImageUpdate, onImageRemove }) => (
            <div className={styles.container}>
              <input
                className={styles.image_input}
                type={"button"}
                onClick={onImageUpload}
                value="Upload Image"
              />

              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img className={styles.image} src={post.image} alt="" />
                  <div className={styles.imageRemoveWrapper}>
                    <button
                      className={styles.imageRemove}
                      onClick={() => onImageRemove(index)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
        <p>
          Lesson Number
          <input type={"text"} name={"lesson_num"} />
        </p>
        {/* <p>
          description
          <input type={"text"} name={"description"} />
        </p> */}
        <div className={styles.buttons_container}>
          <input
            onClick={handleDelete}
            className={styles.delete_button}
            type="button"
            value="Delete post"
          />
          <div className={styles.container}>
            <input
              className={styles.reset_button}
              type="reset"
              value="Cancel"
            />

            <button>Edit Post</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditPost;

// import ButtonForm from "../../components/buttons/buttonForm/ButtonForm";
// import Input from "../../components/input/Input";
// import styles from "./CreatePost.module.scss";
// const CreatePost = () => {
//   return (
//     <div className={styles.container}>
//       <form action="">
//         <div className={styles.additionalContainer}>
//           <div className={styles.titleAndUrlContainer}>
//             <Input
//               type="text"
//               placeholder="Your name"
//               label="Name"
//               name={"userName"}
//             />
//             <Input
//               type="text"
//               placeholder="Your name"
//               label="Name"
//               name={"userName"}
//             />
//           </div>
//           <div className={styles.publishAndImageContainer}>
//             <Input
//               type="text"
//               placeholder="Your name"
//               label="Name"
//               name={"userName"}
//             />
//             <Input
//               type="text"
//               placeholder="Your name"
//               label="Name"
//               name={"userName"}
//             />
//           </div>
//         </div>
//         <Input
//           type="text"
//           placeholder="Your name"
//           label="Name"
//           name={"userName"}
//         />
//         <Input
//           type="text"
//           placeholder="Your name"
//           label="Name"
//           name={"userName"}
//         />
//         <div className={styles.buttonsContainer}>
//           <ButtonForm value={"Add Post"} />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreatePost;
