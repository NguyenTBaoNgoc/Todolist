"use client";

import { useForm } from "react-hook-form";
import LoginLayout from "@/layouts/auth";
import styles from "@/styles/login/index.module.scss";
import Link from "next/link";

type SignUpFormInputs = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
};

const onSubmit = (data: SignUpFormInputs) => {
    console.log("Form data:", data);
    // Xử lý logic đăng ký ở đây...
};

export default function SignUpPage() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<SignUpFormInputs>();

    const password = watch("password");

    return (
        <LoginLayout>
            <div className={styles.loginForm}>
                <div className={styles.div}>
                    <div className={styles.wrapper}>
                        <div className={styles.text2}>Sign up</div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* User name */}
                            <div className={styles.inputGroup1}>
                                <label>User name</label>
                                <input
                                    className={styles.text5}
                                    type="text"
                                    placeholder="Enter your user name"
                                    {...register("username", {
                                        required: "Vui lòng nhập tên",
                                        maxLength: {
                                            value: 10,
                                            message: "Tên không vượt quá 10 ký tự",
                                        },
                                    })}
                                />
                                {errors.username && (
                                    <p className={styles.error}>{errors.username.message}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div className={styles.inputGroup1}>
                                <label>Email</label>
                                <input
                                    className={styles.text5}
                                    type="email"
                                    placeholder="Enter your email"
                                    {...register("email", {
                                        required: "Vui lòng nhập email",
                                        maxLength: {
                                            value: 255,
                                            message: "Email không vượt quá 255 ký tự",
                                        },
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                                            message: "Email phải là gmail hợp lệ",
                                        },
                                        validate: (value) =>
                                            !/\s/.test(value) || "Email không được chứa dấu cách",
                                    })}
                                />
                                {errors.email && (
                                    <p className={styles.error}>{errors.email.message}</p>
                                )}
                            </div>

                            {/* Password */}
                            <div className={styles.inputGroup2}>
                                <label>Password</label>
                                <input
                                    className={styles.text5}
                                    type="password"
                                    placeholder="Enter your password"
                                    {...register("password", {
                                        required: "Vui lòng nhập mật khẩu",
                                        minLength: {
                                            value: 8,
                                            message: "Mật khẩu phải có ít nhất 8 ký tự",
                                        },
                                        maxLength: {
                                            value: 15,
                                            message: "Mật khẩu không vượt quá 15 ký tự",
                                        },
                                        validate: (value) =>
                                            !/\s/.test(value) || "Mật khẩu không được chứa dấu cách",
                                    })}
                                />
                                {errors.password && (
                                    <p className={styles.error}>{errors.password.message}</p>
                                )}
                            </div>

                            {/* Confirm Password */}
                            <div className={styles.inputGroup2}>
                                <label>Confirm Password</label>
                                <input
                                    className={styles.text5}
                                    type="password"
                                    placeholder="Re-enter your password"
                                    {...register("confirmPassword", {
                                        required: "Vui lòng xác nhận mật khẩu",
                                        validate: (value) =>
                                            value === password || "Mật khẩu không khớp",
                                    })}
                                />
                                {errors.confirmPassword && (
                                    <p className={styles.error}>
                                        {errors.confirmPassword.message}
                                    </p>
                                )}
                            </div>

                            <button type="submit" className={styles.submitButton}>
                                <div className={styles.text10}> SIGN UP </div>
                            </button>
                            <div className={styles.authExtras}>
                                <div className={styles.frame}>
                                    <div className={styles.text3}> Already have an account?</div>
                                    <div className={styles.signup}>
                                        <Link href="/login" className="underline">
                                            <b>SIGN IN</b>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </LoginLayout>
    );
}
