import { useState } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { useDispatch } from "react-redux";
import Input from "../../components/input/Input";
import { createMyNewPostAsyncAction } from "../../reduxTools/reducers/getMyPosts/actions";
import styles from "./CreatePost.module.scss";

const CreatePost = () => {
  const dispatch = useDispatch();
  const [images, setImages] = useState<ImageListType>([]);
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
    console.log(e.currentTarget.titleText.value);
    console.log(e.currentTarget.text.value);

    dispatch(createMyNewPostAsyncAction(formData));
  };

  const handleDelete = (e: any) => {
    e.preventDefault();
  };
  return (
    <>
      <form className={styles.formwrapper} onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Title"
          label="Title"
          name={"titleText"}
        />
        <Input type="text" placeholder="Text" label="Text" name={"text"} />

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
                <div key={index} className={styles.image_item}>
                  <img className={styles.image} src={image.dataURL} alt="" />
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
        <Input
          type="text"
          placeholder="Lesson number"
          label="Lesson number"
          name={"lesson_num"}
        />

        <div className={styles.buttons_container}>
          <input
            onClick={handleDelete}
            className={styles.delete_button}
            type="button"
            value="Delete post"
          />
          <div className={styles.cont}>
            <input
              className={styles.reset_button}
              type="reset"
              value="Cancel"
            />

            <button>Add Post</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreatePost;
