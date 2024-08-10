import React, { useEffect, useState } from 'react'
import './UserProfile.css'

export default function UserProfile() {
    const [userDetail,setUserDetails] = useState({})

    const [password,showpassword] = useState(false)
    const [UserName,showUserName] = useState(false)
    const [Avatar,showAvatar] = useState(false)

    const [oldPassword,setOldpassword] = useState('')
    const [newPassword,setNewPassword] = useState('')

    const [newUserName,setNewUserName] = useState('')
    const [newFirstName,setNewFirstName] = useState('')

    const [newAvatar,setNewAvatar] = useState('')

    // these are just to shoe and hide the  input field
    function hideUserNameandAvatr(){
        showpassword(true)
        showUserName(false)
        showAvatar(false)
    }

    function hidePasswordandAvatar(){
        showUserName(true)
        showAvatar(false)
        showpassword(false)
    }

    function hideUserNameandPassword(){
        showAvatar(true)
        showUserName(false)
        showpassword(false)
    }

    // fetch user details from the Backend
    useEffect(() => {
        const FetchUserDetails = async() => {
            try {
                const token = localStorage.getItem("Accesstoken")

                // console.log(token)

                if(!token){
                    throw new Error("User Must Be logged in to see details of his")
                }

                const response = await fetch('http://localhost:4000/user/',{
                    method : 'GET',
                    headers : {
                        'Authorization' : `Bearer ${token}`
                    }
                })

                if(!response.ok){
                    throw new Error('Reponse Doesnt Received Properly')
                }

                const data = await response.json()
                const result = data?.data
                
                setUserDetails(result)
                console.log(" User Details Data fetched Successfully",result)
                
            } catch (error) {
                console.log('Failed to Fetch User Detail',error)
            }
        }
        
        // FetchUserDetails()   
        // console.log("Name of the user",userDetail?.username)
    },[])

    // Change user password function

    const updatepassword = async() => {
        const token = localStorage.getItem("Accesstoken")

        if(!token){
            throw new Error("User Must Be logged in")
        }

        const response = await fetch('http://localhost:4000/user/change/password',{
            method : 'PUT',
            headers : {
                'Authorization' : `Bearer ${token}`
            },
            body : JSON.stringify({
                oldpassword : oldPassword,
                newpassword : newPassword
            })
        })

        if(!response.ok){
            throw new Error("Failed to update the password of the user")
        }

        console.log("Password Changed Successfull")
    }

    // change User Name and IFrst Name from Backend

    const updateUserName = async() => {
        const token = localStorage.getItem("Accesstoken")

        if(!token){
            throw new Error("User Must Be logged in")
        }

        const response = await fetch('http://localhost:4000/user/change/detail',{
            method : 'PUT',
            headers : {
                'Authorization' : `Bearer ${token}`
            },
            body : JSON.stringify({
                username : newUserName,
                fullName : newFirstName
            })
        })

        if(!response.ok){
            throw new Error("Failed to update the UserName and FirstName of the user")
        }

        console.log("UserName and FirstName Changed Successfull")
    }

     // change User Avatar from Backend

    //  const updateAvatar = async() => {

    //  }

  return (
    <div className='wrapped'>
      <div className='wrapping'>
        <div className='profile'>

                <div className='user-profile'>

                        <div className='userDetail-img'>
                            <img src={userDetail?.avatar} alt='ProfileImage' />
                        </div>

                        <div className='userDetails'>
                            <div className='userDetails-other-part-1'>
                                <label>UserName</label>
                                <p className='user-profile-para'>{userDetail?.username}</p>
                            </div>

                            <div className='userDetails-other-part-2'>
                                <label>Email</label>
                                <p className='user-profile-para'>{userDetail?.email}</p>
                            </div>
                        </div>

                        <div className='userDetails'>
                            <div className='userDetails-other-part-1'>
                                <label>FullName</label>
                                <p className='user-profile-para'>{userDetail?.fullName}</p>
                            </div>

                            <div className='userDetails-other-part-2'>
                                <label>LastName</label>
                                <p className='user-profile-para'>Optional</p>
                            </div>
                        </div>

                </div>

                {/* this div refers for Changing Details > */}

                <div className='Update-details'>

                    <p className='update-details-para' onClick={hideUserNameandAvatr} onDoubleClick={() => showpassword(false)}>Change User Password</p>

                    <p className='update-details-para' onClick={hidePasswordandAvatar} onDoubleClick={() => showUserName(false)}>Change User Detail</p>

                    <p className='update-details-para' onClick={hideUserNameandPassword} onDoubleClick={() => showAvatar(false)}>Change User Avatar</p>
                </div>

                {/* for Taiking entries from the user for Updating  */}
                <div className='user-detail-input'>

                     {password && <div className='password-updation'>
                            <label>Change Password :</label>

                            <input type='text' placeholder='old password' className='inputfield' value={oldPassword} onChange={(e) => setOldpassword(e.target.value)} />

                            <input type='text' placeholder='New password' className='inputfield' value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>

                            <button className='updation-btn' onClick={updatepassword} >Submit</button>
                        </div> }

                     {UserName && <div className='UserName-updation'>
                            <label>Change UserName :</label>

                            <input type='text' placeholder='UserName'  className='inputfield' value={newUserName} onChange={(e) => setNewUserName(e.target.value)}/>

                            <input type='text' placeholder='FirstName' className='inputfield' value={newFirstName} onChange={(e) => setNewFirstName(e.target.value)}/>
                            <button className='updation-btn' onClick={updateUserName}>Submit</button>
                        </div> }

                     {Avatar && <div className='Avatar-updation'>
                            <label>Add New Avatar :</label>
                            <input type='file' className='inputfield' />
                            <button className='updation-btn'>Submit</button>
                        </div> }

                </div>

        </div>
      </div>
    </div>
  )
}
