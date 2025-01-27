import { DialogContent } from "../ui/dialog";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import CommonForm from "../common/form";
import { useState } from "react";


const initialFormData = {
    status : '',
}
export function AdminOrderDetailsView() {

    const[formData,setFormData] = useState(initialFormData)

    function handleUpdateStatus(event){
        event.preventDefault()
    }
    return ( 
        <DialogContent className="sm:max-w-[600px]">
            <div className="grid gap-6">
                <div className="grid gap-2">
                    <div className="flex mt-6 items-center justify-between">
                        <p className="font-medium">Order ID</p>
                        <Label>123456</Label>
                    </div>
                    <div className="flex mt-2 items-center justify-between">
                        <p className="font-medium">Order Date</p>
                        <Label>123456</Label>
                    </div>
                    <div className="flex mt-2 items-center justify-between">
                        <p className="font-medium">Order Price</p>
                        <Label>$ 5000</Label>
                    </div>
                    <div className="flex mt-2 items-center justify-between">
                        <p className="font-medium">Order Status</p>
                        <Label>In Progress</Label>
                    </div>
                </div>
                <Separator/>
                <div className="grid-gap-4">
                    <div className="grid-gap-2">
                        <div className="font-medium">
                            Order Details
                        </div>
                        <ul className="grid gap-3">
                            <li className="flex items-center justify-between"> 
                                <span>Product One</span>
                                <span>$100</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="grid-gap-4">
                    <div className="grid-gap-2">
                        <div className="font-medium">
                            Shipping Info
                        </div>
                        <div className="grid gap-0.5 text-muted-foreground">
                            <span>John Doe</span>
                            <span>Address</span>
                            <span>City</span>
                            <span>PinCode</span>
                            <span>Phone</span>
                            <span>Notes</span>
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
