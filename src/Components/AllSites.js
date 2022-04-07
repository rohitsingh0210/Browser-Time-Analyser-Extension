import React, { useState } from "react";
import Site from "./Site";

function AllSites() {
    // let sites = ['whatsapp', 'instagram']
    const [websites, setWebsites] = useState(['whatsapp', 'instagram']);
    const [newWebsite, setNewWebsite] = useState('');

    function handleChange(e){
        setNewWebsite(e.target.value);
    }

    return (
        <div className="AllSites">
            <input value={newWebsite} onChange={handleChange} id="newWebsite" placeholder="Enter website to track"></input>
            <button onClick={()=>{
                setWebsites((prevState)=>{
                    // let newWebsite = document.getElementById('newWebsite').value;
                    // document.getElementById('newWebsite').value = '';
                    console.log(prevState)
                    let tmp = newWebsite;
                    setNewWebsite('')
                    return [tmp, ...prevState]
                })
            }} >Add</button>
            
            {
                websites.map((website, index)=><Site name={website} key={index} />)
            }

            {/* <Site name="whatsapp"></Site>
            <Site name="instagram"></Site> */}
        </div>
    );
}

export default AllSites;
