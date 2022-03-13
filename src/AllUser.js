import Navbar from "./Navbar";
import pic from './5.jpg'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";

const Allusers = () => {

    const [users, setuser] = useState([])
    useEffect(() => {
        Allusers();
    }, [])

    async function Allusers() {
        //const element = document.querySelector('#post-request-set-headers .article-id');
        const limit = { limit: 50, skip: 0 }
        const headers = {
            authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Nzc2NTMxODEsImRhdGEiOnsiaWQiOiI2MjA3Y2U4ODBlNGFjMGY4MzgzZDkyNGIiLCJlbWFpbCI6InJpY2tAYWRtaW4uY29tIiwicm9sZSI6ImFkbWluIn0sImlhdCI6MTY0NjExNzE4MX0.NqG47ioQdnWCEzTvHfJwls3g6g4iggpR0I72SEVOLfI'
        };
        let response = await axios.post('https://api.playinvicta.com/api/v1/admin/user_list', limit, { headers })
        setuser(response.data.data);
        console.log(users)

        //.then(response => element.innerHTML = response.data.id)

    }
    console.log(users)
    return (

        <div className="all1" >
            <div className="na">
                <Navbar />
            </div>


            <div className="sea">
                <input
                    type="search"
                    placeholder="search"
                    id="search"
                ></input>
                <div className="dum">
                    All users
                </div>
                <div className="user_table">
                    <div className="table">
                        <div className="th serial"></div>
                        <div className="th align name" id="namestyle">Name</div>
                        <div className="th align">Email</div>
                        <div className="th align cr">created on</div>
                        <div className="th action">send notification</div>
                        <div className="th action">Action</div>

                    </div>
                    {users.map((user, index) => (
                        <div className="table row">
                            <div className="tab">
                                <div className="th serial" key={index + 1}>{index+1}</div>
                                <div className="th name">{user.name}</div>
                                <div className="th sa">{user.decrypted_email}</div>
                                <div className="th cr">{moment(user.created_at).format('DD-MM-YYYY h:mm A')}</div>
                                <div className="th action">
                                    <div className="view1" onClick={()=>window.location.href='/Notification'}>send</div>
                                </div>
                                <div className="th action">
                                    <div className="view2" onClick={()=>window.location.href='/last'}>view</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </div>

    );
}

export default Allusers;
