import LoginForm from "../components/LoginForm/LoginForm";

function LoginPage() {
    return (
    <div className="page-container">
        <LoginForm />
        <p>Let's change someone's future! <a href="/signup">Sing up here!</a></p>
    </div>
    )
}

export default LoginPage;