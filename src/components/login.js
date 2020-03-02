import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import background from './img/wallpaper.jpg';

import { Card, CardImg } from 'reactstrap';

const Login = (props) => {

    return (
        <div className="bg" style={{backgroundImage: `url(./img/wallpaper.jpg)`, height:"100%"}}>
            <div className="contaner">
                <div className="row">
                    <Card className="col-sm-6 offset-3">
                        <CardImg className="mx-auto" top width="100%" src="./img/icon/logo.png" alt="logo" style={{ maxWidth: "15rem" }} />
                        {/* <img src="./img/icon/logo.png" alt="logo" style={{maxWidth:"15rem"}}></img> */}
                    </Card>
                </div>
            </div>
        </div>
    )

}

export default Login;