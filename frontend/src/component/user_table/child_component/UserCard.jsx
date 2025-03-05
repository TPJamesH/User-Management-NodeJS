//Destructured directly from function parameter
const UserCard = ({ index, item }) => {
    return (
        <div key={index}
            className="
                border p-4 m-1 rounded shadow
                hover:border-blue-500
            ">

            <h2 className="text-lg font-bold">
                {item.firstName + " " + item.lastName}
            </h2>
            <p><b>Email:</b> {item.email}</p>

        </div>
    )
}

export default UserCard
