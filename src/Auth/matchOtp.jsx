import axios from "axios";
import { useEffect, useState} from "react";
import { useToast,Button } from "@chakra-ui/react";
import Cookies from "js-cookie";
import HomeHeader from "../frontpage/HomeHeader";
import HomeFooter from "../frontpage/HomeFooter";
import { Skeleton, SkeletonCircle, SkeletonText ,Input} from '@chakra-ui/react';

const MatchOtp=()=>{

    const [isLoaded, setIsLoaded] =useState(false)
    const toast = useToast();
    const [otp,setOtp]=useState();
    const [email,setEmail]=useState();
    const [id,setId]=useState();
  // Function to get a cookie
   const getEmail =async () => {
    const email = Cookies.get('email');
    setEmail(email);

  };
  const getId=async()=>{
    const id= Cookies.get('_id');
    setIsLoaded(!isLoaded);
    setId(id);

  }
  const handleSubmit=async()=>
  {
    try
    {
      const response = await axios.post("http://localhost:3000/api/user/verify-otp", {
        email,
        _id:id,
        otp
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if(response.status=201)
      {
        toast({
          title: "Otp matched",
          description: `Welcome to your home, Gymbro`,
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top", // You can adjust the position of the toast
        });
      }
      else
      {
        toast({
          title: response.data,
          description: `failed`,
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top", // You can adjust the position of the toast
        });
      }
    }
    catch(e)
    {
      toast({
        title: "Otp matching failed",
        description: `Try Again`,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top", // You can adjust the position of the toast
      });
    }
  }
  useEffect(()=>{
    getEmail();
    getId();
  },[])



   return(<>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Skeleton height='40px' isLoaded={isLoaded}>
        <SkeletonCircle size='20' />
            <Input type="password" value={otp} onChange={(e)=>setOtp(e.target.value)}></Input>
        </Skeleton>
        <Button onClick={handleSubmit}>Submit</Button>
    
    </>)
}
export default MatchOtp;