import React, { useEffect, useState } from 'react';
import { Button, Toast, ToastBody, ToastHeader } from 'reactstrap';

const ToastMessage = (props) => {
    const { info, show, hideToastMessage} = props;

    useEffect(() => {
        const duration = 5000;
        const id = setTimeout(() => props.hideToastMessage(), duration);
        return () => clearTimeout(id);
      }, [show]);

    

    return (
        <div style={{position: "relative"}}>
            {/* <Button color="primary" onClick={toggle}>{buttonLabel}</Button>
      <br />
      <br /> */}
            <Toast isOpen={show} style={{position: "fixed", top: 0, right: 0}}>
                <ToastHeader toggle={hideToastMessage}>
                    <img src={`/img/icon/${info.icon}`} style={{ maxWidth: "2rem" }}></img>{info.title}
                </ToastHeader>
                <ToastBody>
                    {info.message}
                </ToastBody>
            </Toast>
        </div>
    );
}

export default ToastMessage;