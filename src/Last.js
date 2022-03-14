import Navbar from "./Navbar";
import angle from './angle-left.png';
import { Link,useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Last = () => {
    const [user_details,setuser_details] = useState([])
    const params=useParams();
    useEffect(() => {
        lastuser();
    },[])
    async function lastuser(){
        const headers={
           authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Nzc3NDQ5NzEsImRhdGEiOnsiaWQiOiI2MjA3Y2U4ODBlNGFjMGY4MzgzZDkyNGIiLCJlbWFpbCI6InJpY2tAYWRtaW4uY29tIiwicm9sZSI6ImFkbWluIn0sImlhdCI6MTY0NjIwODk3MX0.Ow8eVdNv7mFC5DCZWl6HTDEUwnkTEiq71tVyTBzJDBk'

        };
        let response = await axios.post('https://api.playinvicta.com/api/v1/admin/user_details',{email:params.email},{headers})
        setuser_details(response.data.data)
    
        console.log(response)
    }
    return (
        <div className="last">
            <div className="leftlast">
                <Navbar />
            </div>
            <div className="rightlast">
                <div className="top">
                    <Link to="/allUsers"><img src={angle} alt="angle" width={10} id="angleleft"></img></Link>

                    <div className="viswa">
                        Back to all users
                    </div>
                </div>

                <div className="secrow">
                    
                        <div id="img1">{user_details.name}</div>
                        <div id="img2">{user_details.decrypted_email}</div>
                        <div></div>
                    
                </div>
                <div className="attitude">
                    Attitude of Gratitude
                </div>
                <div className="answers">
                    Try it answers
                </div>
                <div className="onething">
                    <div id="qw">Episode 1-"try it"Gratitude challenge</div>
                    <div>
                        currently,how do you think you currently spend your 24 hours you have

                    </div>
                    <div>
                        master angular 5 from basics to building an adavance applicaton
                        with frebase firestore as..
                    </div>

                </div>
                <div className="fee">
                    Feedback
                </div>
                <div className="feedbackp">
                    lorem ipsum dolor sit amet,consectetur adipiscing edlit.Mauris non scelerisque malesuada en pellentesque.
                    propin pretium sit nibh consequat quisque netus in.ultrices sodales volupat in porta dui nibh consectetur
                    mauris.leo sed cum vel egestas at sagittis.quis elit egestas auctor pretium"
                </div>

            </div>

        </div>
    );

}

export default Last;