import React from 'react'
import { Button, Table } from 'semantic-ui-react'
import '../css/timer.css'

const DataTable = (props) => {
    const {
        small, large,
        header, data, 
        onDelete,
        ...others
    } = props
    const size = small ? 'small' : (large ? 'large' : '') 
    const headerCount = header.length;

    const tblheader = (
        <Table.Row>
            {
                header.map((value, index) => {
                    return (
                        <Table.HeaderCell key={index}>{value}</Table.HeaderCell>
                    )
                })
            }
        </Table.Row>
    )
    const tbldata = data && data.length?
        (data.map((data, index) => {
            return (
                <Table.Row key={data.id}>
                    <Table.Cell>{data.id}</Table.Cell>
                    <Table.Cell>{data.timestamp}</Table.Cell>
                    <Table.Cell>{data.log_type}</Table.Cell>
                    <Table.Cell>
                        <Button color='red'
                        onClick={() => onDelete(data.id)}>Delete</Button>
                    </Table.Cell>
                </Table.Row>
            )
        }) 
        ) :
        (<Table.Row><Table.Cell textAlign='center' colSpan={header.length}>No Data Found</Table.Cell></Table.Row>)
    
    return(
        <Table size={size} unstackable {...others}>
            <Table.Header>
                {tblheader}
            </Table.Header>
            <Table.Body>
                {tbldata}
            </Table.Body>
        </Table>
    )
}

export default DataTable