import React from 'react'

export default function Right() {
  return (
    <div className="Right-side"  style={{  width:"60%", float:"right"}} >
     
        <div style={{left:0}}>
       
        <div
            className="Profile2"
            style={{ backgroundColor: "#f5f5f5", marginTop:"-0.6rem",height:"4.5rem"}}
          >
            <img
              src="./images/puppies.jpg"
              style={{
                borderRadius: "100%",
                width: 50,
                height: 50,
                marginLeft: 12,
                marginTop: 5,
              }}
            />
            <p style={{marginLeft:"10%",marginTop:"-5%"}}>Diksha</p>
            <div style={{marginTop:"-1.8rem",display:"flex",justifyContent:"center",marginBottom:"2%"}}>
            <img src='./images/zoom.png' alt='video call' style={{height:30,width:25  ,marginLeft:"73%",marginTop:"-0.7rem"}}/>
            <img src='./images/down-arrow.png' alt='arrow' style={{height:20,width:20,marginTop:"-0.4rem"}}/>
            <img src='./images/search.png' alt='search' style={{height:20,width:20,marginLeft:"5%",marginTop:"-0.4rem"}}/>
            <img src='./images/dots.png' alt='settings' style={{height:25,width:25,marginLeft:"5%",marginTop:"-0.5rem"}}/>
            </div>
            </div>
            {/* <img src='./images/background chat.png' alt='chat background' style={{width:"100%",height:"100vh",marginTop:"-0.91rem",  backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}/> */}
            <div style={{background:`url(https://tse4.mm.bing.net/th?id=OIP.VxbQ3vdRsXfmyR855EJNvwHaNK&pid=Api)`,height:"100vh", width:"100%", marginTop:"-0.9rem",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",position:"relative"}}>
            <center><p style={{border:"1px solid black",marginLeft:"44%",marginRight:"44%",backgroundColor:"#f0f8ff",borderColor:"#f0f8ff",borderRadius:4,color:"gray",fontSize:14,padding:"3px 3px ",marginTop:"-0.7rem"}}> SATURDAY</p></center>
            <p style={{marginLeft:40,backgroundColor:"#f0f8ff",borderColor:"#f0f8ff",borderRadius:4,fontSize:18,padding:"3px 3px ",float:"left"}}> Hey Komal? Is it you?       <p style={{fontSize:9,marginLeft:"80%"}}>9:14 AM</p></p>
            <p style={{marginRight:40,backgroundColor:"#77dd77 ",borderColor:"#77dd77 ",borderRadius:4,fontSize:18,padding:"3px 3px ",float:"right",marginTop:"10%"}}> Oh Diksha! How are you? It’s been a long time.<p style={{fontSize:9,marginLeft:"90%"}}>9:14 AM</p></p>
            <p style={{marginLeft:"5%",backgroundColor:"#f0f8ff",borderColor:"#f0f8ff",borderRadius:4,fontSize:18,padding:"3px 3px ",float:"left",marginTop:"-0.7rem"}}> I am fine, what about you? Yes, we last met during the exams.<p style={{fontSize:9,marginLeft:"92%"}}>9:14 AM</p></p>
            <p style={{marginRight:40,backgroundColor:"#77dd77 ",borderColor:"#77dd77 ",borderRadius:4,fontSize:18,padding:"3px 3px ",float:"right",marginTop:"-0.7rem"}}> I'm good.Well,I started my undergraduate studies in Eco Hons. in Mumbai. <p style={{fontSize:9,marginLeft:"94%"}}>9:14 AM</p></p>
            <p style={{marginLeft:"5%",backgroundColor:"#f0f8ff",borderColor:"#f0f8ff",borderRadius:4,fontSize:18,padding:"3px 3px ",float:"left",marginTop:"-0.7rem"}}> Wow! You finally got to study the subject you loved the most in school.<p style={{fontSize:9,marginLeft:"92%"}}>9:14 AM</p></p>
            <p style={{marginRight:40,backgroundColor:"#77dd77 ",borderColor:"#77dd77 ",borderRadius:4,fontSize:18,padding:"3px 3px ",float:"right",marginTop:"-0.7rem"}}>  That’s nice. I am so happy for you. <p style={{fontSize:9,marginLeft:"86%"}}>9:14 AM</p></p>
            <div
            className="keyboard"
            style={{ backgroundColor:"#f5f5f5",width:"100%",height:80,alignContent:"end",marginTop:"57%"}}
          >
            <img src='./images/happy.png' alt='emojis icon' style={{height:25,width:25,marginLeft:25,marginTop:"0.8rem"}}/>
            <img src='./images/plus.png' alt='plus icon' style={{height:20,width:20,marginLeft:29,marginTop:"0.7rem"}}/>
            <input
                className="search-input"
                placeholder="Type a meassage"
                type="text"
                name="search"
                
                style={{
                  border: "none",
                  width: "75%",
                  height: "8vh",
                  borderRadius: 6,
                  marginTop:"-0.9rem",
                  marginLeft:15,
                  marginBottom:"100%"
                }}
              />
               <img src='./images/microphone-black-shape.png' alt='microphone icon' style={{height:20,width:20,marginLeft:25,marginTop:"0.7rem"}}/>
              
            </div>
          
            </div>
        </div>
      </div>
  )
}
