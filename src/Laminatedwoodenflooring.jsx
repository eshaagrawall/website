import React from 'react';
import Ldata from './Ldata';
import Lcard from './Lcard';

const Laminatedwoodenflooring = () => {
    return (
        <>
    <div className="my-5">
       
      
    </div>
    <div className="container-fluid mb-5">
        <div className="row">
            <div className="col-10 mx-auto">
                <div className="row gy-6">
                    
                    {
                        Ldata.map((val, ind)=> {
                            return <Lcard key={ind}
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
export default Laminatedwoodenflooring;




