import { React, useContext } from "react";
import DataAPI from '../../DataAPI';
import { Context } from "../../Context"
import Dialog from "@mui/material/Dialog";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";

function CustomDialog(props) {
    const context = useContext(Context);
    const dataAPI = new DataAPI();
    const dialogs = dataAPI.getDialogs(context.language);

    return (
        <Dialog open={props.isOpen}>
        <DialogTitle>{props.title}</DialogTitle>
        <DialogContent>
            <DialogContentText>{props.content}</DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={props.closeDialog}>{dialogs.close_label}</Button>
        </DialogActions>
    </Dialog>
    );
}

export default CustomDialog;