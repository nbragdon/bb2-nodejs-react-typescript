import { Table, TableCaption, TableRow, TableCell, TableHead, TableBody } from '@cmsgov/design-system';

export default function Records({ }) {   
    //TODO: Fetch real data 
    const items = [
        {
            id: 1,
            code: '0',
            display: 'Lab tests - other (Medicare fee schedule)',
            value: '$125.98'
        },
        {
            id: 2,
            code: '45385',
            display: 'Local carrier non-durable medical equipment, prosthetics, orthotics, and supplies (DMEPOS) claim',
            value: '$350'
        },
        {
            id: 3,
            code: 'P8D',
            display: 'Endoscopy - colonoscopy',
            value: '$1499.99'
        }
    ]    
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
                    {items.map(item=>(
                        <TableRow key={item.id}>
                            <TableCell stackedTitle="Document title" headers="column_1">
                                {item.code}
                            </TableCell>
                            <TableCell stackedTitle="Description" headers="column_2">
                                {item.display}
                            </TableCell>
                            <TableCell stackedTitle="Year" headers="column_3">
                                {item.value}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};