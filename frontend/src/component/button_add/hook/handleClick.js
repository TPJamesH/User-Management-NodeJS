const handleClick = async (addApiCall, createObjFunc, reloadFunc) => {
    const response = await addApiCall(createObjFunc())
    
    if (response.status == 200) {
        reloadFunc()
    }
}

export default handleClick
//NOTE: THIS HOOK IS NOT BEING USED