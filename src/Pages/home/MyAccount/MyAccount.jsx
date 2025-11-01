

function MyAccount({name, dateOfBirth, country}) {
    return (
        <div className="my-account">
            <h1>My Account</h1>

            <p>{name}</p>
            <p>{dateOfBirth}</p>
            <p>{country}</p>
        </div>
    )
}


export default MyAccount