import React from 'react';
import Sdata from './Sdata';
import Card from './Card';

const Service = () => {
    return (
        <>
    <div className="my-5">
        
        <h1 className="text-center">Our services</h1><br/>
       <marquee width="100%" direction="right" height="5px"> <h2 className="service">Book Free Online Demo</h2></marquee>
    </div>
    <div className="container-fluid mb-5">
        <div className="row">
            <div className="col-10 mx-auto">
                <div className="row gy-6">
                    
                    {
                        Sdata.map((val, ind)=> {
                            return <Card key={ind}
                                imgsrc={val.imgsrc}
                                title={val.title}
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
export default Service;