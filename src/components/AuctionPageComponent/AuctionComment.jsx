import React,{useState,useEffect} from 'react'
import img4 from '../../../public/img_3.png'

export default function AuctionComment({ AuctionItemID }) {
  const [comments,ShowAllComments] = useState([])
  const [CommentUserdetail,setCommentUserDetail] = useState([])
  const [AddComment,setAddComments] = useState('')

  useEffect(()=>{
    const GetAllBidOfaCertainAuctionObject = async() => {
      try {
        const response = await fetch(`http://localhost:4000/comment/auction/${AuctionItemID}`,{
          method : 'GET',
          'Content-Type': 'application/json',
        })

        if(!response.ok){
          throw new Error("Error Occured While fetching Details of the Comments from the User")
        }

        const data = await response.json()

        const result = data?.data

        console.log("result reeived in the Bid Section",result)

        // fetching user dtails alos
        
        const userDetailResponse = async() => {
          try {

             const check = Array.isArray(result)
             console.log("checking if result is array or not",check)

             if(!check){
              throw new Error('Rsult must be array')
             }
             
             const fetchPromises = result.map(async(item) => {
                console.log('Userid in the  bid Section',item?.userId)

                const response = await fetch(`http://localhost:4000/user/finduserbyid/${item?.userId}`,{
                  method : 'GET',
                  headers : {
                    'Content-Type': 'application/json',
                  }
                })

                if(!response.ok){
                  throw new Error("User didint find")
                }

                const data = await response.json()

                const UserResult = data?.data

                console.log("Usr Detail Fetched Successully",UserResult)

                return UserResult 

             })

             const allUserResults = await Promise.all(fetchPromises);

             console.log('all user Result',allUserResults)
             return allUserResults;

          } catch (error) {
            throw new Error("Failed to find the user With the id")
          }
        }

        const  UserResult  =  await userDetailResponse()

        console.log(" final result Response Received of the Comment from the Backend",result)
        // console.log(" final result Response Received of the Comment user from the Backend",UserResult)

        ShowAllComments(result)
        setCommentUserDetail(UserResult)

      }
      catch{
        throw new Error("Failed to get all the comment ")
      }
    }
    GetAllBidOfaCertainAuctionObject()
  },[])

  const AddnewComment = async() => {
    const token = localStorage.getItem('Accesstoken')
    if(!token){
      throw new Error("user Must be Loggedin in order to add new Token")
    }

    console.log("id of Auction item",AuctionItemID)

    const response = await fetch('http://localhost:4000/comment/addComment',{
      method : 'POST',
      headers : {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body : JSON.stringify({
        content : AddComment,
        auctionItemId : AuctionItemID
      })
    })

    if(!response.ok){
      throw new Error("respose is not Valid")
    }

    const body = await response.json()

    console.log("Respose received from backend by Adding New Bid",body)

  }


  return (
    <div className='Auction_comment'>
      <div style={{ display : 'flex', justifyContent : 'space-between'}}>
        <p>Comments : </p>

        <div style={{ display : 'flex'}}>

           <input type='text' style={{ backgroundColor:'var(--background-color)', borderStyle:'none',border:'1px solid var(--Secondary-text-color)',fontSize:'14px', color:'var(--Secondary-text-color)',padding:'0 10px',borderRadius:'2px' }} placeholder='Comment Here' id='Addcomment' value={AddComment} onChange={(e) => setAddComments(e.target.value)} />

           <button className='btn' style={{ cursor : 'pointer',marginRight:'1rem' }} onClick={AddnewComment} >Add Comment:</button>
        </div>

      </div>

      {Array.isArray(CommentUserdetail) && CommentUserdetail.map((item,index) => (
          <div className='Auction-bid-part' key={index}>
          <img src={item?.avatar} alt="Auction_Bid_profile"  className='Auction_img_part'/>
              <div>
                  <p>{item?.username}</p>
                  {Array.isArray(comments) && comments.map((comment,id) => (
                    <p className='auction-para-part-2' key={id}>{comment?.content}</p>
                  ))}
              </div>
          </div>
      ))} 

    </div>
  )
}


