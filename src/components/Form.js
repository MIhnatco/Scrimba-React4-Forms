import React from "react"



export default function Form(){
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        isFriendly: true,
        employment: "", 
        favColor: ""
    })

     
  
    function handleChange(event){
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData, 
                [name] : type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event){
            //prevent from refreshing the page
            event.preventDefault()
            console.log(formData)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text"
                    placeholder="First Name"
                    onChange={handleChange} 
                    name="firstName"
                    value={formData.firstName} />


            <input type='text'
                    placeholder="Last Name"
                    onChange={handleChange}
                    name="lastName"
                    value={formData.lastName} />

            <input type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    value={formData.email} />

            <textarea 
                    placeholder="Comments"
                    onChange={handleChange}
                    value={formData.comments}
                    name="comments" />


            <input type="checkbox"  
                    id='isFriendly'
                    checked={formData.isFriendly}
                    onChange={handleChange}
                    name="isFriendly"
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />
            <br />

            <fieldset>
                <legend>Current employment status</legend>

                <input type='radio'
                        id="unemployed"
                        name="employment"
                        value="unemployed"
                        onChange={handleChange} 
                        checked={formData.employment === "unemployed"}/>
                <label htmlFor="unemployed">Unemployed</label>

                <input type='radio'
                        id="part-time"
                        name="employment"
                        value="part-time"
                        onChange={handleChange} 
                        checked = {formData.employment === 'part-time'}/>
                <label htmlFor="part-time">Part-time</label>

                <input type='radio'
                        id="full-time"
                        name="employment"
                        value="full-time"
                        onChange={handleChange}
                        checked={formData.employment === 'full-time'} />
                <label htmlFor="full-time">Full-time</label>

            </fieldset>

            <br />

            <select id='favColor'
                    value={formData.favColor}
                    name="favColor"
                    onChange={handleChange}
            >
                <option value=''>--Choose--</option>
                <option value='red'>Red</option>
                <option value='orange'>Orange</option>
                <option value='yellow'>Yellow</option>
                <option value='green'>Green</option>
                <option value='blue'>Blue</option>
                <option value='indigo'>Indigo</option>
                <option value='violet'>Violet</option>
            </select>

            <br />
            <br />
            <button>Submit</button>
        </form>
    )
}