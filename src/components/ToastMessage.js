import React, { useEffect, useState } from 'react';
import { Button, Toast, ToastBody, ToastHeader } from 'reactstrap';

const ToastMessage = (props) => {
    useEffect(() => {
        const duration = 5000;
        const id = setTimeout(() => props.toggleToastMessage(), duration);
        console.log("entering useeffect for toast")
        return () => clearTimeout(id);
      }, []);

    const { toastTitle, show, toggle } = props;

    return (
        <div>
            {/* <Button color="primary" onClick={toggle}>{buttonLabel}</Button>
      <br />
      <br /> */}
            <Toast isOpen={show}>
                <ToastHeader toggle={toggle}>
                    <img src={`/img/icon/success-2.gif`} style={{ maxWidth: "2rem" }}></img>{toastTitle}
                </ToastHeader>
                <ToastBody>
                    Item Added.
                </ToastBody>
            </Toast>
        </div>
    );
}

export default ToastMessage;