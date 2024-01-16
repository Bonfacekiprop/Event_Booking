import { StyledTitle } from "../assets/Style/Styled";
import React, {useState} from "react";
const Dashboard = () =>{
    // const [searchTerm, setSearchTerm] = useState('');
    // const [searchEvent, setSearchEvent] = useState('[]');

    // const performSearch = () => {
    //     const search = [
    //         // search for event from the database 
    //     ];
    //     setSearchEvent(search)
    // }



    return(
        <div>
     <StyledTitle size={65}>
        Welcome to Event 
      </StyledTitle>
      <input
       type="text"
       value={searchTerm}
       onChange={(e)=> setSearchTerm(e.target.value)}
       placeholder="Search for Event"

      />
      <button onClick={performSearch}> Search</button>
      <div>
    

      </div>
      {
        searchEvent.length > 0 && (
            <div>
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
            <h2>No Event Found</h2>
        )
      }
     </div>
    )


}

export default Dashboard;