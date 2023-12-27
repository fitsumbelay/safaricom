import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { createUser } from "../_actions/user-action"


export function NewUser({shop_id}) {
    console.log("shop_id", shop_id);
    const  handleFormWithShopId = createUser.bind(null, shop_id)
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button >Add User</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when youre done.
          </DialogDescription>
        </DialogHeader>
        <form action={handleFormWithShopId}>

        <div className="grid gap-4 py-4">
          <div className="space-y-3">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" name="name" className="col-span-3" />
          </div>
          <div className="space-y-3">
            <Label htmlFor="username" className="text-right">
              Phone
            </Label>
            <Input id="username" name="phone" className="col-span-3" />
          </div>

          <div className="space-y-3">
            <Label htmlFor="username" className="text-right">
              User Id
            </Label>
            <Input id="username" name="user_id"  className="col-span-3" />
          </div>

          <div className="space-y-3">
            <Label htmlFor="username" className="text-right" >
              Start Date
            </Label>
            <Input id="username" name="start_date" placeholder="Year-Month-Day"  className="col-span-3" />
          </div>

          <div className="space-y-3">
            <Label htmlFor="username" className="text-right">
              Type
            </Label>
            <Select name="user_type" >
               
                  <SelectTrigger>
                    <SelectValue placeholder="Select a user type" />
                  </SelectTrigger>
                
                <SelectContent>
                  <SelectItem value="dsa">DSA</SelectItem>
                  <SelectItem value="ba">BA</SelectItem>
                  <SelectItem value="dsp">DSP</SelectItem>
                </SelectContent>
              </Select>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
