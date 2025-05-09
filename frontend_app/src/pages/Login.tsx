import LoginForm from "@/components/LoginForm"

const Login = ({
  setUsername,
  setIsAuthenticated
}: {
  setUsername: React.Dispatch<React.SetStateAction<string>>,
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <>
        <LoginForm setUsername={setUsername} setIsAuthenticated={setIsAuthenticated} />
    </>
  )
}

export default Login