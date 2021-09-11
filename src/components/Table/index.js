import React from 'react'

import MTable from '@material-ui/core/Table';
import MTableBody from '@material-ui/core/TableBody';
import MTableCell from '@material-ui/core/TableCell';
import MTableContainer from '@material-ui/core/TableContainer';
import MTableHead from '@material-ui/core/TableHead';
import MTableRow from '@material-ui/core/TableRow';

import Paper from '@material-ui/core/Paper';

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
