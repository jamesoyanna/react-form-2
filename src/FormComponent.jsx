import React from 'react'

 const FormComponent = (props)=> {
    return (
        <>
        <main>
            <form>
                <input
                    type="text"
                    name="firstName"
                        value={props.data.firstName}
                    placeholder="firstName"
                    onChange={props.handleChange}
                />
                <br />
                <input
                    type="text"
                    name="lastName"
                        value={props.data.lastName}
                    placeholder="lastName"
                    onChange={props.handleChange}
                />
                <br />
                <input
                    type="text"
                    name="age"
                        value={props.data.age}
                    placeholder="age"
                    onChange={props.handleChange}
                />

                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                            checked={props.data.gender === "male"}
                        onChange={props.handleChange}
                    />
            Male
          </label>
                <br />

                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                            checked={props.data.gender === "female"}
                        onChange={props.handleChange}
                    />
            Female
          </label>
                <br />

                <label>
                    <input
                        type="checkbox"
                        name="isVegetable"
                            checked={props.data.isVegetable}
                        onChange={props.handleChange}
                    />
            Vegetables
          </label>

                <label>
                    <input
                        type="checkbox"
                        name="isPepper"
                            checked={props.data.isPepper}
                        onChange={props.handleChange}
                    />
            Pepper
          </label>

                <br />
                <button>Submit</button>
            </form>

            <h4> { props.data.firstName} </h4>
            <h4>{ props.data.lastName} </h4>
            <h4> { props.data.age}</h4>
            <h4>{ props.data.gender}</h4>
            <h4>{ props.data.favCountry}</h4>
                <h4>You selected :{props.data.isVegetable}</h4>
            <br />
            <select
                    value={props.data.favCountry}
                name="favCountry"
                onChange={props.handleChange}
            >
                <option>Please choose a country...</option>
                <option value="naija">Nigeria</option>
                <option value="germane">Germany</option>
                <option value="itly">Italy</option>
                <option value="jand">America</option>
            </select>
            </main>
        </>
    )
}
export default FormComponent;