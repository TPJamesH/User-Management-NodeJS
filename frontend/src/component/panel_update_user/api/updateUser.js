import sendHttpRequest from "../../../http_call/HttpRequest";
import CustomerUrlConfig from "../../../service_url/CustomerUrlConfig";

async function updateUser(updateUser,token) {
    let response = await sendHttpRequest(
        CustomerUrlConfig.CUSTOMER_SERVICE_URL + '/' + token, //url
        "PUT",
        JSON.stringify(updateUser) //body
    )
    return response
}
export default updateUser