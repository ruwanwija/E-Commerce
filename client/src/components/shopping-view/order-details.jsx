import { DialogContent } from "../ui/dialog";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import CommonForm from "../common/form";
import { useState } from "react";
import { Badge } from "../ui/badge";
import { useSelector } from "react-redux";

const initialFormData = {
    status : '',
}

function ShoppingOrderDetailsView({orderDetails}) {
    const[formData,setFormData] = useState(initialFormData)
    const user = useSelector((state) => state.auth.user);

    function handleUpdateStatus(event){
        event.preventDefault()
    }
    return ( 
        <DialogContent className="sm:max-w-[600px]">
            <div className="grid gap-6">
                <div className="grid gap-2">
                    <div className="flex mt-6 items-center justify-between">
                        <p className="font-medium">Order ID</p>
                        <Label>{orderDetails?._id}</Label>
                    </div>
                    <div className="flex mt-2 items-center justify-between">
                        <p className="font-medium">Order Date</p>
                        <Label>{orderDetails?.orderData.split('T')[0]}</Label>
                    </div>
                    <div className="flex mt-2 items-center justify-between">
                        <p className="font-medium">Order Price</p>
                        <Label>${orderDetails?.totalAmount}</Label>
                    </div>
                    <div className="flex mt-2 items-center justify-between">
                        <p className="font-medium">Payment Method</p>
                        <Label>{orderDetails?.paymentMethod}</Label>
                    </div>
                    <div className="flex mt-2 items-center justify-between">
                        <p className="font-medium">Payment Status</p>
                        <Label>${orderDetails?.paymentStatus}</Label>
                    </div>
                    <div className="flex mt-2 items-center justify-between">
                        <p className="font-medium">Order Status</p>
                        <Label>
                        <Badge className={`px-1 py-3 ${orderDetails?.orderStatus === 'confirmed' ? 'bg-green-500' : orderDetails?.orderStatus === "rejected"
                    ? "bg-red-600"
                    :'bg-black'}`}>
                                                {orderDetails?.orderStatus}
                                            </Badge>
                           </Label>
                    </div>
                </div>
                <Separator/>
                <div className="grid-gap-4">
                    <div className="grid-gap-2">
                        <div className="font-medium">
                            Order Details
                        </div>
                        <ul className="grid gap-3">
                            {
                                orderDetails?.cartItems && orderDetails?.cartItems.length >0 ?
                                orderDetails.cartItems.map(item=>
                                    <li className="flex items-center justify-between"> 
                                        <span>Title:{item.title}</span>
                                        <span>Quantity:{item.quantity}</span>
                                        <span>Price:${item.price}</span>
                                    </li>
                                ):null
                            }
                        </ul>
                    </div>
                </div>
                <div className="grid-gap-4">
                    <div className="grid-gap-2">
                        <div className="font-medium">
                            Shipping Info
                        </div>
                        <div className="grid gap-0.5 text-muted-foreground">
                            <span>{User.userName}</span>
                            <span>{orderDetails?.addressInfo?.address}</span>
                            <span>{orderDetails?.addressInfo?.city}</span>
                            <span>{orderDetails?.addressInfo?.pincode}</span>
                            <span>{orderDetails?.addressInfo?.phone}</span>
                            <span>{orderDetails?.addressInfo?.notes}</span>
                        </div>
                    </div>
                </div>

                <div>
                    <CommonForm
                    formControls={[
                        {
                            label:"Order Status",
                            name:"status",
                            componentType:"select",
                            options:[
                                {id:"pending",label:"Pending"},
                                {id:"inProcess",label:"InProcess"},
                                {id:"inShipping",label:"In Shipping"},
                                {id:"delivered",label:"Delivered"},
                                {id:"rejected",label:"Rejected"}
                            ],
                        },
                    ]}
                    formData={formData}
                    setFormData={setFormData}
                    buttonText={'Update Order Status'}
                    onSubmit={'handleUpdateStatus'}
                    />
                </div>
            </div>
        </DialogContent>
     );
}

export default ShoppingOrderDetailsView;