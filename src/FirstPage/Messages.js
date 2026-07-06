import React from "react";
import './App.css';

export default function Messages() {

  function OnHover(e)
  {
 return (
 <div style={{padding: "50px", left: "100px", top:"100px", zIndex:1, position: 'absolute'}}>
  <span>Hello</span>
     </div>
 )
  }
              
  return (
    <div className="wholepage" style={{height:"100%"}}>
      
      <div className="leftside"  style={{ backgroundColor: "#f5f5f5", width: "40%", height:"100%", float:"left"}}>
        
        <div style={{ position: "sticky", marginTop:"-0.6rem"}}>
          <div 
            className="profile"
            style={{ backgroundColor: "#f5f5f5" }}
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
            <div className="tooltip" style={{marginLeft:"40%"}}>
            <img  
              src="./images/team.png"
              style={{
                borderRadius: "100%",
                width: 27,
                height: 27,
                marginLeft: "25%",
                marginBottom: "35%",
              }}
            />
            <span className="tooltiptext">Communities</span> 
            
            </div>

              <div className="tooltip" >
            <img
              src="./images/status.png"
              style={{
                borderRadius: "100%",
                width: 25,
                height: 25,
                marginLeft: 25,
                marginBottom: "20%",
              }}
            />
               <span style={{marginTop:"40px", marginRight:"20px"}} className="tooltiptext">Status</span> 
            </div>

            <div className="tooltip" >
            <img
        
              src="./images/live.png"
              style={{
                borderRadius: "100%",
                width: 25,
                height: 25,
                marginLeft: 25,
                marginBottom: "20%",
              }}
            />
            <span style={{marginTop:"40px", marginRight:50}} className="tooltiptext">Channels</span> 
              </div>

            <img
            className="pic"
              src="./images/new-message.png"
              style={{
                borderRadius: "100%",
                width: 25,
                height: 25,
                marginLeft: 25,
                marginBottom: "2%",
              }}
            />
            <img
            className="pic"
              src="./images/dots.png"
              style={{
                borderRadius: "100%",
                width: 25,
                height: 25,
                marginLeft: 25,
                marginBottom: "2%",
              }}
            />
          </div>

          <div style={{ padding: "10px 0px", backgroundColor: "white" }}>
            <div
              style={{
                backgroundColor: "#f5f5f5",
                height: 38,
              }}
            >
              <img
                className="search-pic"
                src="./images/search.png"
                style={{ width: 17, marginLeft: 10, marginTop: 2, padding: 5 }}
              />
              
              <input
                className="search-input"
                placeholder="Search or start new chat"
                type="text"
                name="search"
                style={{
                  border: "none",
                  width: "80%",
                  height: 25,
                  marginLeft: 20,
                  backgroundColor: "#f5f5f5",
                  borderRadius: 6,
                }}
              />

              <img
                src="./images/sort.png"
                alt="image"
                style={{
                  width: 25,
                  height: 20,
                  marginRight: 10,
                  marginTop: 5,
                  float: "right",
                }}
              />
            </div>
          </div>
        </div>
                  <div>
        <div
          className="chat-item"
          style={{ overflowY:"scroll",  backgroundColor:"white",height:"100vh"}}
        >
          <img src="https://tse4.mm.bing.net/th?id=OIP.etKzbFskRD9IFXTe8bxBsgHaIP&pid=Api&P=0&h=180" style={{
                width: 45,
                height: 45,
                borderRadius: 100,
                marginLeft: 15,
                marginTop: 9,
              }}/>
          <div className="chat-info">
            <p className="chat-name" style={{marginLeft:73,marginTop:"-44px",fontSize:18}}>Papa</p>
            <p style={{color:"green",marginLeft:"27rem",marginTop:"-2.8rem",fontSize:14}}>2:30 PM</p>
            <p style={{marginLeft:73,marginTop:"-15px",fontSize:14,color:"gray",marginTop:-3}}>Send it</p>
            <img src="./images/number-1.png" alt="img" style={{width:20,height:20,float:"right",marginRight:10,marginTop:"-2.4rem"}}/>
            
          </div><hr style={{color:"gray",marginTop:"-0.01rem",width:"99%"}}/>

          <img src="https://wallpapercave.com/wp/wp6974821.jpg" style={{
                width: 45,
                height: 45,
                borderRadius: 100,
                marginLeft: 15,
             
              }}/>
          <div className="chat-info">
            <p className="chat-name" style={{marginLeft:73,marginTop:"-44px",fontSize:18}}>Mummy</p>
            <p style={{color:"green",marginLeft:"27rem",marginTop:"-2.8rem",fontSize:14}}>2:30 PM</p>
            <p style={{marginLeft:73,marginTop:"-15px",fontSize:14,color:"gray",marginTop:-3}}>why?</p>
            <img src="./images/number-1.png" alt="img" style={{width:20,height:20,float:"right",marginRight:10,marginTop:"-2.4rem"}}/>
            
          </div><hr style={{color:"gray",marginTop:"-0.01rem",width:"99%"}}/>

          <img src="https://thumbs.dreamstime.com/b/to-prepare-school-parties-little-girls-often-use-lipstick-mascara-powder-to-do-their-makeup-much-like-their-to-prepare-401775747.jpg" style={{
                width: 45,
                height: 45,
                borderRadius: 100,
                marginLeft: 15,
               
              }}/>
          <div className="chat-info">
            <p className="chat-name" style={{marginLeft:73,marginTop:"-44px",fontSize:18}}>Diksha</p>
            <p style={{color:"green",marginLeft:"27rem",marginTop:"-2.8rem",fontSize:14}}>2:30 PM</p>
            <p style={{marginLeft:73,marginTop:"-15px",fontSize:14,color:"gray",marginTop:-3}}>Radhe radhe</p>
            <img src="./images/number-1.png" alt="img" style={{width:20,height:20,float:"right",marginRight:10,marginTop:"-2.4rem"}}/>
            
          </div><hr style={{color:"gray",marginTop:"-0.01rem",width:"99%"}}/>

          <img src="https://www.bing.com/th/id/OIP.ZSxaUTrxS059U2uhzqsQcQHaEK?w=220&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2https://tse4.mm.bing.net/th/id/OIP.H0xbYSuq1ZOJgaPrgrYfQwHaEo?pid=Api&P=0&h=180https://tse1.mm.bing.net/th/id/OIF.p5Un5r3taTeDrjdOYbezTQ?pid=Api&P=0&h=180" style={{
                width: 45,
                height: 45,
                borderRadius: 100,
                marginLeft: 15,
             
              }}/>
          <div className="chat-info">
            <p className="chat-name" style={{marginLeft:73,marginTop:"-44px",fontSize:18}}>Varsha</p>
            <p style={{color:"gray",marginLeft:"27rem",marginTop:"-2.8rem",fontSize:14}}>2:30 PM</p>
            <img src="./images/tick.png" alt="img" style={{width:18,height:10,marginLeft:"15%",marginBottom:"-0.2%"}}/>
            <p style={{marginLeft:95,marginTop:"-15px",fontSize:14,color:"gray",marginTop:"-16px"}}>What happen?</p>

            
          </div><hr style={{color:"gray",marginTop:"-0.01rem",width:"99%"}}/>

          <img src="https://www.lovesove.com/wp-content/uploads/2021/06/Religious-Quotes-For-Whatsapp-Dp-Lovesove.jpg" style={{
                width: 45,
                height: 45,
                borderRadius: 100,
                marginLeft: 15,
             
              }}/>
          <div className="chat-info">
            <p className="chat-name" style={{marginLeft:73,marginTop:"-44px",fontSize:18}}>Richa di</p>
            <p style={{color:"green",marginLeft:"27rem",marginTop:"-2.8rem",fontSize:14}}>2:30 PM</p>
            <img src="./images/tick.png" alt="img" style={{width:18,height:10,marginLeft:"15%",marginBottom:"-0.2%"}}/>
            <p style={{marginLeft:95,marginTop:"-15px",fontSize:14,color:"gray",marginTop:"-16px"}}>Hello...</p>

            
          </div><hr style={{color:"gray",marginTop:"-0.01rem",width:"99%"}}/>

          <img src="https://tse3.mm.bing.net/th?id=OIP.njFAFTGhRJixnT1vcAQ7MAHaHy&pid=Api&P=0&h=180" style={{
                width: 45,
                height: 45,
                borderRadius: 100,
                marginLeft: 15,
             
              }}/>
          <div className="chat-info">
            <p className="chat-name" style={{marginLeft:73,marginTop:"-44px",fontSize:18}}>Pooja di</p>
            <p style={{color:"green",marginLeft:"27rem",marginTop:"-2.8rem",fontSize:14}}>2:30 PM</p>
            <img src="https://www.citypng.com/public/uploads/small/31623349769rlzuevhbk6tfqdunqsgofkw4730wsm7ed2wfyhai3yoa1oq8cnbpm8ie7z0ybqwlx4ih7hdtyccqpr04urijvuaupqxertihihbn.png" alt="img" style={{width:18,height:15,marginLeft:"15%",marginBottom:"-0.3%"}}/>
            <p style={{marginLeft:95,marginTop:"-15px",fontSize:14,color:"gray",marginTop:"-16px"}}>Holiday?</p>

            
          </div><hr style={{color:"gray",marginTop:"-0.01rem",width:"99%"}}/>

          <img src="https://tse1.mm.bing.net/th?id=OIP.YqY3Rg2vQWD6yu1c2OTFuwHaHa&pid=Api&P=0&h=180" style={{
                width: 45,
                height: 45,
                borderRadius: 100,
                marginLeft: 15,
             
              }}/>
          <div className="chat-info">
            <p className="chat-name" style={{marginLeft:73,marginTop:"-44px",fontSize:18}}>Jatin</p>
            <p style={{color:"green",marginLeft:"27rem",marginTop:"-2.8rem",fontSize:14}}>2:30 PM</p>
            <img src="./images/tick.png" alt="img" style={{width:18,height:10,marginLeft:"15%",marginBottom:"-0.2%"}}/>
            <p style={{marginLeft:95,marginTop:"-15px",fontSize:14,color:"gray",marginTop:"-16px"}}>Party is Tomorrow</p>

            
          </div><hr style={{color:"gray",marginTop:"-0.01rem",width:"99%"}}/>

          <img src="https://tse4.mm.bing.net/th?id=OIP.whWodBKL_kjDzwAQS-WE9QHaI6&pid=Api&P=0&h=180" style={{
                width: 45,
                height: 45,
                borderRadius: 100,
                marginLeft: 15,
             
              }}/>
          <div className="chat-info">
            <p className="chat-name" style={{marginLeft:73,marginTop:"-44px",fontSize:18}}>Tannu</p>
            <p style={{color:"green",marginLeft:"27rem",marginTop:"-2.8rem",fontSize:14}}>2:30 PM</p>
            <img src="https://www.citypng.com/public/uploads/small/31623349769rlzuevhbk6tfqdunqsgofkw4730wsm7ed2wfyhai3yoa1oq8cnbpm8ie7z0ybqwlx4ih7hdtyccqpr04urijvuaupqxertihihbn.png" alt="img" style={{width:18,height:15,marginLeft:"15%",marginBottom:"-0.3%"}}/>
            <p style={{marginLeft:95,marginTop:"-15px",fontSize:14,color:"gray",marginTop:"-16px"}}>How are you?</p>

            
          </div><hr style={{color:"gray",marginTop:"-0.01rem",width:"99%"}}/>

          <img src="https://tse1.mm.bing.net/th?id=OIF.rf0Uu3aqjtD%2f0j%2bqj%2fW0%2fg&pid=Api&P=0&h=180" style={{
                width: 45,
                height: 45,
                borderRadius: 100,
                marginLeft: 15,
               
              }}/>
          <div className="chat-info">
            <p className="chat-name" style={{marginLeft:73,marginTop:"-44px",fontSize:18}}>Diksha</p>
            <p style={{color:"green",marginLeft:"27rem",marginTop:"-2.8rem",fontSize:14}}>2:30 PM</p>
            <p style={{marginLeft:73,marginTop:"-15px",fontSize:14,color:"gray",marginTop:-3}}>What about it?</p>
            <img src="./images/number-1.png" alt="img" style={{width:20,height:20,float:"right",marginRight:10,marginTop:"-2.4rem"}}/>
            
          </div><hr style={{color:"gray",marginTop:"-0.01rem",width:"99%"}}/>
         
              
          <img src="https://tse1.mm.bing.net/th?id=OIP.4sAWYEaE9fELPLusJmInDgHaHa&pid=Api&P=0&h=180" style={{
                width: 45,
                height: 45,
                borderRadius: 100,
                marginLeft: 15,
               
              }}/>
          <div className="chat-info">
            <p className="chat-name" style={{marginLeft:73,marginTop:"-44px",fontSize:18}}>Kirti</p>
            <p style={{color:"green",marginLeft:"27rem",marginTop:"-2.8rem",fontSize:14}}>2:30 PM</p>
            <p style={{marginLeft:73,marginTop:"-15px",fontSize:14,color:"gray",marginTop:-3}}>Hi komal.</p>
            
          </div><hr style={{color:"gray",marginTop:"-0.01rem",width:"99%"}}/>

          <img src="https://tse1.mm.bing.net/th?id=OIP.4sAWYEaE9fELPLusJmInDgHaHa&pid=Api&P=0&h=180" style={{
                width: 45,
                height: 45,
                borderRadius: 100,
                marginLeft: 15,
               
              }}/>
          <div className="chat-info">
            <p className="chat-name" style={{marginLeft:73,marginTop:"-44px",fontSize:18}}>Kirti</p>
            <p style={{color:"green",marginLeft:"27rem",marginTop:"-2.8rem",fontSize:14}}>2:30 PM</p>
            <p style={{marginLeft:73,marginTop:"-15px",fontSize:14,color:"gray",marginTop:-3}}>Hi komal.</p>
            
          </div><hr style={{color:"gray",marginTop:"-0.01rem",width:"99%"}}/>

          <img src="https://tse1.mm.bing.net/th?id=OIP.4sAWYEaE9fELPLusJmInDgHaHa&pid=Api&P=0&h=180" style={{
                width: 45,
                height: 45,
                borderRadius: 100,
                marginLeft: 15,
               
              }}/>
          <div className="chat-info">
            <p className="chat-name" style={{marginLeft:73,marginTop:"-44px",fontSize:18}}>Kirti</p>
            <p style={{color:"green",marginLeft:"27rem",marginTop:"-2.8rem",fontSize:14}}>2:30 PM</p>
            <p style={{marginLeft:73,marginTop:"-15px",fontSize:14,color:"gray",marginTop:-3}}>Hi komal.</p>
            
          </div><hr style={{color:"gray",marginTop:"-0.01rem",width:"99%"}}/>
          
          
          <img src="https://tse1.mm.bing.net/th?id=OIP.Xnh83aiQJRbfSjsR_fG3VwHaGl&pid=Api&P=0&h=180" style={{
                width: 45,
                height: 45,
                borderRadius: 100,
                marginLeft: 15,
               
              }}/>
          <div className="chat-info">
            <p className="chat-name" style={{marginLeft:73,marginTop:"-44px",fontSize:18}}>Pinki</p>
            <p style={{color:"green",marginLeft:"27rem",marginTop:"-2.8rem",fontSize:14}}>2:30 PM</p>
            <p style={{marginLeft:73,marginTop:"-15px",fontSize:14,color:"gray",marginTop:-3}}>How are you?</p>
   
            
          </div>
          

          

          </div>
                    </div>  
      </div>
     
    </div>
  );
}
