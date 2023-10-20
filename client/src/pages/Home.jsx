import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import { Button, Upload } from "antd";
// import "antd/dist/antd.css"



const Home = () => {
    const [file, setFile] = useState('');
    const [image, setImage] = useState([]);

    const handleUpload = (event) => {
        // event.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        axios.post("http://localhost:5000/upload", formData)
            .then(res => console.log("res", res))
            .catch(err => console.log(err));
        // setImage(file)
        // console.log(image);

    }
    useEffect(() => {
        axios.get("http://localhost:5000/Allfiles")
            .then(res => setImage(res.data[0].image))
            // .then(res=> console.log(res))
            .catch(err => console.log(err));
    }, [])
    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/upload/${id}`)
            .then(res => console.log(res))
            // .then(res=> console.log(res))
            .catch(err => console.log(err));
    }

    return (
        <>

            <div className=' d-flex flex-col content-center items-center'>
                <div>

                    <input type="file" name="" id="" onChange={(e) => setFile(e.target.files[0])} />
                    <button onClick={handleUpload}>Upload</button>

                </div>
                <Upload.Dragger
                 action={"http://localhost:3000/"}
                 multiple
                 listType='picture'
                 >
                    <Button className=' border-1 border-slate-500 border-dotted p-20'>Drag YOur FIle here</Button>
                </Upload.Dragger>

                <div className='h-14 w-72  border-1 border-red-500 rounded-lg mt-2'>
                    <img src={`http://localhost:3000/Images/`+ image} alt="" />
                </div>

            </div>


        </>
    )
}

export default Home