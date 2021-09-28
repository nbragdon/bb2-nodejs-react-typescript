import { Table, TableCaption, TableRow, TableCell, TableHead, TableBody } from '@cmsgov/design-system';
import axios from 'axios';
import { AnyRecord } from 'dns';
import { useEffect, useState } from 'react';
import dataviewer from './dataviewer';

export type EOBRecord = {
    id: string,
    code: string,
    display: string,
    amount: number
}


export default function Records({ }) {
    const [records, setRecords] = useState<EOBRecord[]>([]);
    
    useEffect(() => {
        fetch('/api/data/benefit')
            .then(res => {
                return res.json();
            }).then(eobData => {
                const records: EOBRecord[] = eobData.entry.map((resourceData: any) => {
                    const resource = resourceData.resource;
                    return {
                        id: resource.id,
                        code: resource.item[0]?.productOrService?.coding[0]?.code,
                        display: resource.item[0]?.productOrService?.coding[0]?.display || 'Unknown Medication',
                        amount: resource.item[0]?.adjudication[7]?.amount?.value
                    }
                });
                console.log(records);
                setRecords(records);
            });
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

                    {records.map(record => {
                        return (
                            <TableRow key={record.id}>
                                <TableCell stackedTitle="Document title" headers="column_1">
                                    {record.code}
                                </TableCell>
                                <TableCell stackedTitle="Description" headers="column_2">
                                    {record.display}
                                </TableCell>
                                <TableCell stackedTitle="Year" headers="column_3">
                                    ${record.amount}.00
                                </TableCell>
                            </TableRow>
                            // Data fields 
                            // entry[0].resource[0].item[0].productOrService.coding.code & entry[0].resource[0].item[0].productOrService.coding.display & entry[0].resource[0].item[0].quantity.value
                            // entry[0].resource[1].item[0].productOrService.coding.code & entry[0].resource[1].item[0].productOrService.coding.display & entry[0].resource[1].item[0].quantity.value
                            // entry[0].resource[2].item[0].productOrService.coding.code & entry[0].resource[2].item[0].productOrService.coding.display & entry[0].resource[2].item[0].quantity.value 
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    );
};