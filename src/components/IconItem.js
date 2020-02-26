import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Label, 
    Input
} from 'reactstrap';



const IconItem = (props) => {
    const iconMapper = props.icons.map((item, i) => {
        return <span key={i}>
            <Label htmlFor="iconSelect" style={{ "margin": ".8rem" }}>
                <img src={`/img/icon/${props.section}/${item}`} style={{ maxWidth: "3rem" }}></img>
            </Label>
            <Input type="radio" name="iconSelect" id="iconSelect" style={props.radioStyle} onChange={props.handleChangeIcon} value={i}>
            </Input>
        </span>
    })

    return <div>
        {iconMapper}
    </div>
    
}

export default IconItem;