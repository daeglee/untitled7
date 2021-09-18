import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import {DataType} from "./DataType";

export default function ChartEditDialog() {
    const [open, setOpen] = React.useState(false);
    const [maxWidth, setMaxWidth] = React.useState({
        dataType: "CPU", dateType: "second", chartType: "area"
    });

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleSave = () => {
        setOpen(false);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open max-width dialog
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Optional sizes</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        You can set my maximum width and whether to adapt or not.
                    </DialogContentText>
                    <Box
                        noValidate
                        component="form"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            m: "auto",
                            width: "fit-content"
                        }}
                    >
                        <FormControl sx={{ mt: 2, minWidth: 120 }}>
                            <InputLabel htmlFor="max-width">dateType</InputLabel>
                            <Select
                                autoFocus
                                value={maxWidth.dataType}
                                label="dateType"
                            >
                                {Object.keys(DataType).map( dataType =>(
                                 <MenuItem value={dataType}>{dataType}</MenuItem>
                            ))}

                            </Select>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSave}>Save</Button>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
