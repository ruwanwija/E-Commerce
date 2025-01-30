import {Card,CardHeader,CardTitle,CardContent} from '../ui/card';
import { Table,TableHeader,TableRow,TableHead,TableBody,TableCell } from '../ui/table';
import { Button } from '../ui/button';
import { Dialog } from '../ui/dialog';
import { useState } from 'react';
import { AdminOrderDetailsView } from "@/components/admin-view/order-details";
import { useDispatch } from 'react-redux';
import { getAllOrdersForAdmin } from '@/store/admin/order-slice';



function AdminOrdersView() {

    const [openDetailsDialog,setOpenDetailsDialog] = useState(false)
    const {orderList,orderDetails} = useSelector(state=>state.adminOrder)
    const dispatch = useDispatch();

    function handleFetchOrderDetails(getId){
        dispatch(getAllOrdersForAdmin(getId))
    }

    useEffect(()=>{
        dispatch(getAllOrdersForAdmin())
    },[dispatch]) 

    return ( 
        <Card>
                    <CardHeader>
                        <CardTitle>
                            All Orders
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
                                        {
                                    orderList && orderList.length > 0 ?
                                    orderList.map(orderItem=>
                                        <TableRow>
                                        <TableCell>{orderItem?._id}</TableCell>
                                        <TableCell>{orderItem?.orderDate.split("T")[0]}</TableCell>
                                        <TableCell>
                                            <Badge className={`px-1 py-3 ${orderItem?.orderStatus === 'confirmed' ? 'bg-green-500' : orderDetails?.orderStatus === "rejected"
                    ? "bg-red-600"
                    : 'bg-black'}`}>
                                                {orderItem?.orderStatus}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>{`$${orderItem?.totalAmount}`}</TableCell>
                                        <TableCell>
                                            <Dialog open={openDetailsDialog} onOpenChange={(isOpen) => setOpenDetailsDialog(isOpen)}>
                                                <Button onClick={()=>handleFetchOrderDetails(orderItem?._id)}>View Details</Button>
                                                <AdminOrderDetailsView orderDetails={orderDetails}/>
                                            </Dialog>
                                        </TableCell>
                                    </TableRow>                                    
                                    ): null
                                }
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
     );
}

export default AdminOrdersView;