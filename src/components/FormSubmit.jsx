export default function FormSubmit() {
    const handleForm = (e) => {
        e.preventDefault() // stops the form from refreshing the page
        const make = e.target.make.value
        const model = e.target.model.value
        const year = e.target.year.value
        alert(`You submitted a ${year} ${make} ${model}`)
    }
    return(
        <>
            <h2>Get values On Form Submit</h2>
            <p>Most of the time, w eonly need the form Values 
                one the form is submitted.
            </p>
            <form onSubmit={handleForm}>
                <label htmlFor="make">Make:</label>
                <input type="text" name="make" />
                <label htmlFor="model">Model:</label>
                <input type="text" name="model" />
                <label htmlFor="year">Year:</label>
                <input type="text" name="year" />
                <input type="submit" value="Save Vehicle" />
            </form>
        </>
    )
}