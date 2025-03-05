import sendHttpRequest from "../../../http_call/HttpRequest";
import CustomerUrlConfig from "../../../service_url/CustomerUrlConfig";

async function deleteUser(token) {
    console.log(token)
    let response = await sendHttpRequest(
        CustomerUrlConfig.CUSTOMER_SERVICE_URL + '/' + token, //url
        "DELETE",
       
    )
    return response
}
export default deleteUser