import sendHttpRequest from "../../../http_call/HttpRequest";
import CustomerUrlConfig from "../../../service_url/CustomerUrlConfig";
//loadUserData is correct
const loadUserData = async () => {
    const response = await sendHttpRequest(CustomerUrlConfig.CUSTOMER_SERVICE_GETALL)
    if (response.status == 200) {
        return response.json;
    } else if (response.status >= 500) {
        return "Server Error"
    } else if (response.status >= 400) {
        return "Client Error"
    }
}


export default loadUserData