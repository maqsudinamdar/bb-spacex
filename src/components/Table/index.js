import React from 'react'

import MTable from '@mui/material/Table';
import MTableBody from '@mui/material/TableBody';
import MTableCell from '@mui/material/TableCell';
import MTableContainer from '@mui/material/TableContainer';
import MTableHead from '@mui/material/TableHead';
import MTableRow from '@mui/material/TableRow';

import Paper from '@mui/material/Paper';

class Table extends React.Component {


    renderColumn = () => {

        return (
            <MTableHead>
                <MTableRow>
                {this.props.data.columnNames.map((value) => {
                    return <MTableCell align="left">{value}</MTableCell>
                })}
                </MTableRow>
            </MTableHead>
        )
    }

    renderBody = () => {
        <MTableBody>
            {this.props.data.rows.map( (row, index) => (
                <MTableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    {this.prop.data.rowKeys.map( item => (
                        <MTableCell align="right">{row[item]}</MTableCell>
                    ))}
                </MTableRow>
            ))}
        </MTableBody>
    }

    render() {
        return (
            <MTableContainer component={Paper}>
                <MTable sx={{ minWidth: 650 }} aria-label="simple table">
                    { this.renderColumn() }
                    { this.renderBody() }
                </MTable>
            </MTableContainer>
        );
    }
}
    

export default Table;
