import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import useRefUpdateUser from './hook/useRefUpdateUser';

export default function  UpdateUserModal({ item,reloadFunction,setItems}) {
    let [isOpen, setIsOpen] = useState(false)
    const { userFormRef, submitUser } =  useRefUpdateUser();
    function open() {
        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)
    }

    return (
        <>
         <Button  onClick={open} className="inline-flex mr-2 items-center gap-2 rounded-md bg-blue-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                Edit
            </Button>
            
            <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                            transition
                            className="w-full max-w-md rounded-xl bg-black/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                        >
                            <DialogTitle as="h1" className="text-2xl font-medium text-black">
                                Update user
                            </DialogTitle>

                            <form
                                ref={userFormRef} //all input attributes will be put in here upon submission
                                class="p-4 md:p-5">

                                <div class="grid gap-4 mb-4 grid-cols-2">
                                    <div class="col-span-2 sm:col-span-1">
                                        <label for="firstName" class="block mb-2 text-sm font-medium text-gray-900">First Name</label>
                                        <input type="text" name="firstName" id="firstName" class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type your first name" required="" defaultValue ={item.firstName}/>
                                    </div>
                                    <div class="col-span-2 sm:col-span-1">
                                        <label for="lastName" class="block mb-2 text-sm font-medium text-gray-900">Last Name</label>
                                        <input type="text" name="lastName" id="lastName" class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type your last name" required="" defaultValue ={item.lastName}/>
                                    </div>
                                    <div class="col-span-2">
                                        <label for="balance" class="block mb-2 text-sm font-medium text-gray-900">Balance</label>
                                        <input type="number" name="balance" id="balance" class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" defaultValue ={item.balance}/>
                                    </div>
                                    <div class="col-span-2">
                                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
                                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="YourEmail@gmail.com" required="" defaultValue ={item.email}/>
                                    </div>
                                    {/* <div class="col-span-2 sm:col-span-1">
                                        <label for="category" class="block mb-2 text-sm font-medium text-gray-900">Category</label>
                                        <select id="category" class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                            <option selected="">Select category</option>
                                            <option value="TV">TV/Monitors</option>
                                            <option value="PC">PC</option>
                                            <option value="GA">Gaming/Console</option>
                                            <option value="PH">Phones</option>
                                        </select>
                                    </div> */}
                                    {/* <div class="col-span-2">
                                        <label for="description" class="block mb-2 text-sm font-medium text-gray-900">Product Description</label>
                                        <textarea id="description" rows="4" class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write product description here"></textarea>
                                    </div> */}

                                </div>
                                <Button
                                    className="inline-flex items-center gap-2 rounded-md bg-green-700 py-1.5 px-5 text-md/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700 transform translate-y-6"
                                    onClick={(e) => {
                                        submitUser(e, reloadFunction, item.token,setItems);
                                        close();
                                    }}
                                >
                                    Confirm
                                </Button>

                            </form>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}