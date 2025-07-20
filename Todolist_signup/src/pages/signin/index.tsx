"use client";

import { useForm } from "react-hook-form";
import LoginLayout from "@/layouts/auth";
import styles from "@/styles/login/index.module.scss";
import Link from "next/link";

type LoginFormInputs = {
  email: string;
  password: string;
};

const onSubmit = (data: LoginFormInputs) => {
  console.log("Form data:", data);
  // Xử lý logic đăng nhập tại đây...
};

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  return (
    <LoginLayout>
      {/* Form đăng nhập */}
      <div className={styles.loginForm}>
        <div className={styles.div}>
          <div className={styles.wrapper}>
            <div className={styles.text2}>Sign in</div>
            <form onSubmit={handleSubmit(onSubmit)}>
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

              <div className={styles.inputGroup2}>
                <label>Password</label>
                <input
                  className={styles.text5}
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Vui lòng nhập mật khẩu",
                    minLength: {
                      value: 6,
                      message: "Mật khẩu phải có ít nhất 6 ký tự",
                    },
                    maxLength: {
                      value: 255,
                    },
                    validate: (value) =>
                      !/\s/.test(value) || "Mật khẩu không được chứa dấu cách",
                  })}
                />
                {errors.password && (
                  <p className={styles.error}>{errors.password.message}</p>
                )}
              </div>

              <button type="submit" className={styles.submitButton}>
                <div className={styles.text10}> SIGN IN </div>
              </button>
              <div className={styles.authExtras}>
                {/*<div className={styles.forgot}>Forgot Password?</div>*/}
                <div className={styles.frame}>
                  <div className={styles.text3}> Don’t have an account?</div>
                  <div className={styles.signup}>
                    <Link href = "/signup" className="underline">
                    <b>SIGN UP</b>
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
