"use client";

import { toast } from "sonner";
import { useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button, Modal } from "@heroui/react";
import { AuthContext } from "@/context/AuthProvider";

import ThemeToggle from "./ThemeToggle";

const publicLinks = [
  { name: "Home", href: "/" },
  { name: "Explore Cars", href: "/cars" },
];

const privateLinks = [
  { name: "Add Car", href: "/add-car" },
  { name: "My Bookings", href: "/my-bookings" },
  { name: "My Added Cars", href: "/my-cars" },
];

export default function Navbar() {
  const router = useRouter();

  const { user, logoutUser } = useContext(AuthContext);

  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = user ? [...publicLinks, ...privateLinks] : publicLinks;

  const handleLogout = async () => {
    try {
      await logoutUser();
      toast.success("Logged out successfully");
      router.push("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/60 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/">
          <h1 className="text-2xl font-black text-blue-600">DriveFleet</h1>
        </Link>

        <LayoutGroup>
          <ul className="hidden lg:flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 p-2 dark:border-slate-700 dark:bg-slate-900">
            {links.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <li key={item.href} className="relative">
                  <Link href={item.href} className="relative px-5 py-2.5">
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

                    <span
                      className={`relative z-10 text-sm font-medium ${
                        active
                          ? "text-white"
                          : "text-gray-600 dark:text-gray-300"
                      }`}
                    >
                      {item.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </LayoutGroup>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          {user ? (
            <>
              <Link href="/" className="transition-transform hover:scale-105">
                {user?.photoURL ? (
                  <Image
                    src={user.photoURL}
                    alt={user?.displayName || "user"}
                    width={42}
                    height={42}
                    className="h-11 w-11 rounded-full border-2 border-blue-500 object-cover"
                  />
                ) : (
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
                    {user?.displayName?.charAt(0)?.toUpperCase()}
                  </div>
                )}
              </Link>

              <Modal>
                <Button variant="danger">Logout</Button>

                <Modal.Backdrop>
                  <Modal.Container placement="center">
                    <Modal.Dialog className="max-w-sm">
                      <Modal.CloseTrigger className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-600 transition" />

                      <Modal.Header>
                        <Modal.Heading>Confirm Logout</Modal.Heading>
                      </Modal.Header>

                      <Modal.Body>
                        <p className="text-black dark:text-white">
                          Are you sure you want to logout?
                        </p>
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
                className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium hover:border-blue-600 hover:text-blue-600"
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
            className="lg:hidden rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-slate-800"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden border-t border-gray-200/60 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80"
          >
            <div className="p-5 space-y-2">
              {links.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                      active
                        ? "bg-blue-600 text-white shadow-lg"
                        : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-slate-900"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
