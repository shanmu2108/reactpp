import Navbar from "./Navbar";

const Notification = () => {
    return ( 
        <div className="notification">
            <div className="not">
                <Navbar />
            </div>
            <div className="fic">
               <div className="colori">
                   Notification</div>
               <div className="sendnot">
                   Send Notification
                 </div>

                 <textarea id="name" rows={10} columns={100}>
                Write your message...
                 </textarea>
                 <button className="butt">Send</button>
            <p className="prev">Previous Notification</p>
            <div className="para">
            <p>12:55pm,Today
		lorem ipsum dolor sit amet,consectetur adipiscing edlit.Mauris non scelerisque malesuada en pellentesque.
		propin pretium sit nibh consequat quisque netus in.ultrices sodales volupat in porta dui nibh consectetur
		mauris.leo sed cum vel egestas at sagittis.quis elit egestas auctor pretium"</p>
		</div>
		
            </div>
        </div>
        
        
     );
}
 
export default Notification;