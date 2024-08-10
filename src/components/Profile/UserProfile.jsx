import React, { useEffect, useState } from 'react'
import './UserProfile.css'

export default function UserProfile() {
    const [userDetail,setUserDetails] = useState({})

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
        
        FetchUserDetails()   
        // console.log("Name of the user",userDetail?.username)
    },[])

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
        </div>
      </div>
    </div>
  )
}
