import ButtonAdd from "../button_add/ButtonAdd";
import InputField from "../input_field/InputField";
import useRefNewUser from "./hook/useRefNewUser";
const UserPanel = ({ reloadFunction }) => {

    const { userFormRef, submitUser } = useRefNewUser();

    return (
        <div>
            <form ref={userFormRef} //all input attributes will be put in here upon submission
                onSubmit={(e) => submitUser(e, reloadFunction)}
                className="flex flex-row gap-2"
            >
                <InputField
                    attrName="firstName"
                    type="text"
                    placeholder="First Name"
                />
                <InputField
                    attrName="lastName"
                    type="text"
                    placeholder="Last Name"
                />
                <InputField
                    attrName="email"
                    type="email"
                    placeholder="Email"
                />
                <InputField
                    attrName="balance"
                    type="number"
                    placeholder="Balance"
                />
                <ButtonAdd
                    buttonLabel={"Add Product"}
                />
            </form>
        </div>
    );
};
export default UserPanel;