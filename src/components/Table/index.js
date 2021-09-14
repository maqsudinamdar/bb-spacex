import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import MTable from "@material-ui/core/Table";
import MTableBody from "@material-ui/core/TableBody";
import MTableCell from "@material-ui/core/TableCell";
import MTableContainer from "@material-ui/core/TableContainer";
import MTableHead from "@material-ui/core/TableHead";
import MTableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import './Table.scss';

import { Link } from "react-router-dom";

const useStyles = makeStyles({
    
    table: {
        minWidth: 650,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
        borderRadius: '6px',
        width: '952px',
        height: '676px',
    },    
    status: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        backgroundColor: 'grey',
        borderRadius: 8,
        padding: '3px 10px',
        display: 'inline-block'
    }
      
});

const getProperty = (obj, prop) => {
  var parts = prop.split(".");

  if (Array.isArray(parts)) {
    var last = parts.length > 1 ? parts.pop() : parts;
    var l = parts.length,
      i = 1,
      current = parts[0];

    while ((obj = obj[current]) && i < l) {
      current = parts[i];
      i++;
    }

    if (typeof obj === "object") {
      return obj[last];
    }
    return obj;
  } else {
    throw "parts is not valid array";
  }
};


export default function Table({ data, tableHeaders, tableBodies }) {

    const classes = useStyles();
    
    return (
        <Paper className={classes.root}>
        <MTableContainer className={classes.container}>
            <MTable stickyHeader aria-label="Table sticky table">
            <MTableHead>
                <MTableRow>
                {tableHeaders.map((header, index) => (
                    <MTableCell key={index}>{header}</MTableCell>
                ))}
                </MTableRow>
            </MTableHead>
            <MTableBody>
                {data.map(data => (
                <MTableRow key={data.id}>
                    {tableBodies.map(body =>

                        body !== 'status' ? 
                        (
                            <MTableCell key={body}>{getProperty(data, body)}</MTableCell>
                        ) : 
                        (
                            <MTableCell key={body}>
                                <Typography 
                                    className={classes.status}
                                    style={data.style}
                                >
                                    {data.status}
                                </Typography>
                            </MTableCell>
                        )
                    )}
                </MTableRow>
                ))}
            </MTableBody>
            </MTable>
        </MTableContainer>
        </Paper>
    );
}
