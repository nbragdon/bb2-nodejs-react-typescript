import { Table, TableCaption, TableRow, TableCell, TableHead, TableBody } from '@cmsgov/design-system';
import { useEffect, useState } from 'react';
import dataviewer from './dataviewer';


export default function Records({ }) {   
    //const [records, setRecords] = useState<object>();
    //const [records, setRecords] = useState<Record<'prop1'|'prop2'|'prop3',string>>();
    const [records, setRecords] = useState<any>(); 
    //const [records, setRecords] = useState<Record[]>([]);
    useEffect(() => {
        fetch('/api/data/benefit')
        .then(res => {
            return res.json();
        })
        .then(data => {
            //console.log(data);
            setRecords(data);
        })
    }, [])      
    return (
        <div className='full-width-card'>
            <Table className="ds-u-margin-top--2" stackable stackableBreakpoint="md">
                <TableCaption>Medicare claims data</TableCaption>
                <TableHead>
                    <TableRow>
                    <TableCell id="column_1">Code</TableCell>
                    <TableCell id="column_2">Name</TableCell>
                    <TableCell id="column_3">Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                
                    {records.map(record=> { return (
                        <TableRow key={record.id}>
                            <TableCell stackedTitle="Document title" headers="column_1">
                                {record.code}
                            </TableCell>
                            <TableCell stackedTitle="Description" headers="column_2">
                                {record.display}
                            </TableCell>
                            <TableCell stackedTitle="Year" headers="column_3">
                                {record.value}
                            </TableCell>
                        </TableRow>
                        // Data fields 
                        // entry[0].resource[0].item[0].productOrService.coding.code & entry[0].resource[0].item[0].productOrService.coding.display & entry[0].resource[0].item[0].quantity.value
                        // entry[0].resource[1].item[0].productOrService.coding.code & entry[0].resource[1].item[0].productOrService.coding.display & entry[0].resource[1].item[0].quantity.value
                        // entry[0].resource[2].item[0].productOrService.coding.code & entry[0].resource[2].item[0].productOrService.coding.display & entry[0].resource[2].item[0].quantity.value 
                    )})}
                </TableBody>
            </Table>
        </div>
    );
};