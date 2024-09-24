// RegisterPage.js
import React, { useState } from 'react';
import './auth.css';
import HomeFooter from '../frontpage/HomeFooter';
import HomeHeader from '../frontpage/HomeHeader';
import { useMediaQuery } from '@chakra-ui/react'
import postDetails from '../imageUpload/postImage';
import axios from 'axios';import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { FaCamera } from "react-icons/fa"; // Import FontAwesome camera icon
import {
  FormControl,
  FormLabel,
  Button,
  useToast,
  Image
} from '@chakra-ui/react'

const Register = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [isMobile] = useMediaQuery("(max-width: 800px)");
  const [pic,setPic]=useState("");
  const [load,setLoad]=useState(false);
  const [formData, setFormData] = useState({
    name: '',
    username:'',
    email: '',
    password: '',
    confirmPassword: '',
  });

// cookies


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => 
  {
    e.preventDefault();
    // Handle form submission here
  };

  const getImage=async(image)=>
  {
    setLoad(true);
      try
      {
        const img= await postDetails(image);
        setPic(img); 
      }
      catch(e)
      {
        toast({
          title: "Image Upload Failed",
          description: `unable to upload the image`,
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top", // You can adjust the position of the toast
        });
      }
      finally
      {
        setLoad(false);
      }
  }

  // Register the user:
  const registerUser=async ()=>
  {
    setLoad(true);
      const userData=
      {
          name:formData.name,
          username:formData.username,
          email:formData.email,
          password:formData.password,
      }
      try
      {
        console.log(formData)
        const response = await axios.post("http://localhost:3000/api/user/register", {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }, {
          headers: {
            'Content-Type': 'application/json',
          }
        });
        if(response.status===201)
        {
          console.log(response)
          // set the cookies
          Cookies.set('email', response.data.email, { expires: 1 }); // Cookie expires in 7 days
          Cookies.set('_id', response.data._id, { expires: 1 }); // Cookie expires in 7 days

          // send the otp message
          toast({
            title: "Otp Sent",
            description: `kindly check your email`,
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top", // You can adjust the position of the toast
          });
          setTimeout(()=>{
            navigate("/register/match-otp");
        
          },2000)
        }
      }
      catch(e)
      {
        toast({
          title: "Upload failed!",
          description: `Unable to Register`,
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top", // You can adjust the position of the toast
        });
      }
      finally
      {
        setLoad(false);
      }
  }
  return (
    <>
    <HomeHeader></HomeHeader>
    <div className="register-container">
      <div className="image-background" style={{display:isMobile?"none":""}}/>
      <div className="form-background">
        <div className="register-card">
        <h2 style={{color:" #FF4C4C"}}>Sweat Share</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* <div className="form-group">
              <label htmlFor="username">username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div> */}

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <FormControl id="pic">
                <FormLabel>Upload Your Picture</FormLabel>
                
                {/* Hidden file input */}
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }} // Hide the input
                  id="file-input"
                  onChange={(e)=>getImage(e.target.files[0])}
                />

                {/* Camera icon that triggers file input */}
                <label htmlFor="file-input" className="camera-icon-label">
                  <FaCamera className="camera-icon" /> {/* Camera icon with animation */}
                </label>
                {/* adding the image upon loading */}
               <Image src={pic}></Image>
              </FormControl>
           </div>
            <Button type="submit" isLoading={load} className="submit-button" onClick={registerUser}>Register</Button>
          </form>
		        <a href="/user/login" style={{color:"rgb(131, 25, 25)",paddingTop:"6px",pointerEvents:"unset",font:"initial"}}>Already have an account?</a>
        </div>
    </div>
    </div>
    <HomeFooter></HomeFooter>
    </>
  );
};

export default Register;
