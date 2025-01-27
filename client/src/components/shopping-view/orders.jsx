import {Card,CardHeader,CardTitle,CardContent} from '../ui/card';
import { Table,TableHeader,TableRow,TableHead,TableBody,TableCell } from '../ui/table';
import { Button } from '../ui/button';
import { Dialog } from '../ui/dialog';
import ShoppingOrderDetailsView from './order-details';
import { useState } from 'react';

function shoppingOrders() {

    const [openDetailsDialog,setOpenDetailsDialog] = useState(false);
    return ( 
        <Card>
            <CardHeader>
                <CardTitle>
                    Order History
                </CardTitle>
            </CardHeader>
            <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Order ID</TableHead>
                                    <TableHead>Order Date</TableHead>
                                    <TableHead>Order Status</TableHead>
                                    <TableHead>Order Price</TableHead>
                                    <TableHead>
                                        <span className='sr-only'>Details</span>
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>1234</TableCell>
                                    <TableCell>1234</TableCell>
                                    <TableCell>1234</TableCell>
                                    <TableCell>1234</TableCell>
                                    <TableCell>
                                        <Dialog open={openDetailsDialog} onOpenChange={setOpenDetailsDialog}>
                                            <Button onClick={()=>setOpenDetailsDialog(true)}>View Details</Button>
                                            <ShoppingOrderDetailsView/>
                                        </Dialog>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
        </Card>
     );
}

export default shoppingOrders;