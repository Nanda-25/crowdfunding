function CreateUserForm() {
return (
<div className="form-container">
    <form>
        <div>
            <label htmlFor="username">Username:</label>
            <input 
                type="text" 
                id="username" 
                placeholder="Enter username" 
                />
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input 
                type="email" 
                id="email" 
                placeholder="youremail@email.com" 
            />
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input 
                type="password" 
                id="password" 
            // onChange={handleChange} placeholder="Password" 
            />
        </div>
        <button type="submit" className="btn">
            Sign up!
        </button>
    </form>
</div>
);
}

export default CreateUserForm;