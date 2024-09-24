const postDetails=async (pic)=>{
    if(pic===undefined)
        {
            toast({
                title:"Please Select an Image",
                status:"warning",
                duration:2500,
                isClosable:true,
                position:"bottom",
            });
            setLoading(false)
            return;
        }
            console.log(pic.type);
    if(pic.type==="image/jpeg" || pic.type==="image/png")
    {
                const data=new FormData();
                data.append("file",pic);
                data.append("upload_preset","my_chat-app");
                data.append("cloud_name","djmmkgei0");
        try
        {
            const response= await fetch("https://api.cloudinary.com/v1_1/djmmkgei0/image/upload",{
                method:"post",
                body:data,
            });

            const info = await response.json();

            return info.url.toString();
        }
        catch(err)
        {
            console.log(err);
            setLoading(false);
        }
    }
    else
    {
            toast({
                title:pic.type +" is not supported",
                status:"warning",
                duration:2500,
                isClosable:true,
                position:"bottom",
            });
            setLoading(false);
    }
    }

export default postDetails;