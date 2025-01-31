import ProductImageUpload from "@/components/admin-view/image-upload";
import { Button } from "@/components/ui/button";
import { addFeatureImage, getFeatureImage } from "@/store/common-slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { data } from "react-router-dom";


function AdminDashboard() {
    const [imageFile, setImageFile] = useState(null);
    const [uploadedImageUrl, setUploadedImageUrl] = useState("");
    const [imageLoadingState, setImageLoadingState] = useState(false);
    const dispatch = useDispatch();
    const {featureImageList} = useSelector(state=>state.commonFeature)

    function handleUploadFeatureImage(){
        dispatch(addFeatureImage(uploadedImageUrl)).then(data=>{
            console.log(data);
            
        })
    }

    useEffect(()=>{
        dispatch(getFeatureImage())
    },[dispatch])

    return ( 
        <div>
            <ProductImageUpload
            imageFile={imageFile}
            setImageFile={setImageFile}
            uploadedImageUrl={uploadedImageUrl}
            setUploadedImageUrl={setUploadedImageUrl}
            setImageLoadingState={setImageLoadingState}
            imageLoadingState={imageLoadingState}
            isCustomStyling={true}
            //isEditMode={currentEditedId !== null}
          />
          <Button onClick={handleUploadFeatureImage} className="mt-5 w-full">Upload</Button>
        </div>
     );
}

export default AdminDashboard;