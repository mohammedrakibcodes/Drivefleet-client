"use client";

import { toast } from "sonner";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button, Modal } from "@heroui/react";

import ThemeToggle from "./ThemeToggle";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Explore Cars",
    href: "/explore-cars",
  },
  {
    name: "Add Car",
    href: "/add-car",
  },
  {
    name: "My Bookings",
    href: "/my-bookings",
  },
];

export default function Navbar() {
  const user = null;

  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    try {
      toast.success("Logged out successfully");
    } catch {
      toast.error("Logout failed");
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/60 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80 ">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="group">
          <div className="flex items-center gap-3">
            <div className="flex flex-col leading-none">
              <h1 className="text-2xl font-black tracking-tight text-blue-600 dark:text-blue-500">
                DriveFleet
              </h1>

              <span className="text-xs font-medium tracking-[0.25em] uppercase text-slate-500 dark:text-slate-400">
                Premium Car Rental
              </span>
            </div>
          </div>
        </Link>

        <LayoutGroup>
          <ul className="hidden items-center gap-2 rounded-full border border-gray-200 bg-gray-50 p-2 dark:border-slate-700 dark:bg-slate-900 lg:flex">
            {navLinks.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <li key={item.href} className="relative">
                  <Link
                    href={item.href}
                    className="relative flex items-center justify-center px-5 py-2.5"
                  >
                    {active && (
                      <motion.div
                        layoutId="navbar-pill"
                        className="absolute inset-0 rounded-full bg-blue-600 shadow-lg shadow-blue-500/20"
                        transition={{
                          type: "spring",
                          stiffness: 450,
                          damping: 35,
                        }}
                      />
                    )}

                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className={`relative z-10 text-sm font-medium transition-colors duration-300 ${
                        active
                          ? "text-white"
                          : "text-gray-600 dark:text-gray-300"
                      }`}
                    >
                      {item.name}
                    </motion.span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </LayoutGroup>

        {/* <div className="flex items-center gap-3">
          <ThemeToggle /> */}

        <div className="flex items-center gap-3">
          <div className="hidden md:block lg:block">
            <ThemeToggle />
          </div>

          {user ? (
            <>
              <Link
                href="/profile"
                className="transition-transform hover:scale-105"
              >
                {user?.photoURL ? (
                  <Image
                    src={user.photoURL}
                    alt={user.displayName}
                    width={42}
                    height={42}
                    className="h-11 w-11 rounded-full border-2 border-blue-500 object-cover"
                  />
                ) : (
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
                    {user?.displayName?.charAt(0).toUpperCase()}
                  </div>
                )}
              </Link>

              <Modal>
                <Button variant="danger" className="rounded-full">
                  Logout
                </Button>

                <Modal.Backdrop>
                  <Modal.Container placement="center">
                    <Modal.Dialog className="max-w-sm">
                      <Modal.CloseTrigger />

                      <Modal.Header>
                        <Modal.Heading>Confirm Logout</Modal.Heading>
                      </Modal.Header>

                      <Modal.Body>
                        <p>Are you sure you want to logout?</p>
                      </Modal.Body>

                      <Modal.Footer>
                        <Button variant="outline" slot="close">
                          Cancel
                        </Button>

                        <Button
                          variant="danger"
                          slot="close"
                          onPress={handleLogout}
                        >
                          Logout
                        </Button>
                      </Modal.Footer>
                    </Modal.Dialog>
                  </Modal.Container>
                </Modal.Backdrop>
              </Modal>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium transition hover:border-blue-600 hover:text-blue-600"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white"
              >
                Register
              </Link>
            </>
          )}

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 transition hover:bg-gray-100 dark:hover:bg-slate-800 lg:hidden"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden border-t border-gray-200/60 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80 lg:hidden"
          >
            <motion.div
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
              initial="hidden"
              animate="show"
              className="space-y-2 p-5"
            >
              {navLinks.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <motion.div
                    key={item.href}
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: -20,
                      },
                      show: {
                        opacity: 1,
                        x: 0,
                      },
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                        active
                          ? "bg-blue-600 text-white shadow-lg"
                          : "text-gray-700 hover:bg-white hover:shadow-md dark:text-gray-200 dark:hover:bg-slate-900"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}

              <div className="my-3 border-t border-gray-200 dark:border-slate-800" />

              {user ? (
                <div className="space-y-3">
                  <Link
                    href="/add-car"
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 font-medium hover:bg-gray-100 dark:hover:bg-slate-900"
                  >
                    Add Car
                  </Link>

                  <Link
                    href="/my-bookings"
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 font-medium hover:bg-gray-100 dark:hover:bg-slate-900"
                  >
                    My Bookings
                  </Link>

                  <Link
                    href="/my-added-cars"
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 font-medium hover:bg-gray-100 dark:hover:bg-slate-900"
                  >
                    My Added Cars
                  </Link>

                  <Modal>
                    <Button variant="danger" className="w-full rounded-full">
                      Logout
                    </Button>

                    <Modal.Backdrop>
                      <Modal.Container placement="center">
                        <Modal.Dialog className="max-w-sm">
                          <Modal.CloseTrigger />

                          <Modal.Header>
                            <Modal.Heading>Confirm Logout</Modal.Heading>
                          </Modal.Header>

                          <Modal.Body>
                            <p>Are you sure you want to logout?</p>
                          </Modal.Body>

                          <Modal.Footer>
                            <Button variant="outline" slot="close">
                              Cancel
                            </Button>

                            <Button
                              variant="danger"
                              slot="close"
                              onPress={handleLogout}
                            >
                              Logout
                            </Button>
                          </Modal.Footer>
                        </Modal.Dialog>
                      </Modal.Container>
                    </Modal.Backdrop>
                  </Modal>
                </div>
              ) : (
                <div className="space-y-3">
                  <Link
                    href="/login"
                    onClick={() => setOpen(false)}
                    className="block rounded-xl border border-gray-300 px-4 py-3 text-center transition hover:border-blue-600 hover:text-blue-600"
                  >
                    Login
                  </Link>

                  <Link
                    href="/register"
                    onClick={() => setOpen(false)}
                    className="block rounded-xl bg-blue-600 px-4 py-3 text-center font-semibold text-white shadow-lg"
                  >
                    Register
                  </Link>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
