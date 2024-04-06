import React, { useState ,useEffect} from 'react';
import axios from 'axios'
import '../App.css'
import Loader from './loader/Loader';
import RoleAskingPopup from './RoleAskingPopup';

const FileUploadForm = ({setJobList}) => {

    const [file, setFile] = useState(null);
    const [isLoading,setIsLoading] = useState(false);
    const [activePopup,SetActivePopup] = useState(false);
    

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
        event.preventDefault();
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        console.log(file);
        setFile(file);
    };

    const handleDragLeave = (event) => {
        event.preventDefault();
    };

    const uploadFile = async () => {
        if (!file) {
            alert('Please select a file.');
            return;
        }

        try {
            const formData = new FormData();
            formData.append('file', file);
            setIsLoading(true);
            const response = await axios.post('http://localhost:3000/upload/resume', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log(response);

            if(response.status === 200){
                console.log(response.data);
                localStorage.setItem('ResumeId', response.data);
                SetActivePopup(true);
                console.log(activePopup)
            }
            setFile(null);
            setIsLoading(false);

        } catch (error) {
            console.error('Error uploading file:', error);
        }
    }

    const getJobs = async (userRole) => {

        if(userRole === "" || userRole === " "){
            alert("Please Select Role");

        }else{

            SetActivePopup(false);
            setIsLoading(true);
            try {
                const encodedString = userRole.replace(/ /g, '%20');
                const response = await axios.get(`http://localhost:3000/job?role=${encodedString}`);

                if(response.status === 200){
                    console.log(response.data);
                    console.log(typeof(setJobList));
                    setJobList(response.data);

                }
                else{
                    console.log(response);
                }

                setIsLoading(false);

            } catch (error) {
                console.log(error);
            }
            

        }
    }

    useEffect(() => {

        if(isLoading || activePopup){
            document.body.style.overflow = 'hidden'; 
        }
        else{
            document.body.style.overflow = 'auto'; 
        }

    },[isLoading])

    // Call uploadFile when file changes
    useEffect(() => {
        if (file) {
            uploadFile();
        }
    }, [file,]);

    return (
        <div
            className="file-upload-form"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onDragLeave={handleDragLeave}
        >
            <label htmlFor="file" className="file-upload-label">
                <div className="file-upload-design">
                    <svg viewBox="0 0 640 512" height="1em">
                        <path
                            d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
                        ></path>
                    </svg>
                    <p>Drag and Drop</p>
                    <p>or</p>
                    <span className="browse-button hover:bg-primary">Browse file</span>
                </div>
                <input
                    id="file"
                    type="file"
                    onChange={handleFileChange}
                    style={{ display: 'none' }} // Hiding the file input
                />
            </label>

            { isLoading && <Loader />}
            { activePopup && <RoleAskingPopup   getJobs={getJobs} />}
        </div>
    );
};

export default FileUploadForm;
