import { StyledTitle, searchEven } from "../assets/Style/Styled";
import React, {useState} from "react";
const Dashboard = () =>{
    const [searchTerm, setSearchTerm] = useState('');
    const [searchEvent, setSearchEvent] = useState([]);

    const performSearch = () => {
        const search = [
            // search for event from the database 
            "alan","marry","andrew"
            
        ];
        setSearchEvent(search)
    }



    return(
        <div style={{
            border:" 3px solid green",
            padding: "10px",
            width: "650px",
            backgroundcolor: "transparent",
            height:"360px",
            textDecoration: "none",
            
        }}>
     <StyledTitle size={65}>
        Welcome to Event 
      </StyledTitle>
      
      <input
       type="text"
       value={searchTerm}
       onChange={(e)=> setSearchTerm(e.target.value)}
       placeholder="Search for Event"

      />
      <button  style={
                {
                    textAlign: "center",
                    marginRight: "56px",
   
                }} onClick={performSearch}> Search</button>
      <div>
    

      </div>
    
      {
        searchEvent.length > 0 && (
            <div style={
                {
                    textAlign: "center",
                    marginRight: "56px",
   
                }
            }>
                <h2>Events Available:</h2>
                <ul> 
                    {
                        searchEvent.map((search,index) => (
                            <li key={index}>
                                {search}
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
      }
      {
        searchEvent.length == 0 && (
            <h3>No Event Found</h3>
        )
      }
     </div>
    )


}

export default Dashboard;