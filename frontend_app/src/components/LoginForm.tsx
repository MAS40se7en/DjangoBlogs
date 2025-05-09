import { loginSchema, type LoginFormValues } from "@/lib/Schema"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Link, useLocation, useNavigate } from "react-router"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { getUsername, signin } from "@/services/apiBlog"
import { toast } from "react-toastify"

const LoginForm = ({
    setIsAuthenticated,
    setUsername,
}: {
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
    setUsername: React.Dispatch<React.SetStateAction<string>>
}) => {
    const [isLoading, setIsLoading] = useState(false)
    const location = useLocation();
    const navigate = useNavigate();

    const form = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    })

    const mutation = useMutation({
        mutationFn: (values: LoginFormValues) => signin(values),
        onSuccess: (response) => {
            localStorage.setItem("access", response.access)
            localStorage.setItem("refresh", response.refresh)
            setIsAuthenticated(true)
            
            getUsername().then(res => setUsername(res.username))
            toast.success("Login successful!")

            const from = location?.state?.from?.pathname || "/";
            navigate(from, { replace: true });
        },
        onError: (err) => {
            toast.error(err.message)
        }
    })

    async function onSubmit(values: LoginFormValues) {
        setIsLoading(true)
        
        mutation.mutate(values)
    }



    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription>Enter your credentials to access your account</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input
                                            className=""
                                            placeholder="JohnDoe"
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="flex items-center justify-between">
                                        <FormLabel>Password</FormLabel>
                                        <Link to="/forgot-password" className="text-sm text-muted-foreground hover:text-primary">
                                            Forgot password?
                                        </Link>
                                    </div>
                                    <FormControl>
                                        <Input placeholder="password" type="password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full" disabled={isLoading}>
                            {isLoading ? "Logging in..." : "Login"}
                        </Button>
                    </form>
                </Form>
                <div className="mt-4">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                        </div>
                    </div>
                    <div className="mt-4 grid gap-2">
                        <Button variant="outline" type="button" className="w-full">
                            Google
                        </Button>
                    </div>
                </div>
                <div className="mt-4 text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Link to="/auth/register" className="font-medium text-primary hover:underline">
                        Sign up
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}


export default LoginForm