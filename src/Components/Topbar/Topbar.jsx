import React from 'react'
import "./topbar.css"
import NotificationsActiveTwoToneIcon from '@material-ui/icons/NotificationsActiveTwoTone';
import SettingsIcon from '@material-ui/icons/Settings';
import LanguageIcon from '@material-ui/icons/Language';

export const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarwrapper">
                <div className="topLeft">
                    <span className="logo">Rishavadmin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsActiveTwoToneIcon/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <LanguageIcon/>
                        <span className="topIconBadge">2</span>
                        
                    </div>
                    <div className="topbarIconContainer">
                        <SettingsIcon/>
                       
                    </div>
                    <img src="https://lh3.googleusercontent.com/pw/AM-JKLXQN6jaERganu1iNKGAjDi71yahHJhePcu-Ogup3gK5eVTRzIT18DgHkq14BEDPVBv7Isek5hAD5aTpJNm-BpOijG_Sq3rx7TImlhIVgxWp0_B9l9wbeaocFnhgbyiB-UOlz1vTPe4AyrAuyJtHz0e_tgKzl9KJBoqYSTIHXnIPILYmFK94cT8La0oP_8q7CCMQuHlTEemTBP0g6wu8SuAafTg0fJrH1tgR94gpZjL0dWAq3DLW8Jx6YWj2g0FlWBfesrSoVpy8Ll0ReRJR71N9L3nNfG9PWAiE7ofaATrTc6OalyQEg-4iuLMFRMRjXsZp7QojMxObSEQGKQ0Wu6MKGX5R8lXSMhiR57ZbNBWbBRo1sBbq7Nf9vT_-cStKSaZDKc7XNUfPYDsXK3N9_eM0rcsmjl539ZLGsUkuNvJK-c7VaYkuonX4ARvMrSmA0nw0Se_FwatRSOWHBkzWrvSDt1ky2kA82Pkx_k7BzYZ7agJeJ8dS-0zJLlqCJQlQQedm6_nfxVK2aozyS3ZuffBlxRNiwAD10NIHeYEOQLE3bKGOObPM95Fov9DR5clcMnjYCRTzlMZ3Y-EWBk_C596xOtna90xIT5dQc_vCFULIgfibCu8mKg_Kw3UGX7oRHkkREe9nS2SxEUpEKJHQVIcfXdLZJ2apsrXRESlHJob3DZJQuj2ZOdxg8O-xRXI8sewAWwuhKUsVMKWRqn71YxMNby4AI3J2UeeefPTQJMH8WcE=w708-h943-no?authuser=0&authuser=0" alt="" className="topavatar" />
                    
                </div>           
            </div>
            
        </div>
    )
}
