import { Input, Button, Label} from "@headlessui/react"
import search from "./api/search";
import { useState } from "react";
import { Field } from "@headlessui/react";
const SearchPanel = (setFunction) => {
    //setFunction is an object, so we have to access its attribute to get the setItems
    const [searchVal, setSearchVal] = useState("");
    return (
        <div className="flex flex-row gap-2 justify-center">

            <Field>
                <Label className="block mb-2 pt-8 text-xl font-medium text-gray-900 ">Search an user by their first name, last name, or email</Label>

                <Input name="searchKey" className="mr-2 w-9/12 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 "
                    onChange={e => {
                        setSearchVal(e.target.value)
                    }
                    } />
                <Button onClick={() => search(searchVal, setFunction.setFunction)}
                    className=" text-white text-xl bg-green-800 rounded-lg items-center justify-center px-4 w-auto h-12"> Search </Button>

            </Field>

        </div>
    );
};
export default SearchPanel;