"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { toast } from "sonner";

import useAuth from "@/hooks/useAuth";

import { motion } from "framer-motion";

const RegisterForm = () => {
  const router = useRouter();

  const { createUser, updateUser, googleLogin } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const validatePassword = (password) => {
    if (password.length < 6) {
      return "Password must be at least 6 characters.";
    }

    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter.";
    }

    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter.";
    }

    return "";
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    setLoading(true);
    setPasswordError("");

    const form = e.target;

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const photo = form.photo.value.trim();
    const password = form.password.value;

    const validationError = validatePassword(password);

    if (validationError) {
      setPasswordError(validationError);

      toast.error(validationError);

      setLoading(false);

      return;
    }

    try {
      await createUser(email, password);
      await updateUser(name, photo || null);

      toast.success("Account created successfully.");

      form.reset();

      router.push("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setLoading(true);

    try {
      await googleLogin();

      toast.success("Google Sign Up Successful.");

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
            <h2 className=" text-3xl font-black text-slate-900 dark:text-white">
              Create Account
            </h2>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Join DriveFleet and start renting premium cars.
            </p>
          </motion.div>

          <form onSubmit={handleRegister} className="space-y-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label className="mb-2 block text-sm font-medium">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                required
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-slate-300 bg-transparent px-4 py-3 outline-none transition focus:border-blue-600 dark:border-slate-700"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 }}
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
              <label className="mb-2 block text-sm font-medium">
                Photo URL
              </label>

              <input
                type="url"
                name="photo"
                placeholder="https://example.com/photo"
                className="w-full rounded-xl border border-slate-300 bg-transparent px-4 py-3 outline-none transition focus:border-blue-600 dark:border-slate-700"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45 }}
            >
              <label className="mb-2 block text-sm font-medium">Password</label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  placeholder="Enter your password"
                  onChange={(e) =>
                    setPasswordError(validatePassword(e.target.value))
                  }
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

              {passwordError && (
                <p className="mt-2 text-sm font-medium text-red-500">
                  {passwordError}
                </p>
              )}
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Creating Account..." : "Register"}
            </motion.button>

            <div className="relative py-2">
              <div className="absolute left-0 top-1/2 w-full -translate-y-1/2 border-t border-slate-200 dark:border-slate-700"></div>

              <span className="relative mx-auto block w-fit bg-white px-4 text-sm text-slate-500 dark:bg-slate-900 dark:text-slate-400">
                OR
              </span>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={handleGoogleSignUp}
              disabled={loading}
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white px-5 py-3 font-medium transition-all duration-300 hover:border-blue-600 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
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
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-blue-600 transition hover:text-blue-700"
              >
                Login
              </Link>
            </motion.p>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default RegisterForm;
