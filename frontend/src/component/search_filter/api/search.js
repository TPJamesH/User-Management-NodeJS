import sendHttpRequest from "../../../http_call/HttpRequest";
import CustomerUrlConfig from "../../../service_url/CustomerUrlConfig";
const search = async (searchKey, setFunction) => {
    console.log(searchKey);
    let instruction = ` `;
    if (searchKey.length != 0) {
        instruction = `${CustomerUrlConfig.CUSTOMER_SEARCH}/${searchKey}`
    }
    else {

        instruction = `${CustomerUrlConfig.CUSTOMER_SHOWBYPAGE + `?pageNo=${0}&pageSize=${5}`
            }`
    }
    let response = await sendHttpRequest(instruction)

    if (response.status == 200 && response.json != null) {
        console.log(response)
        let arr = response.json.customers
        let i = 0
        arr.forEach((element) => {
            element.token = response.json.tokens[i]
            i++;
        });
        setFunction(arr);
    } else if (response.status >= 500) {
        return "Server Error"
    } else if (response.status >= 400) {
        return "Client Error"
    }


}
export default search