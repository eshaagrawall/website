import React from 'react';
import Wdata from './Wdata';
import Wcard from './Wcard';

const Wallpaper = () => {
    return (
        <>
    <div className="my-5">
       
       <marquee width="100%" direction="right" height="5px"> <h2 className="service">Book Free Online Demo</h2></marquee>
    </div>
    <div className="container-fluid mb-5">
        <div className="row">
            <div className="col-10 mx-auto">
                <div className="row gy-6">
                    
                    {
                        Wdata.map((val, ind)=> {
                            return <Wcard key={ind}
                                imgsrc={val.imgsrc}
                                
                                p={val.p}
                                NavLink={val.NavLink}
                            />
                        })
                    }

                </div>
            </div>   
        </div>
    </div>
        </>
    );
};
export default Wallpaper;