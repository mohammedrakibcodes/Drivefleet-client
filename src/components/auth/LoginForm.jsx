"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { toast } from "sonner";

import useAuth from "@/hooks/useAuth";

import { motion } from "framer-motion";

const LoginForm = () => {
  const router = useRouter();

  const { loginUser, googleLogin } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const email = form.email.value.trim();
    const password = form.password.value;

    try {
      await loginUser(email, password);

      toast.success("Login successful.");

      form.reset();

      router.push("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);

    try {
      await googleLogin();

      toast.success("Google login successful.");

      router.push("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-slate-50 px-5 py-14 dark:bg-slate-950">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full flex justify-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl dark:border-slate-800 dark:bg-slate-900"
        >
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8 text-center"
          >
            <h1 className="text-3xl font-black text-slate-900 dark:text-white">
              Welcome Back
            </h1>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Login to your DriveFleet account.
            </p>
          </motion.div>

          <form onSubmit={handleLogin} className="space-y-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label className="mb-2 block text-sm font-medium">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-300 bg-transparent px-4 py-3 outline-none transition focus:border-blue-600 dark:border-slate-700"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label className="mb-2 block text-sm font-medium">Password</label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-slate-300 bg-transparent px-4 py-3 pr-12 outline-none transition focus:border-blue-600 dark:border-slate-700"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-blue-600"
                >
                  {showPassword ? (
                    <FaEyeSlash size={18} />
                  ) : (
                    <FaEye size={18} />
                  )}
                </button>
              </div>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Signing In..." : "Login"}
            </motion.button>

            <div className="relative py-2">
              <div className="absolute left-0 top-1/2 w-full -translate-y-1/2 border-t border-slate-200 dark:border-slate-700"></div>

              <span className="relative mx-auto block w-fit bg-white px-4 text-sm text-slate-500 dark:bg-slate-900">
                OR
              </span>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={handleGoogleLogin}
              disabled={loading}
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white px-5 py-3 font-medium transition hover:border-blue-600 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
            >
              <FcGoogle size={22} />
              Continue with Google
            </motion.button>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="pt-2 text-center text-sm text-slate-600 dark:text-slate-400"
            >
              Don't have an account?{" "}
              <Link
                href="/register"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                Register
              </Link>
            </motion.p>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LoginForm;
