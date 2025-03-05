import sendHttpRequest from "../../../http_call/HttpRequest";
import CustomerUrlConfig from "../../../service_url/CustomerUrlConfig";
async function addNewUser(newUser) {
    let response = await sendHttpRequest(
        CustomerUrlConfig.CUSTOMER_SERVICE_URL, //url
        "POST",
        JSON.stringify(newUser) //body
    )
    return response
}
export default addNewUser