import React from "react";

import "./profile.css";
import Location from "../../components/location";
import ProfileCard from "../../components/profileCard";

const Profile = (props)=>{
    return(
        <div className="profile-page">
            <Location name="Sargytlarym" />
            <div className="profile-cards">
                <ProfileCard 
                    id="1524"
                    taryhy="28.02.2021"
                    sany="20"
                    jemi="200"
                    yagdayy="Gowşuryldy"
                    yagday="2"
                    toleg="Nagt"
                />
                <ProfileCard 
                    id="1524"
                    taryhy="28.02.2021"
                    sany="20"
                    jemi="200"
                    yagdayy="Taýýarlanylýar"
                    yagday="1"
                    toleg="Töleg terminaly"
                />
                <ProfileCard 
                    id="1524"
                    taryhy="28.02.2021"
                    sany="20"
                    jemi="200"
                    yagdayy="Goýbolsun"
                    yagday="-1"
                    toleg="Nagt"
                />
                <ProfileCard 
                    id="1524"
                    taryhy="28.02.2021"
                    sany="20"
                    jemi="200"
                    yagdayy="Garaşylýar"
                    yagday=""
                    toleg="Töleg terminaly"
                />
            </div>
        </div>
    )
}

export default Profile;