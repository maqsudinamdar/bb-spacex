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


export default function Table({ data, tableHeaders, tableBodies, onRowClick, loading }) {

    const classes = useStyles();

    return (

        <MTableContainer className={classes.container}>
            <Paper className={classes.root}>
                <MTable className="table" stickyHeader  aria-label="spanning table">
                    <MTableHead className="table-header">
                        <MTableRow>
                            {tableHeaders.map((header, index) => (
                                <MTableCell key={index}>{header}</MTableCell>
                            ))}
                        </MTableRow>
                    </MTableHead>
                    <MTableBody>
                        {!loading &&
                            (data && data.length > 0 ? 
                                (
                                    <>
                                        {data.map(data => 
                                            (
                                                <tr 
                                                    key={data.id}
                                                    className='table-header'
                                                    onClick={(e) => onRowClick(data.id)}
                                                >
                                                    {tableBodies.map(body =>

                                                        body !== 'status' ? 
                                                        (
                                                            <td 
                                                                key={body}
                                                                className="table-header-cell"
                                                            >
                                                                {getProperty(data, body)}
                                                            </td>
                                                            
                                                        ) : 
                                                        (
                                            
                                                            <MTableCell key={body}>
                                                                <Typography 
                                                                    className={`status ${data.status}`}
                                                                >
                                                                    {data.status}
                                                                </Typography>
                                                            </MTableCell>
                                                        )
                                                    )}
                                                </tr>
                                            )
                                        )}
                                    </>
                                ) : 
                                (
                                    <MTableRow>
                                        <MTableCell align="center" colSpan={tableHeaders.length}>
                                            <Typography >
                                                No result found for the specified filter
                                            </Typography>
                                        </MTableCell>
                                    </MTableRow>
                                )
                            )
                        }
                    </MTableBody>
                </MTable>
            </Paper>
        </MTableContainer>
        
    );
}
