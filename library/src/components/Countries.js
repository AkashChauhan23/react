const country = [
    {
        name: "India",
        capital: "Delhi"
    },
    {
        name: "China",
        capital: "Bijing"
    },
    {
        name: "Pakastan",
        capital: "Lahore"
    }
]

function Countries() {

    return (
        <div className="country-dropdown">
            <select
                onChange={(e) => {
                    alert(e.target.value);
                }}
            >
                {
                    country.map((item, index) => {
                        return (
                            <option value={item.name}>{item.name} </option>
                        )
                    })
                }
            </select>
        </div>

    );
};

export default Countries;